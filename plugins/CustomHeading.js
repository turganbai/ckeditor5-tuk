import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import TIcon from '../icons/format-size.svg';

class CustomHeading extends Plugin {
	init() {
		this._createButton();
	}

	_createButton() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'custom_heading', locale => {
			const view = new ButtonView( locale );
			const command = editor.commands.get( 'heading' );

			view.label = 'custom_heading';
			view.icon = TIcon;
			view.tooltip = true;
			view.isToggleable = true;
			view.bind( 'isEnabled' ).to( command );
			view.bind( 'isOn' ).to( command, 'value', value => value == 'custom_heading' );

			let count = 1;
			view.on( 'execute', () => {
				let commandValue = 'paragraph';
				switch ( count ) {
					case 1:
						commandValue = 'heading3';
						count++;
						break;
					case 2:
						commandValue = 'heading2';
						count++;
						break;
					case 3:
						commandValue = 'paragraph';
						count = 1;
						break;
				}
				editor.execute( 'heading', { value: commandValue } );
			} );

			return view;
		} );
	}
}

export default CustomHeading;
