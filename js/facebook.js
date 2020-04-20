const credentials = {
    access_page_token: 'EAAq2ZCEIpHwUBANYTGVFsxLa9esdbY4ZCECJpCj1ZA0tIiUFZBuDY55gaCKQMHoQ9FXNiNZBukh2tEqF50mfEQ0z6ZCLAy7CimY237enLpHYERcYZCJwWd7ZB30GMJDXZAo1o7Hbu7QZCUTHlvZAd97Ms2ZBLbVXp6PSds1ZA7fYWuIisryhMrfPhDFN2Kg1JRl93wukZD',
    id: 'https://lockdownstudio.github.io/',
    params: 'engagement'
}

const fb_data = async _ => {
    const result = await fetch(`https://graph.facebook.com/v6.0/?id=${credentials.id}&fields=${credentials.params}&access_token=${credentials.access_page_token}`);
    const data = await result.json();

    document.getElementById("fbdata-reaction").innerHTML = ' Likes (' + data.engagement.reaction_count +')';
    document.getElementById("fbdata-share").innerHTML = ' Share (' + data.engagement.share_count +')';
}

fb_data();