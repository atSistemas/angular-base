import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

export default class TemplateBuilder {
    private template: Function;
    constructor(templateName: string) {
        this.template = Handlebars.compile(fs.readFileSync(path.join(path.resolve(), 'templates', templateName), 'utf8'));
    }
    public populate(context: any): Function {
        return this.template(context);
    }
};