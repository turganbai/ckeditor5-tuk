
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import ShowToolsIcon from '@ckeditor/ckeditor5-core/theme/icons/low-vision.svg';

class ShowTools extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'show_tools', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'show tools',
				icon: ShowToolsIcon,
				tooltip: true
			} );

			// Callback executed once the image is clicked.
			view.on( 'execute', () => {
				console.log(editor);
				editor.destroy();
			} );

			return view;
		} );
	}
}
export default ShowTools;
