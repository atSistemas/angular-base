import * as fs from 'fs';
import * as path from 'path';
import * as Handlebars from 'handlebars';

Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context);
});

export default class Template {
    private template: Function;
    constructor(templateName: string) {
        this.template = Handlebars.compile(fs.readFileSync(path.join(path.resolve(), 'server', 'templates', templateName), 'utf8'));
    }
    public populate(context: any): string {
        return this.template(context);
    }
};