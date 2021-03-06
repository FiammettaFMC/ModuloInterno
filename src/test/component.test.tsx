import 'react';
import { ConfigRL } from 'panels/PredictionPanel/strategies/RL/ConfigRL';
import { LoadingState, dateTime, DefaultTimeZone, FieldType, ArrayVector } from '@grafana/data';

import { ConfigSVM } from 'panels/PredictionPanel/strategies/SVM/ConfigSVM';
import { Predictor } from 'panels/PredictionPanel/utils/Predictor';
import { PanelController } from 'panels/PredictionPanel/PanelController';
import { OptionRL } from 'panels/PredictionPanel/strategies/RL/OptionsRL';
import { OptionSVM } from 'panels/PredictionPanel/strategies/SVM/OptionsSVM';

let data = {
    series: [
        {
            name: '',
            fields: [
                {
                    name: '',
                    type: FieldType.number,
                    config: {},
                    values: new ArrayVector([[1, 2]]),
                },
                {
                    name: '',
                    type: FieldType.number,
                    config: {},
                    values: new ArrayVector([[1, 2]]),
                },
            ],
            length: 0,
        },
        {
            name: '',
            fields: [
                {
                    name: '',
                    type: FieldType.number,
                    config: {},
                    values: new ArrayVector([[1, 2]]),
                },
                {
                    name: '',
                    type: FieldType.number,
                    config: {},
                    values: new ArrayVector([[1, 2]]),
                },
            ],
            length: 0,
        },
    ],
    state: LoadingState.Done,
    timeRange: {
        from: dateTime(),
        raw: {
            from: dateTime(),
            to: dateTime(),
        },
        to: dateTime(),
    },
};
let optionsRL = {
    predictor: new Predictor('RL', [1, 1], '', new OptionRL()),
};

let optionsSVM = {
    predictor: new Predictor('SVM', [1, 1], '', new OptionSVM()),
};

let controllerMock = new PanelController({
    id: 0,
    data: data,
    timeRange: data.timeRange,
    timeZone: DefaultTimeZone,
    options: optionsRL,
    onOptionsChange: () => {},
    transparent: false,
    height: 0,
    width: 0,
    renderCounter: 0,
    replaceVariables: () => '',
    onChangeTimeRange: () => {},
    fieldConfig: { defaults: {}, overrides: [] },
    onFieldConfigChange: () => {},
});

test('renderOptionsRL', () => {
    let configRL = new ConfigRL({
        data: data,
        options: optionsRL,
        onOptionsChange: () => {},
    });
    configRL.render();
    configRL.renderQueryOptions();
    configRL.setToPredict('0');
});

test('renderOptionsSVM', () => {
    let configSVM = new ConfigSVM({
        data: data,
        options: optionsSVM,
        onOptionsChange: () => {},
    });
    configSVM.render();
    configSVM.renderQueryOptions();
    configSVM.setFirstQuery('0');
});

test('renderOptionsSVMWithoutOpt', () => {
    let configSVM = new ConfigSVM({
        data: data,
        options: optionsSVM,
        onOptionsChange: () => {},
    });
    configSVM.render();
    configSVM.renderQueryOptions();
    configSVM.setFirstQuery('0');
});

test('conrtollerRender', () => {
    controllerMock.render();
});
