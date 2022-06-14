const axios = require('axios').default;
const { Telegraf } = require('telegraf');

require('dotenv').config()

const token = process.env.BOT_TOKEN;
const apiKey = process.env.WEATHER_TOKEN;
const bot = new Telegraf(token);

const emojies = {
    "thunderstorm" : "\u{1F4A8}",
    "drizzle" : "\u{1F4A7}",
    "rain" : "\u{02614}",
    "snowflake" : "\u{02744}",
    "snowman" : "\u{026C4}",
    "atmosphere" : "\u{1F301}",
    "clearSky" : "\u{02600}",
    "fewClouds" : "\u{026C5}",
    "clouds" : "\u{02601}",
    "hot" : "\u{1F525}",
    "default" : "\u{1F300}"
}

bot.start((ctx) => ctx.reply(`Hi ${ctx.message.from.first_name},\nThis is simple bot to tell the weather of main Ethiopian cities at the requested time. Available Commands:\n/weather_addis\n/weather_gondar\n/weather_mekelle\n/weather_adama\n/weather_awassa\n/weather_bahirdar\n/weather_diredawa\n/weather_jimma\n/weather_jijiga\n/weather_sodo\n/weather_gambella\n/weather_jinka \n \n \nmade with ❤️ by @yohan_nes`));
bot.help((ctx) => ctx.reply(`Hi ${ctx.message.from.first_name},\nThis is simple bot to tell the weather of main Ethiopian cities at the requested time. made by @yohan_nes\nAvailable Commands:\n/weather_addis\n/weather_gondar\n/weather_mekelle\n/weather_adama\n/weather_awassa\n/weather_bahirdar\n/weather_diredawa\n/weather_jimma\n/weather_jijiga\n/weather_sodo\n/weather_gambella\n/weather_jinka\n \n \nmade with ❤️ by @yohan_nes`));
bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.command('quit', (ctx) => {
    // Explicit usage
    ctx.telegram.leaveChat(ctx.message.chat.id);
  
    // Using context shortcut
    ctx.leaveChat();
})  

bot.command('yohannes', (ctx) => {
    ctx.reply("Hello yohannes");
});

bot.command('weather_addis', async (ctx) => {
    console.log("received a request");
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Addis Ababa&appid=${apiKey}&units=metric`);
        let emoji = emojies[response.data.weather[0].main.toLowerCase()];
        let message = `${response.data.name} ${emoji}\n${capitalizeFirstLetter(response.data.weather[0].description)}\nTemprature: ${response.data.main.temp} °C\nMinimum: ${response.data.main.temp_min} °C\nMaximum: ${response.data.main.temp_max} °C\nHumidity: ${response.data.main.humidity}\nWind: Speed ${response.data.wind.speed}, Degree ${response.data.wind.deg} `;
        ctx.reply(message);
    } catch (error) {
        console.log(error);
        ctx.reply(error);
    }
});

bot.command('weather_gondar', async (ctx) => {
    console.log("received a request");
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Gondar&appid=${apiKey}&units=metric`);
        let emoji = emojies[response.data.weather[0].main.toLowerCase()];
        let message = `${response.data.name} ${emoji}\n${capitalizeFirstLetter(response.data.weather[0].description)}\nTemprature: ${response.data.main.temp} °C\nMinimum: ${response.data.main.temp_min} °C\nMaximum: ${response.data.main.temp_max} °C\nHumidity: ${response.data.main.humidity}\nWind: Speed ${response.data.wind.speed}, Degree ${response.data.wind.deg} `;
        ctx.reply(message);
    } catch (error) {
        console.log(error);
        ctx.reply(error);
    }
});


