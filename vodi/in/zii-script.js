// Importing https module
const axios = require("axios");

async function getChannels() {
	let channels = []
	const hostUrl = 'https://catalogapi.zee5.com'
	const { data: channelsList } = await axios.get(`${hostUrl}/v1/channel?page=1&page_size=150&translation=en`);

	if (channelsList.items && channelsList.items.length > 0) {
		for (i = 0; i < channelsList.items.length; i++) {
			const channel = channelsList.items[i];
			try {
				const { data: cd } = await axios(`${hostUrl}/v1/channel/${channel.id}?translation=en`)
				if (cd.stream_url_hls_connected || cd.stream_url_hls) {
					channels.push({
						id: channel.id,
						title: channel.title,
						group_title: channel.genres[0].id,
						logo: `https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/${channel.id}/channel_list/${channel.list_image}`,
						stream_url: cd.stream_url_hls_connected ? cd.stream_url_hls_connected : cd.stream_url_hls
					})
				}

			} catch (error) {
				console.error(`${channel.title}: Channel Not Found/Error`)
			}
		}
	}

	let fileContent = ''
	// Add EPG guide
	fileContent += `#EXTM3U url-tvg="https://3o77.short.gy/epg.xml.gz"\n`

	// Update Channel Links
	channels.forEach(c => fileContent += `\n#EXTINF:-1 tvg-id="${c.id}" group-title="${c.group_title}" tvg-logo="${c.logo}",${c.title}\n${c.stream_url}`)

	console.log(fileContent)
	// copy the content and paste it in the playlist
}

getChannels();