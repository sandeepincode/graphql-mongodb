export default function stripTags ( variables ) {
	return new Promise ( resolve => {
		const tag = variables.replace( /<\/?[^>]+(>|$)/g, "" );
		return resolve( tag );
	});
}