bot.command('weather_mekelle', async (ctx) => {
    console.log("received a request");
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Mekele&appid=${apiKey}&units=metric`);
        let emoji = emojies[response.data.weather[0].main.toLowerCase()];
        let message = `${response.data.name} ${emoji}\n${capitalizeFirstLetter(response.data.weather[0].description)}\nTemprature: ${response.data.main.temp} °C\nMinimum: ${response.data.main.temp_min} °C\nMaximum: ${response.data.main.temp_max} °C\nHumidity: ${response.data.main.humidity}\nWind: Speed ${response.data.wind.speed}, Degree ${response.data.wind.deg} `;
        ctx.reply(message);
    } catch (error) {
        console.log(error);
        ctx.reply(error);
    }
});

bot.command('weather_adama', async (ctx) => {
    console.log("received a request");
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Adama&appid=${apiKey}&units=metric`);
        let emoji = emojies[response.data.weather[0].main.toLowerCase()];
        let message = `${response.data.name} ${emoji}\n${capitalizeFirstLetter(response.data.weather[0].description)}\nTemprature: ${response.data.main.temp} °C\nMinimum: ${response.data.main.temp_min} °C\nMaximum: ${response.data.main.temp_max} °C\nHumidity: ${response.data.main.humidity}\nWind: Speed ${response.data.wind.speed}, Degree ${response.data.wind.deg} `;
        ctx.reply(message);
    } catch (error) {
        console.log(error);
        ctx.reply(error);
    }
});


bot.command('weather_awassa', async (ctx) => {
    console.log("received a request");
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Awassa&appid=${apiKey}&units=metric`);
        let emoji = emojies[response.data.weather[0].main.toLowerCase()];
        let message = `${response.data.name} ${emoji}\n${capitalizeFirstLetter(response.data.weather[0].description)}\nTemprature: ${response.data.main.temp} °C\nMinimum: ${response.data.main.temp_min} °C\nMaximum: ${response.data.main.temp_max} °C\nHumidity: ${response.data.main.humidity}\nWind: Speed ${response.data.wind.speed}, Degree ${response.data.wind.deg} `;
        ctx.reply(message);
    } catch (error) {
        console.log(error);
        ctx.reply(error);
    }
});


bot.command('weather_bahirdar', async (ctx) => {
    console.log("received a request");
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Bahir dar&appid=${apiKey}&units=metric`);
        let emoji = emojies[response.data.weather[0].main.toLowerCase()];
        let message = `${response.data.name} ${emoji}\n${capitalizeFirstLetter(response.data.weather[0].description)}\nTemprature: ${response.data.main.temp} °C\nMinimum: ${response.data.main.temp_min} °C\nMaximum: ${response.data.main.temp_max} °C\nHumidity: ${response.data.main.humidity}\nWind: Speed ${response.data.wind.speed}, Degree ${response.data.wind.deg} `;
        ctx.reply(message);
    } catch (error) {
        console.log(error);
        ctx.reply(error);
    }
});


bot.command('weather_diredawa', async (ctx) => {
    console.log("received a request");
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Dire dawa&appid=${apiKey}&units=metric`);
        let emoji = emojies[response.data.weather[0].main.toLowerCase()];
        let message = `${response.data.name} ${emoji}\n${capitalizeFirstLetter(response.data.weather[0].description)}\nTemprature: ${response.data.main.temp} °C\nMinimum: ${response.data.main.temp_min} °C\nMaximum: ${response.data.main.temp_max} °C\nHumidity: ${response.data.main.humidity}\nWind: Speed ${response.data.wind.speed}, Degree ${response.data.wind.deg} `;
        ctx.reply(message);
    } catch (error) {
        console.log(error);
        ctx.reply(error);
    }
});


bot.command('weather_jimma', async (ctx) => {
    console.log("received a request");
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Jimma&appid=${apiKey}&units=metric`);
        let emoji = emojies[response.data.weather[0].main.toLowerCase()];
        let message = `${response.data.name} ${emoji}\n${capitalizeFirstLetter(response.data.weather[0].description)}\nTemprature: ${response.data.main.temp} °C\nMinimum: ${response.data.main.temp_min} °C\nMaximum: ${response.data.main.temp_max} °C\nHumidity: ${response.data.main.humidity}\nWind: Speed ${response.data.wind.speed}, Degree ${response.data.wind.deg} `;
        ctx.reply(message);
    } catch (error) {
        console.log(error);
        ctx.reply(error);
    }
});


