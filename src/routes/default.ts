import { Controller, get } from 'vio';

export default class Default extends Controller {  
    @get()
    default() {
        return {
            title: 'Hello, World!',
            content: 'Keep calm and read the source code.'
        };
    }
}