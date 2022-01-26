import React from 'react';
import { EditorKit, EditorKitDelegate } from 'sn-editor-kit';
import { Tldraw, TldrawApp, TDDocument } from '@tldraw/tldraw';
import * as InitState from './initial-state.json';

export enum HtmlElementId {
  snComponent = 'sn-component',
  textarea = 'textarea',
}

export enum HtmlClassName {
  snComponent = 'sn-component',
  textarea = 'sk-input contrast textarea',
}

export const TLDrawContentDescription = 'tldraw content \n';

export interface EditorInterface {
  printUrl: boolean;
  text: string;
}

const initialState = {
  printUrl: false,
  text: JSON.stringify(InitState.document),
};

let keyMap = new Map();

export default class Editor extends React.Component<{}, EditorInterface> {
  editorKit: any;

  constructor(props: EditorInterface) {
    super(props);
    this.configureEditorKit();
    this.state = initialState;
  }

  configureEditorKit = () => {
    let delegate = new EditorKitDelegate({
      /** This loads every time a different note is loaded */
      setEditorRawText: (text: string) => {
        this.setState({
          ...initialState,
          text,
        });
      },
      clearUndoHistory: () => {},
      getElementsBySelector: () => [],
    });

    // TODO: Patch with first line description.

    this.editorKit = new EditorKit({
      delegate: delegate,
      mode: 'plaintext',
      supportsFilesafe: false,
    });
  };

  handleChange = (state: TldrawApp, reason: string | undefined): void => {
    // console.log(state, reason);
    // console.log(reason);
    // [Resolved] Bug here: Text on sticky notes not saved if
    // you move away from the note / page, unless
    // session:complete is fired by some other action

    const triggerSaveCommands = ['session:complete', 'updated_shapes'];

    if (reason && triggerSaveCommands.includes(reason)) {
      this.saveText(JSON.stringify(state.document));
      // console.log(reason);
    }
  };

  saveText = (text: string) => {
    this.saveNote(text);

    /** State managed within tldraw app, so we only need to
     * load state on start up, not after every change
     */
    // this.setState({
    //   text: text,
    // });
  };

  saveNote = (text: string) => {
    /** This will work in an SN context, but breaks the standalone editor,
     * so we need to catch the error
     */
    try {
      this.editorKit.onEditorValueChanged(text);
    } catch (error) {
      console.log('Error saving note:', error);
    }
  };

  onBlur = (e: React.FocusEvent) => {};

  onFocus = (e: React.FocusEvent) => {};

  onKeyDown = (e: React.KeyboardEvent | KeyboardEvent) => {
    keyMap.set(e.key, true);
    // Do nothing if 'Control' and 's' are pressed
    if (keyMap.get('Control') && keyMap.get('s')) {
      e.preventDefault();
    }
  };

  onKeyUp = (e: React.KeyboardEvent | KeyboardEvent) => {
    keyMap.delete(e.key);
  };

  getDocument = (text: string): TDDocument => {
    if (!text) {
      return InitState.document;
    }

    let document: TDDocument = InitState.document;
    try {
      document = JSON.parse(text);
    } catch {
      document = InitState.document;
    }

    return document as TDDocument;
  };

  render() {
    const { text } = this.state;
    return (
      <div
        className={
          HtmlElementId.snComponent + (this.state.printUrl ? ' print-url' : '')
        }
        id={HtmlElementId.snComponent}
        tabIndex={0}
      >
        <Tldraw
          showUI={true}
          showMenu={true}
          showPages={false}
          showStyles={true}
          showTools={true}
          showZoom={true}
          darkMode={true}
          onChange={this.handleChange}
          document={this.getDocument(text)}
        />
      </div>
    );
  }
}