bot.command('weather_jijiga', async (ctx) => {
    console.log("received a request");
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Jijiga&appid=${apiKey}&units=metric`);
        let emoji = emojies[response.data.weather[0].main.toLowerCase()];
        let message = `${response.data.name} ${emoji}\n${capitalizeFirstLetter(response.data.weather[0].description)}\nTemprature: ${response.data.main.temp} °C\nMinimum: ${response.data.main.temp_min} °C\nMaximum: ${response.data.main.temp_max} °C\nHumidity: ${response.data.main.humidity}\nWind: Speed ${response.data.wind.speed}, Degree ${response.data.wind.deg} `;
        ctx.reply(message);
    } catch (error) {
        console.log(error);
        ctx.reply(error);
    }
});


bot.command('weather_sodo', async (ctx) => {
    console.log("received a request");
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Sodo&appid=${apiKey}&units=metric`);
        let emoji = emojies[response.data.weather[0].main.toLowerCase()];
        let message = `${response.data.name} ${emoji}\n${capitalizeFirstLetter(response.data.weather[0].description)}\nTemprature: ${response.data.main.temp} °C\nMinimum: ${response.data.main.temp_min} °C\nMaximum: ${response.data.main.temp_max} °C\nHumidity: ${response.data.main.humidity}\nWind: Speed ${response.data.wind.speed}, Degree ${response.data.wind.deg} `;
        ctx.reply(message);
    } catch (error) {
        console.log(error);
        ctx.reply(error);
    }
});

bot.command('weather_gambella', async (ctx) => {
    console.log("received a request");
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Gambella&appid=${apiKey}&units=metric`);
        let emoji = emojies[response.data.weather[0].main.toLowerCase()];
        let message = `${response.data.name} ${emoji}\n${capitalizeFirstLetter(response.data.weather[0].description)}\nTemprature: ${response.data.main.temp} °C\nMinimum: ${response.data.main.temp_min} °C\nMaximum: ${response.data.main.temp_max} °C\nHumidity: ${response.data.main.humidity}\nWind: Speed ${response.data.wind.speed}, Degree ${response.data.wind.deg} `;
        ctx.reply(message);
    } catch (error) {
        console.log(error);
        ctx.reply(error);
    }
});

bot.command('weather_jinka', async (ctx) => {
    console.log("received a request");
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Jinka&appid=${apiKey}&units=metric`);
        let emoji = emojies[response.data.weather[0].main.toLowerCase()];
        let message = `${response.data.name} ${emoji}\n${capitalizeFirstLetter(response.data.weather[0].description)}\nTemprature: ${response.data.main.temp} °C\nMinimum: ${response.data.main.temp_min} °C\nMaximum: ${response.data.main.temp_max} °C\nHumidity: ${response.data.main.humidity}\nWind: Speed ${response.data.wind.speed}, Degree ${response.data.wind.deg} `;
        ctx.reply(message);
    } catch (error) {
        console.log(error);
        ctx.reply(error);
    }

});

bot.command('weather_custom', async (ctx) => {
    console.log("received a request");
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Jinka&appid=${apiKey}&units=metric`);
        let emoji = emojies[response.data.weather[0].main.toLowerCase()];
        let message = `${response.data.name} ${emoji}\n${capitalizeFirstLetter(response.data.weather[0].description)}\nTemprature: ${response.data.main.temp} °C\nMinimum: ${response.data.main.temp_min} °C\nMaximum: ${response.data.main.temp_max} °C\nHumidity: ${response.data.main.humidity}\nWind: Speed ${response.data.wind.speed}, Degree ${response.data.wind.deg} `;
        ctx.reply(message);
    } catch (error) {
        console.log(error);
        ctx.reply(error);
    }

});



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));