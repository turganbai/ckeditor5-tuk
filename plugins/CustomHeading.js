import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import TIcon from '../icons/format-size.svg';

class CustomHeading extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'custom_heading', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'heading',
				icon: TIcon,
				tooltip: true,
				class: 'custom-heading',
			} );

			view.on( 'execute', () => {
			} );

			return view;
		} );
	}
}

export default CustomHeading;
