const Discord = require('discord.js');
const bot = new Discord.Client();

var laguRhera = ["Ich bin Auslander", "Ma mama don laik ", "Sebat dulu Gan" ];

var respons = ["Sumpah ga jelas banget", "Tijel lo asli", "Gue tampol lo, ga jelas banget jadi orang", "Sok asik banget", 
                "Lucu banget kntl", "Ganteng lo boi", "Oy oy oy oy!", "Babi", "Anjing lo", 
                "hahahaha ga jelas banget asli", "1 v 1 sini ?!?!?!?!?!", "??????????", "Anjing lo", "Siap bang jago",
                "ASHIAP", "SIAP BANG JAGO", "Sumpah gue tampol palalo"]
                
                const Rhera_ID = ''; 
                const Rhera_ID2 = '';
                const martin_ID = '';
                const kukuh_ID = '';
                const fatah_ID = '';
                const azri_ID = '';
                const joni_ID = '';
                const baginda_ID = '';
                const wb = 'https://cdn.discordapp.com/attachments/548778871282073650/749810481681924137/unknown.png';

                
                function getRandomInt(max) {
                    return Math.floor(Math.random() * Math.floor(max));
                  }
                
                  bot.on('ready', ()=>{
                    bot.user.setActivity('Tree of Savior')
                    console.log("Test Online")
                });
                
                bot.on('message', msg=>{
                                   
                        if(msg.author.id == Rhera_ID || msg.author.id == Rhera_ID2){
                            msg.reply(respons[getRandomInt(respons.length - 1)]);
                        }
                            if(msg.content.toLowerCase() === 'hai ra'){
                                msg.reply('iya apa tot?')
                            }
                            else if(msg.content.toLowerCase() === 'wb'){
                                msg.reply('nih gambarnya', {files: [wb]})
                            }
                            else if(msg.content.toLowerCase() === 'apa?'){
                                msg.reply('ga jelass');
                            }
                            else if(msg.content.toLowerCase() === 'nyanyi ra'
                                    || msg.content.toLowerCase() === 'nyanyi dong ra'){
                                    msg.channel.send(laguRhera[getRandomInt(laguRhera.length - 1)]);
                            }
                         });  
                         
//discord.js 
bot.login(process.env.token);



