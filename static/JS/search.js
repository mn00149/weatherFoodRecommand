async function search(e) {
	console.log('function search starts')

	const coords = e?.type === 'submit'
	? await korToCoords()
	: getCurrentCoords()

	console.log('현재 좌표입니다.', coords)
	createKaKaoMap()
	const weather = await getWeather(coords)
	console.log('현재 날씨입니다.', weather)

	console.log('function search ends')
}
