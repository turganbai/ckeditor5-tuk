import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import ShowToolsIcon from '../icons/menu.svg';

class ShowTools extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'show_tools', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'show tools',
				icon: ShowToolsIcon,
				tooltip: true,
				class: 'show-tools',
			} );

			// Callback executed once the image is clicked.
			const toolbarBlock = document.querySelector( '.ck-toolbar' );

			view.on( 'execute', () => {
				toolbarBlock.childNodes.forEach( ( child, index ) => {
					if ( index > 3 ) {
						if ( child.style.display == 'none' ) {
							child.style.display = 'block';
						} else {
							child.style.display = 'none';
						}
					}
				} );
				toolbarBlock.lastChild.style.display = 'block';
			} );

			return view;
		} );
	}
}

export default ShowTools;
