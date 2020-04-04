import Strategy from './Strategy';
import StrategyRL from './StrategyRL';
import StrategySVM from './StrategySVM';
import { observable } from 'mobx';

export default class Model {
    
    @observable private data: number[][] = [];
    @observable private predictor: {
        algorithm: string,
        coefficients: number[],
        function: string,
        options?: any,
        accuracy?: {}
    } = {
        algorithm: '',
        coefficients: [],
        function: ''
    };
    private strategy?: Strategy;
   
    public getData() {
        return this.data;
    }

    public getPredictor() {
        return this.predictor;
    }

    /** Load file and save it in data */
    public loadData(input: number[][]) {
        this.data = input;
    }

    public setOptions(params: any) {
        this.predictor.options = this.strategy?.setParams(params);
    }

    /** Set the algorithm to use thanks to the Context*/
    public setAlgorithm(alg: string){
        this.predictor.algorithm = alg;
        if(alg === 'Regressione Lineare')
            this.strategy = new StrategyRL();
        else
            this.strategy = new StrategySVM();
    }

    public parseDatatoChart(array: number[][]){
        return this.strategy?.parseDatatoChart(array);
    }

    /** Save the predictor in function */
    public train() {
        this.predictor = this.strategy?.train(this.data, this.predictor.options);
    }

    public parseDatatoLine(graph: any){
        return this.strategy?.parseDatatoLine(graph,this.predictor.coefficients);
    }

    /** Download predictor as JSON */
    public downloadPredictor() {
        const FileSaver = require('file-saver'); // import file saver
        const text = 
`{
    "Algorithm": "${this.predictor.algorithm}",
    "Coefficients": "${this.predictor.coefficients}",
    "Function": "${this.predictor.function}",
    "Options": "${this.predictor.options ? this.predictor.options : ''}",
    "Accuracy": "${this.predictor.accuracy ? this.predictor.accuracy : ''}"
}`; // string output
        const file = new File([text], 'Training.json', { type: 'text/json;charset=utf-8' });
        FileSaver.saveAs(file); // download
    }
}