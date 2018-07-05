export default function sanitizeString( str ) {
	return new Promise ( (resolve, reject) => {
		const str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    	return resolve(str.trim());
	});
}