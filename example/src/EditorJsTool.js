import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
import Paragraph from '@editorjs/paragraph'
import Hyperlink from 'editorjs-hyperlink';

export const EDITOR_JS_TOOLS: { [toolName: string]: ToolConstructable | ToolSettings } = {
    paragraph: {
        class: Paragraph,
        config: {
            preserveBlank: true
        },
        inlineToolbar: true
    },
    hyperlink: {
        class: Hyperlink,
        config: {
            shortcut: 'CMD+L',
            target: '_blank', // default null
            rel: 'nofollow', // default null
            availableTargets: [ '_self',{'frame':'Cadre','_blank':'Nouvelle Fenêtre'}],
            availableRels: [],
            validate: false,
            shouldAppendProtocol:false,
            shouldMakeLinkAbsolute: true,
            browseCallback : function (callback){

                console.log('browse clicked');

                callback('file.txt');
            }
        },
    },
};