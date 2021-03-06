import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';

import { Props } from './Props';
import { Data } from 'panels/PredictionPanel/utils/Data';
import { Model } from './Model';
import { PanelView } from './PanelView';
import { Predictor } from './utils/Predictor';

export class PanelController extends PureComponent<PanelProps<Props>> {
    private model: Model;
    private paused = false;
    private lastValue?: number;

    constructor(props: PanelProps) {
        super(props);
        this.model = new Model();
    }

    private setData() {
        const d = Data.fromSeries(this.props.data.series);
        this.model.setData(d);
    }

    private setPredictor() {
        if (this.props.options.predictor) {
            this.model.setPredictor(this.props.options.predictor);
        }
    }

    private predict() {
        this.lastValue = this.model.predict();
    }

    private saveToInflux() {
        this.model.saveToInflux();
    }

    private pause() {
        this.paused = true;
    }
    private start() {
        this.paused = false;
    }

    private updatePrediction() {
        this.setData();
        this.setPredictor();
        this.predict();
        this.saveToInflux();
    }

    private parsePredictor() {
        try {
            this.props.options.predictor?.getAlgorithm();
        } catch (e) {
            const json = this.props.options.predictor;
            this.props.options.predictor = Predictor.fromJSON(JSON.stringify(json));
        }
    }

    render() {
        this.parsePredictor();

        if (!this.paused) {
            this.updatePrediction();
        }

        if (!this.props.options.predictor) {
            return <p> Select a predictor </p>;
        }
        const predictor = this.props.options.predictor;

        return (
            <div>
                <PanelView
                    algorithm={predictor.getAlgorithm()}
                    coefficients={predictor.getCoefficients()}
                    opt={predictor.getOpt()}
                    lastValue={this.lastValue}
                    pause={() => this.pause()}
                    start={() => this.start()}
                />
            </div>
        );
    }
}
