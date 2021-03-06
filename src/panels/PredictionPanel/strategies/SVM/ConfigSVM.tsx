import React from 'react';
import { PanelOptionsGroup } from '@grafana/ui';
import { Config } from '../Config';
import { OptionSVM } from './OptionsSVM';
import { Predictor } from '../../utils/Predictor';

export class ConfigSVM extends Config {
    private predictor?: Predictor<OptionSVM>;

    private getSeriesNames() {
        return this.props.data.series.map(serie => {
            return serie.name || 'unknown';
        });
    }

    renderQueryOptions() {
        const seriesName = this.getSeriesNames();

        const options: JSX.Element[] = [];
        for (const i of seriesName.keys()) {
            options.push(
                <option value={i} selected={this.predictor?.getOpt().getFirstQuery() === i}>
                    {seriesName[i]}
                </option>
            );
        }
        return options;
    }

    setFirstQuery(value: string) {
        let opt: OptionSVM = this.props.options.predictor?.getOpt();
        opt.setFirstQuery(Number.parseInt(value, 10));
        this.render();
    }

    render() {
        this.predictor = this.props.options.predictor;
        if (!this.predictor?.getOpt().getFirstQuery()) {
            this.predictor?.getOpt().setFirstQuery(0);
        }
        return (
            <PanelOptionsGroup title="SVM">
                <p>{this.predictor?.getPredFun() ? 'Function: ' + this.predictor?.getPredFun() : ''}</p>
                <label className="gf-form-label width-10" style={{ display: 'inline-block' }}>
                    {' '}
                    x1 (first query){' '}
                </label>
                <div className="gf-form-select-wrapper width-10" style={{ display: 'inline-block' }}>
                    <select
                        className="input-small gf-form-input"
                        onChange={event => this.setFirstQuery(event.target.value)}
                    >
                        {this.renderQueryOptions()}
                    </select>
                </div>
            </PanelOptionsGroup>
        );
    }
}
