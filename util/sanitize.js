import _ from 'lodash';

export default function sanitize( variables ) {
	return new Promise( ( resolve, reject ) => {

		if ( !variables || _.isEmpty( variables ) ) {
			return resolve({});
		}

    	str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    	return str.trim();

		if ( typeof variables === Array ) {
			const array = variables.map( r => {

			});
		}

	});
}