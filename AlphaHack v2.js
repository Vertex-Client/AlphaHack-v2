var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var MainActivity = ctx;

//Get language of client side minecraft
var getLanguage = ModPE.getLanguage();

//Android import
var Button = android.widget.Button;
var LinearLayout = android.widget.LinearLayout;
var RelativeLayout = android.widget.RelativeLayout;
var PopupWindow = android.widget.PopupWindow;
var ScrollView = android.widget.ScrollView;
var TextView = android.widget.TextView;
var CheckBox = android.widget.CheckBox;
var Toast = android.widget.Toast;
var Runnable = java.lang.Runnable;
var View = android.view.View;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;
var Intent = android.content.Intent;
var Uri = android.net.Uri;
var Switch = android.widget.Switch;
var EditText = android.widget.EditText;
var Dialog = android.app.Dialog;
var WebView = android.webkit.WebView;
var Alert = android.app.AlertDialog.Builder

//Defines
var GUI;
var menu;
var num0 = 0;
var vidd = true;
var viddd = "§9";
var text = " ";
var version = "0.8.2";
if(version=="0.8.2")version = "Beta";

var liquidwalk = false;
var xray = false;
var ttot = false;
var antivoid = false;
var armor = false;
var coords = false;
var glide = false;
var tapspam = false;
var tapdestroy = false;
var spam = false;
var destroy = false;
var block = false;
var taptp = false;
var sign = false;
var autodestroy = false;
var autospam = false;
var onlyday = false;
var onlynight = false;
var chestesp = false;


var lightning = false;
var primedtnt = false;
var arrow = false;
var exporb = false;

var getVer = ModPE.getMinecraftVersion();

//old variables
var hackk = false;
var showp = false;
var fch = false;
var saddle = false;
var instakilled = false;
var instabreak = false;
var stackheart = false;
var parti = false;
var parti2 = false;
var nowalls = false;
var highjumps = false;
var grief = false;
var killaura = false;
var killfaura = false;
var uirender = false; 
var stat22 = false; 
var healthy = true;
var infhun = false;
var firepunch = false;
var deadchat = false;
var nofly = false;
var autod = false;
var remode = false;
var somd = false;
var desktop = false;
var killdaura = false;
var ban = false;

//ParticleType.angryVillager;
var particle1 = false;
//ParticleType.bubble;
var particle2 = false;
//ParticleType.cloud;
var particle3 = false;
//ParticleType.crit;
var particle4 = false;
//ParticleType.dripLava;
var particle5 = false;
//ParticleType.dripWater;
var particle6 = false;
//ParticleType.enchantmenttable;
var particle7 = false;
//ParticleType.fallingDust;
var particle8 = false;
//ParticleType.flame;
var particle9 = false;
//ParticleType.happyVillager;
var particle10 = false;
//ParticleType.heart;
var particle11 = false;
//ParticleType.hugeexplosion;
var particle12 = false;
//ParticleType.hugeexplosionSeed;
var particle13 = false;
//ParticleType.ink;
var particle14 = false;
//ParticleType.itemBreak;
var particle15 = false;
//ParticleType.lava;
var particle16 = false;
//ParticleType.mobFlame;
var particle17 = false;
//ParticleType.note;
var particle18 = false;
//ParticleType.portal;
var particle19 = false;
//ParticleType.rainSplash;
var particle20 = false;
//ParticleType.redstone;
var particle21 = false;
//ParticleType.slime;
var particle22 = false;
//ParticleType.smoke;
var particle23 = false;
//ParticleType.snowballpoof;
var particle24 = false;
//ParticleType.spell;
var particle25 = false;
//ParticleType.splash;
var particle26 = false;
//ParticleType.suspendedTown;
var particle27 = false;
//ParticleType.terrain;
var particle28 = false;
//ParticleType.waterWake;
var particle29 = false;
//largeexplode
var particle30 = false;
//spell2
var particle31 = false;
//spell3
var particle32 = false;

function getUpdate(callback){
var r = new java.lang.Runnable({
        run: function() {
            try {
                var u = new java.net.URL("");
                var c = u.openConnection();
                c.setRequestMethod("GET");
                c.setDoOutput(true);
                c.connect();
                c.getContentLength();
                var input = c.getInputStream();
                var contents = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                var bytesRead = 0;
                var strFileContents;
                while((bytesRead = input.read(contents)) != -1) {
                    strFileContents = new java.lang.String(contents, 0, bytesRead);
                }
                var update = strFileContents;
                //var mlgtext = JSON.parse(strFileContents+"");

if(mlgtext.status.equals("success")){
callback(new Array(mlgtext.query, mlgtext.country, mlgtext.regionName));
}else{
print("Error");
callback(new Array("Error","Error","Error"));
}
                }catch(e){
                clientMessage(e);
                clientMessage(e.lineNumber);
                }
                }});
                var th = new java.lang.Thread(r);
    th.start();
                }
function newLevel(){
getUpdate(function(info){clientMessage("")});
}

//main menu
ModPE.langEdit("menu.copyright", "AlphαHαckPE");
ModPE.langEdit("menu.generatingLevel","§l§e" + "Loading hacks\n"+ModPE.getI18n("menu.generatingLevel"));
ModPE.langEdit("menu.generatingTerrain","§l§e" + "Loading hacks\n"+ModPE.getI18n("menu.generatingTerrain"));
ModPE.langEdit("menu.loadingLevel","§l§e" + "Loading hacks\n"+ModPE.getI18n("menu.loadingLevel"));
ModPE.langEdit("menu.play",viddd + ModPE.getI18n("menu.play"));
ModPE.langEdit("menu.options",viddd + ModPE.getI18n("menu.options"));
ModPE.langEdit("menu.skins",viddd + ModPE.getI18n("menu.skins"));
ModPE.langEdit("menu.store",viddd + ModPE.getI18n("menu.store"));
ModPE.langEdit("menu.achievements",viddd + ModPE.getI18n("menu.achievements"));
ModPE.langEdit("menu.launcherOptions",viddd + ModPE.getI18n("menu.launcherOptions"));
ModPE.langEdit("menu.settings",viddd + ModPE.getI18n("menu.settings"));
ModPE.langEdit("menu.playdemo",viddd + ModPE.getI18n("menu.playdemo"));
ModPE.langEdit("menu.resetdemo",viddd + ModPE.getI18n("menu.resetdemo"));
ModPE.langEdit("menu.returnToGame",viddd + ModPE.getI18n("menu.returnToGame"));
ModPE.langEdit("menu.resourcepacks",viddd + ModPE.getI18n("menu.resourcepacks"));
ModPE.langEdit("menu.shareToLan",viddd + ModPE.getI18n("menu.shareToLan"));
ModPE.langEdit("menu.online",viddd + ModPE.getI18n("menu.online"));
ModPE.langEdit("menu.realms",viddd + ModPE.getI18n("menu.realms"));
ModPE.langEdit("menu.playOnRealms",viddd + ModPE.getI18n("menu.playOnRealms"));
ModPE.langEdit("menu.multiplayer",viddd + ModPE.getI18n("menu.multiplayer"));
ModPE.langEdit("menu.online",viddd + ModPE.getI18n("menu.online"));
ModPE.langEdit("menu.online",viddd + ModPE.getI18n("menu.online"));

//pause screen & death screen
ModPE.langEdit("pauseScreen.quit",viddd + ModPE.getI18n("pauseScreen.quit"));
ModPE.langEdit("pauseScreen.options",viddd + ModPE.getI18n("pauseScreen.options"));
ModPE.langEdit("pauseScreen.back",viddd + ModPE.getI18n("pauseScreen.back"));
ModPE.langEdit("pauseScreen.invite",viddd + ModPE.getI18n("pauseScreen.invite"));
ModPE.langEdit("pauseScreen.achievements",viddd + ModPE.getI18n("pauseScreen.achievements"));
ModPE.langEdit("deathScreen.quit",viddd + ModPE.getI18n("deathScreen.quit"));
ModPE.langEdit("deathScreen.respawn",viddd + ModPE.getI18n("deathScreen.respawn"));
ModPE.langEdit("deathScreen.message",viddd + ModPE.getI18n("deathScreen.message"));
ModPE.langEdit("chatScreen.hide",viddd + ModPE.getI18n("chatScreen.hide"));
ModPE.langEdit("pauseScreen.invite",viddd + ModPE.getI18n("pauseScreen.invite"));

//create screen
ModPE.langEdit("createWorldScreen.action.editLocal",viddd + ModPE.getI18n("createWorldScreen.action.editLocal"));
ModPE.langEdit("createWorldScreen.action.local",viddd + ModPE.getI18n("createWorldScreen.action.local"));
ModPE.langEdit("createWorldScreen.alwaysDay",viddd + ModPE.getI18n("createWorldScreen.alwaysDay"));
ModPE.langEdit("createWorldScreen.delete",ModPE.getI18n("createWorldScreen.delete"));
ModPE.langEdit("createWorldScreen.game.settings",viddd + ModPE.getI18n("createWorldScreen.game.settings"));
ModPE.langEdit("createWorldScreen.gameMode.creative",viddd + ModPE.getI18n("createWorldScreen.gameMode.creative"));
ModPE.langEdit("createWorldScreen.gameMode.survival",viddd + ModPE.getI18n("createWorldScreen.gameMode.survival"));
ModPE.langEdit("createWorldScreen.advanced",viddd + ModPE.getI18n("createWorldScreen.advanced"));

ModPE.langEdit("deathScreen.message","§c§lWasted");
ModPE.langEdit("commands.op.success","§l" + ModPE.getI18n("commands.op.success"));
ModPE.langEdit("commands.banip.success","§l" + ModPE.getI18n("commands.banip.success"));
ModPE.langEdit("commands.banip.success.players","§l" + ModPE.getI18n("commands.banip.success.players"));


ModPE.langEdit("options.allowCellularData",viddd + ModPE.getI18n("options.allowCellularData"));
ModPE.langEdit("playscreen.new",viddd + ModPE.getI18n("playscreen.new"));
ModPE.langEdit("skins.restore.button",viddd + ModPE.getI18n("skins.restore.button"));
ModPE.langEdit("externalServerScreen.addServer",viddd + ModPE.getI18n("externalServerScreen.addServer"));
ModPE.langEdit("playscreen.quit",viddd + ModPE.getI18n("playscreen.quit"));
ModPE.langEdit("chatScreen.hide",viddd + ModPE.getI18n("chatScreen.hide"));
ModPE.langEdit("action.interact.createMap",viddd + ModPE.getI18n("action.interact.createMap"));
ModPE.langEdit("xbox.signin",viddd + ModPE.getI18n("xbox.signin"));
ModPE.langEdit("xbox.signout",viddd + ModPE.getI18n("xbox.signout"));

function dip2px(dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

var bg64 = "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";

var buttonBg = "iVBORw0KGgoAAAANSUhEUgAAAEYAAAAgCAYAAACvgw7DAAAFB0lEQVR42t1aV47kOgzsQ0zOOWIwwOScw/1P5EVpUUY1pyjZ2PeAxX6wqWiJ5SIV2pP19fVuYWGhm5mZ6WZnZ7u5ubki8/PzvSwuLnZLS0vdyspKt7q6WgT9IBsbG93m5ma3tbVVZHt7u9vZ2ekF+d3d3ZLe29srmnloCvL6DGj2R1rH0GeznoJ2bAvNea6trfVzhx3Ly8vFJtgOe6lhL2yaIHF5edl9f393n5+f3dfXV9GQj4+PIky/v78X/fb2VtKvr68lTU1BHvL8/Ny9vLxMCcpdHv3Ynlqfr/1QzzKWq3bzoeb8qWkbbQYWAGkCpgAUDPb09NQ9Pj4Wub+/L/rh4aEvo6AM9RCkKayD3N3dFdF2TLu+2pZ1Oh7npM9iWZwj87RH27vnUtgezCnAACltpIM7o2Ody9f6R4DUaAecgtYC2809juPGU4AKYxBXFJjIhsxgN7kISG3CLeNc+6y/zjuri3NzfQhMYQx+4GOs5BvJUI8oDwGsxq5amxaoyqKsvvUS1G6O3TOGwMRGNfdoMarmPrE89s+Mq4GZsSa+vJodjItYrQpjsMLQl1UPcYmxcac2yaF1Ll60DI+x0zGGeSzlvStlfl5jiHOBrHwIkK03WwvQ2dgtF412ASDsc8o+Bus7Cm5vb39EfrdCKLpuMhl9nTi3qrnaGEBabeNKR41N4ASBBhsdgOLAgb6+vu7rKWNY5IDSsrgHqQE21Hh9zhBwFCQLjIo2VtCirztwasxxG60I0hDmubnUnp2BE+3GEaK4kgIT2YJyBc3FHGdIZlzWNmNM1j8D0u1LMuZEpvwABmeMm5ubH8hF5mSbOPeGomFuC94CZigDImtb7TLWQIMEg4BxG6l4lsqMqxnpzmBZu1bwHgKMa+eAgeBUPgWMBuC/EZgsJtXc2M3VbQPUXguMiynu1PuvAKPxlNIDgysHAENw6FYakCNj3ApUm9yfxpj/Epgs6NLeKcZcXV31oDjW6P5l7KrUWm3Grkqub2uDGftFxmgYKcBgHwPGABiyxrlVxhgX0Ia+3do+ZghbagfX2qZSw4KyhVJWJQUGO1wFKAZiTUe21M5ANYPGrEity7LWZtKxhaJhpF+ucaUHQAiOY47zxXhcr93WtZba1vmp9iJqrlS7N1J7aC8wKMDgdA1gyBZoigPHBeTaQS87T429uqjd4MVY07q9i6BQaG85KxEYgHJxcTHlTg6cDKB4wTX2CqMGXuu6YeiFWhZXaCd1AQY3eIgx+NsAgEBDlDXUCo7b68Sz1pArjBqIQ2XM/U0MCXzxtBe2l/sYMgYFYAxEQYouRoRj3NElL5Y7ZsVtQM2IGsg1if8oRKYoKBpjyw0eGANgAAjdiaLgOFEWtQK1O264fFau90RDznQOfAeKrsYkR7nzxf9KCFJkCvT5+XmfJnsiqi4OZaKgRBCzFTC6bVbnjHbbDB2Pc6Y9JARt7f+JBGMAhrLl7Ozsh2tlooMpo1ydtokAuq1CBnTUDgS34mhYIEugaT/y5X8l7GNOTk5KhYKj+cieqJVJOqgDQJkX314E1kl8rnt+NiaDqy4ytJX2HR0d/Xal4+Pj/+VrB/3qgV857O/vly8bkIdGHmnm2RblkIODgyLMs+zw8LAYAEGagjzrtS+fjTnxawjM3X35gPzp6Wk3QScyhqipaJljiQZoXcWcZHGK/biPinEtuqAeWxz7MoYqa+J8aSNwAFl+AeaQgIFzUqgAAAAAAElFTkSuQmCC";

var twitterIcon = "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";
var googleIcon = "4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDw4QEBIVEBAQEBUVEBAXFhYSEBcPFhYWFhYVFRYYHSggGBslHRUYLTIhJSkrMS4uFx8zOTMsNygtLisBCgoKDg0OGxAQGi0mHyUvLS0rKysrKystLS0tKy0tLS0tLS8uLSsvLS4tLS0tLS0tLS0tLS0tLSstLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQcDBQYCBP/EAEQQAAEDAgAJBwgIBgIDAAAAAAEAAgMEEQUGEiExQVFhcQcTIkKBkaEjMlJicqKx0RQWQ1NzgpLBM1STssLwNNMkY9L/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQQCAwUG/8QANBEBAAIBAgMECAYCAwEAAAAAAAECAwQRBSExEkFR0RMiMmFxgZGhFEKxweHwUvEVIzND/9oADAMBAAIRAxEAPwC8UBAQEBAQEBAQaTCWNdFBcOlD3DqR9M32EjMDxIWq2ele9dw8Pz5ecV2jxnl/Lmq7lDdnEEAGx0huf0tt/cq9tVP5YdLHwaP/AKW+nnPk0lTjjXv+2yBsY1rR3kE+K1TnyT3rtOG6av5d/jM/6a2XC1U7zp5ncZH27rrXN7T3ys10+GvSkfSHzvmedLnHiSVjvLZFax0h5bK4aHEcCQm8k1iesM8eEqhvmzyt4SPHwKy7dvGWE4MU9ax9IbCmxsr47Wnc4bHBr/Ei/is4z5I71e/D9Nb8n03huqLlEnGaaFkg2sJjNuBuD4LbXV274U8nBsc+xaY+PPydHg7HWhmsHPMLjqkGSP1C7e8rfXUUt7nOzcL1GPpG8e7y6uhY8OALSCDoIzgjcVvc+YmJ2l6RAgICAgICAgICAgICAgIIJQcthvHenhuyAfSJBrBtED7XW7O8Ktk1Na8o5uppuFZMnPJ6sff6ebhcLYwVVVcSyHIP2bejH3DT23VS+W1+su5g0eHD7Ec/Gec/34NWtayIlCAoBBCkCghEigQg+3BuFqimN4JHM2t0sPFpzHis63tX2Zac2nxZo2yV3/X6u3wJygRusyrbzbvvW3Mfa3S3x7Fbx6qJ5WcXU8HtXnhnf3T1/n7O1hma9rXscHtcLtcCC0jaCNKtRMTzhxrVms7WjaXtSxEBAQEBAQEBAQEBBr8M4YgpGZcrrX81gzvcdjR++hYXyVpG8t+n02TPbs0j590K0w/jPUVZLSebh1RNOYj1z1vhuVDJmtf4PS6XQ48HPrbx8vBo1pXRBBQCiUICgEEKRCAiRQIQEShBs8CYcqKN14XdEnpRnPG7iNR3jOtmPJak8lbU6TFqI2vHPx71n4uYzQVrbN8nMBd0JOfi09Yb+8BdDFmrf4vM6vQ5NPO886+Pn4N2tqkICAgICAgICAg0OM+MsdG3JFnzuHQj1Aek/YN2vvI05c0Uj3r2j0NtRO88q98/tH95Kurq2SeR0sri97tJOoagBqG5c+1ptO8vT4sVMVezSNoYFi2IQEEIIRIgKAQQpEIChIghARKEBB7ikcxzXMJa5pu1wNnA7QVMTtzhFqxaNpjksvFDHAVGTBUENn0MfobJ8nbterYr2HP2vVt1eb1/DZxf9mP2fDw/h16tOQICAgICAgINDjXjC2jjs2zp3jybNQHpu3fE9pGnNlike9e0OinUW3n2Y6z+0f3kquonfI9z3uL3vN3OOklc6ZmZ3l6mta0rFaxtEMahkhAQEEIlCAoBAQQpEIChIUEIIRIgICCb/wC70Fl4kY1c+BTTny4Hk3n7Ro1H1x4jPtV/Bn7Xq26vN8S4f6L/ALccer3x4fw7FWnHEBAQEBBr8OYVZSQOlfntmY3QXPOho/3QCsMl4pXeW/Tae2fJFK/P3QqCvrJJ5XyynKe83J1DYANQC5lrTad5euxYq4qRSvSGBYtiEBAQQghEiAoBBCkCghEigEEIIRIgICAgmN5aQ5pLXNILXDMQ4ZwQdRQmImNpW5ifjAKyHpWE8dhK3RfY8DYfA33Lp4Mvbjn1eS4ho50+Tl7M9PJ0C3KAgICCCUFS424bNXUEtPkY7tiGojW/tt3ALm5snbt7nrNDpfQY+ftT18vk0i0rqEBAQQgIlCAoBAQQpEICJFAhARKEBAQEAoChL7cDYTfSzxzM0tNnN1OjPnNPH4gHUs6Xmlt4aNRgrnxzS3+p8V00VUyaOOWM3ZI0Oadx27DuXWraLRvDxmTHbHaaW6wzqWAgIOV5QML8zTiBhtJUXB2iIed36O07FW1OTs12jvdThWm9Jk9JPSv693mrJUHpRAQEEICJQgKAQEEKQQQgKEhQQghEiAgICAoSIIQd3yZ4Ys59G85nXfD7XXYPj2OV3S5PyS4XGNNvEZq/Cf2n9vosNXXnxAQU3jLhP6VVSyg3ZfJj/DbmHfnP5ly8t+3aZew0eD0OGKd/WfjP92axa1kQEEICJQg2eCsA1NTniZ0PvHdGPsJ09gK2UxXv0hVz6zDg5Xnn4Rzn+/F0tJiE23lpyTsjaB7zr37lYrpI75cvJxqfyU+v8ebYMxKohpEjt5f8gFsjTY1aeLaifD6PE2JFGfNMrODgf7mlROlp7014vnjrET8v5amuxDkFzBK1/qvGQ79QuD4LXbSz+WVzFxmk8sldvfHNy1dQzQOyJmOjdqB0H2SMzhwVa1ZrO0w62LNjyx2qTu+dYtooEIBRKEBAQEBAUJQgIM1HVPhkjlZmfG4ObxB0Hcf3WVbTWd4YZMcZKTS3SeS8aGqbNFHKzzZGBzeBF7HeuvW0WjeHiMuOcd5pbrHJnUsGkxyr+YopnA2c8c2zblPzEjeG5R7Fqz27NJXeH4fS56xPSOc/L+VRLmPWCAgIlCCWNJIABJJAAAuSToAGsoiZiI3l3mLuJ7GBstUA+TSIdMbfb9I7tHFXsWniOdnn9ZxS1vUw8o8e+fh4fr8HXf72K04wgICAgw1dLHMwxysEjDpadu0bDvCi1YtG0s8eS+O3apO0q1xrwC2jewseHRyk5DCRzrbaQR1m+t2Hfzs2HsTvHR6fQa78RG1o5x9J/vg0S0OihARKEBAQEBEigQUBBCkWbyY4Qy6aSAnPA+7fw33I94O7wr+ltvXs+DzXGcPZyxkj80feP42dkrTjq/5T6zp00AOgOkcN56Lfg/vVLVW5xV3+DY+Vsny/ef2cOqjtoQEBAQWBiTgERMbUyjyrxeMHqRnX7RHcDvKvafFtHanq87xPW9u3oqTyjr758o/V1atOOINdhXDdLSjy8rWEi4ZndIRuY25tv0LG1616tuPBkyexG7n5eUOlBs2KZw22Y0dnSutU6iq5XhmWY5zDLS4/0bjZ7ZYfWc0Ob7hJ8EjUUlF+G5q9Np/vvdLR1cUzA+J7ZGHrNIIvszaDuW6JiecKN6WpO1o2l8GMeHoqKLLf0pHXEUQNnOd+zRrP72CxyZIpG8t2n09s9to6d8qnr62WoldNM7Kkd2AN1NaNTRs/ckrnXvNp3l6bBhrir2avLH3WuYW623elDNCAglAsiN4QiRQkQQgIIUjpuTus5uvY3VMxzDsuBlg+7b8ysaa21/i5vFsXb08z4TE/t+62V0XlFSY81GXXz7GZLBwDQT4krm6id8kvWcNp2dNX37z9/JoVpXhAUAg2+KuDBU1TGuF42dOTYWi1m9pIHC63Yadu+ynr9R6DDMx1nlH99y1F03kRBx2OmNhgJpqYjn7eUk0iMHQANb7dy0ZcvZ5R1dHRaL0vr36fr/CuXkucXOJc5xu5xJc4naSc5KpzO7vVpFY2gCxZJRL68F4SmpZBJC7JPWHUc3Y8ax4jVZZUvNZ3hpzaemavZtDxhCtlqJXzTOynu7g3U1o1NGz9yUvebTvLLDhrir2asCwbhEsjHLGYba23elDIQdjybHy1T+E3+5W9J1lxON+xT4z+jvXuNjnOgq889HVRlO7ot4BcaXuqyyqGaEBAQQpH04LqeaqIJdAjlY4+yHAnwusqztaJas1O3jtXxiY+y9l13h1JYZkyqqqd6U8h7Ms28Fybzvafi9rp47OGke6P0fGsG0QEBB3/ACd0uTBNKRnkkyR7DB83O7lf0tdqzLzvGcm+StPCPvP8OsVpx2uxgwkKWlmn0ljbMGoyOOS0cLkX3XWN7dmu7bgxelyRRTLnOcXOcS5ziXOcdJcTck7yVzpnd6qtYrG0CxZMlPA6R7WMGU95Aa0aS46AkRMztCLWisTaejafVfCH8s/3fmtnob+Cv+N0/wDnB9V6/wDln+7809DfwT+N0/8AnCfqvX/yz/d+aj0N/BP43T/5wfVev/ln+7809DfwPx2n/wA4PqvX/wAs/wB35p6G/gn8dp/84ayeF0b3MeC17CQ5p0hw0ha5iYnaVmtotEWrPJ6hDnZgC47gTm7FG3g29uI6yy/R5PQf+l3yUdmfA9JTxj6uu5OonNmqMppb5NukEdbereliYmXG4zas0ptPfLuX6DwKuvPwpGGmkyW9B+gdV3yXI7M+D23pKeMfVkEEnoP/AEn5KOzPgyjLXxj6vCxbRBBUgghwzFCFifWv1vFXvTvPf8f7nCzuu952uce8lUp6u7WNqxDwoSICApFoYmMtQU+/LJ7ZHldLTxtjh5PiU76q3y/SG7W5RcZyoSkU9OzU6e5/Kx2b3vBV9RPqulwuu+SZ937q7VJ3xBs8Wf8AnUf47Pis8Xtw0av/AML/AAlci6TyogIIQEFSY5MycIVY2uYe+Nh/dc7P7cvU8OnfT1+f6y23Jof/ACZ/wP8ANq2aX2pVuMf+Vfj+0rGyjtV158JKCEE5R2lBiq3Hm5M58x3wKiejKntQpCE9EcFx5e5iWRQyQpBAQLoPomFnOGxxHcVM9Wus7xEvCJEBAQWhiVJlUEHql7T2SOt4ELpaed8cPKcTrtqrfL9IbxblBx3KbATSwyD7OcZW5rmuF+8N71X1Eeq6XC7RGWY8YVwqTvgQbTFj/nUf47Pis8Xtw0av/wAL/CVyWXSeVEEICAgqXHR98I1W4sHdEwLnZ/bl6jhsbaevz/WXy4FwzNSPc+EMLnNyTlguFrg5rOGfMsceSaTvDdqdNXUVitt+Xg3H19rvRp/0Sf8AYtv4q3uU/wDiMPjP28nQ4m4xVFZJM2YRgMYC3Ia5puTbPlOK3YMs3md1DX6KmnrWazPPxdU45jwVhzFZR4/VxAOTT5x6En/YqH4q/uej/wCHw+M/WPJL8eq5wc0tgs4EHoSXsc33iTqre5McIwxO+8/byc00WACqutCboyiUokQEBQPvwszJqKlvozyDue4LZf2p+LRgnfFWfdH6PlWLYhAQEHecnFXeOeE6WPD2+y4WNuBb7yu6W3KYef4zi2vXJ4xt9P8Af2dirbivjwvg9tTTywOzCRtgdNnDO13Y4A9ixtXtRs2Yck47xeO5S9TTvie+OQZL43Fr27CPiN+sLmzExO0vV0vF6xavSWNQzemuIIIJBGgg2IO4jQhMRMbSzfTJvvpf6j/msu3bxa/QY/8AGPpB9Nn++l/qP+adu3ifh8X+MfSHQYkRTz1jCZZHRwjLku95bsYDc63WzbGlbcHatfqpcQjFiwztWN55Ry+qz1eeeEFKYUqueqKiUZxJK9zfYucnwsuXktvaZev02PsYq18IfOFgsChLsuTP+NU/hN/uVvSdZcfjPsU+Mu/foPAq64EKLh81vALjvcQyBQlKCFIkFQyiUolBKgdj9Vtyt+gcj/kPe12OlPzdfUjU5wePzNBPjda88bZJWOH37Wmp9PpLSLUuiAoBBscX8JfRamOU+Z5sg/8AW7T3Zj+VbcV+xbdV1un9PhmkdesfH+8lttcCAQbgi4Izgg6CF1HjpjZKDm8bcVm1g5yMhlQ0WBPmvaNDX7Dsd2cNOXF2+cdV7R6ycE9m3Ov6KyrKOWB5jmY6N46rhbNtB0EbxmVG1ZrO0vQ48lcle1Sd4YVDYBQl9+CMEz1T8iFmVn6Tzmjb7TtXDTsCzpSbztDTm1GPDXe8/LvlamAMDR0cIjZ0nE3kktYufw1Aah+5Kv48cUjZ5rVam2e/anp3R4Nmtis0eOWFPo1HKQbSSjm4tuU4G57G3PYFry37NVrRYfS5ojujnKpmiwXMesh6RIoS2GB8MzUjnuhyLvADsppcLA3zWIWzHkmnRW1OlpqIiL93g2hx4r9Hkf6bv/tbfxN1T/iMPjP1/hzTG2AGxVnVegoSKQQFCUgolnoqfnZYovvJGM/U4N/dTWN5iGOS/YpNvCJn6L3yBsHcuw8NvKu+U+ktPBMNEkZYdl2G47w/wVHV19aJeh4Nk3x2p4Tv9f8ATilUdkQEBAQdpiPjCBk0kxsNEDzo/DP7d2xXdPm/JPycHimhnec1I+Mfv5/V3KuOEhBhq6WKZuRKxsjfRc0OF9ovoO9RMRPKWdMlqTvWdp9zSy4l4Pcb805u5sj7dxJstU4KeC3XiWoj832h7p8UMHsN+Zyz67nvH6SbeCmMFI7kW4hqLcu19IiG7ijaxoaxoa0aGtAa0cAMwW2I26KdrTad5nm9Ih4lkaxrnOIa1oJc4mwDRnJJ2J0TETM7QqXGjDZrajLFxDGC2FpzG2t5GousOwALnZsnbn3PT6HS+hpz6z18moWlfSiRQCJESBBKAgIChIiXRYhUnO4Qh2RB0jvyiw95zVu09d8kKHE8vY01vfy/vyiVvrpvJOcx+oOeoZHAXdCRKODbh3uk9y0aivap8HR4Xm9HqIjunl5fdUy5r1QgICAiUFB1+LuOZjDYqu7mDM2fO57RskGlw9YZ9t9KuYdR3W+rg63hfW+H6eXk7unnZIxr43Nex3muaQ5p4EK5E79HCtWaztMc2RSgQEBB8mEsJQ0zOcneI26r+cTsa0Z3HcFja0VjeWzHivkns0jdWmM+NElaebaDFTA3DOu8jQZLeDdHHNallzTblHR6DR6CMXrW52/T4NCq7pQIySFAIkQESlAQEBEihKQgsTkvoLRz1BH8RwYz2WZ3EcSbflV7S15TZ57jObe1ccd3Ofn/AH7u5urTiJewOBaRcEEEaiDpClMTMTvCksNYPNNUTQHqO6J2sOdp7iPFcm9ezaYe10+aM2KuSO/9e98SwbkICAgICDJSVk9O4vgkdET52SeieLTmd2hbKZLV6SqZ9LjyR60buho+UGqaLSxRzbwTE7t0jwCsxqZ74cu/CaT7Npj7tmzlFit0qeQHc5rh42Wf4mvgrzwnJ3Wh4m5RWW6FM4n1pA0eAKidVHdCa8Jv32hqa7HutkuIxHADraMt/wCp2b3VrtqbT0WsfCsce1Mz9v79XOVEz5Hl8r3SPOlziXO4XOrctFrTPOXSx4qUjasbPKxbBEiJSoBEiJEEhAQEBQkRL3FG5zmsaLuc4NaNribAd5UxG/JjMxETM9IXdgegbT08MDfs2AE7XaXO7SSe1dWlezWKvF6jNObJbJPf/YfYsmlkUjh+UrBGVGyrYOlH0Jfwyeiewn3tyqarHvHah2+D6ns2nDPfzj4/z+yulRehEBAQEBAQYpGawsolqtTvh4UsBEpRIoBEpQESKEpQESIJQEBEigES7Hk4wRzs7qlw6EGZmwzEf4g97mq1pse9u1Pc4/F9T2Mfoo626/D+fNZivPNikZEHieJr2uY8BzXtLXNOgtIsQVExvG0sq2msxaOsKYxhwQ6jqHwm5bpjd6UZ0HiNB3hcvJjmltnsdJqY1GKLx17/AItYtayICAgICAgxyM1hTEtdq98MayYAUJSglEiJFCUhARIgIJQESKARLPQ0j5pI4oxd8jrNGridwFydwU1rNp2hryZK46ze3SF04HwcymgjgZoYM7tbnHO5x4ldWlIpXaHjdRmtmyTe3e+1ZtKEGVAQaTGzALa2DJFhNHd0LvW1tO42+B1LVmxduvvXdDq50+TefZnr5/JUEsbmOcxwLXNJDmnMQ4ZiCuZMbcpeuraLRvHR4UJEBAQEBEigYns1hZRLXavfDyFLARIiRBKhIpEokUCQgIkUAgIlaGIeLpp4/pEotPK3otOlkRz23OOvZmG1dDT4uzHanq8zxPW+lt6Onsx958odarLkoQEGVAQEHIY8Yr/SAaiAeXaOmwfaNH+Q1bRm2Krnw9r1q9XX4br/AEU+jyez3e7+P9qyP+8VQelQgIkUAgICCEGN7VlEtdqvIUsREiCVCRSJUJEEqARIgIl3OImK2UWVdQ3oixgjPWOqRw2bBr06LXt6fDv61vk4fE+IdnfDjnn3z+3n9FiK88+hAQEGVAQEBBx2OOKAnyp6YAT6Xx6Gybxsf8de1Vc+DtetXq7HD+Jei/68vs90+H8K0kYWktcC1zTZzSLOBGkEHQVQekiYmN4QoSIIQEBAQEHhzVlEsJq8KWIglEiJSoBQJRIgFB3OJ+Jpdk1FW2zdMcB0u2OkGoerr15sxt4dPv61vo4mv4n2d8eGeffPl5/RYYV558UApBAQZUBAQEBBz+M2K0NYMv8AhzgdGUDTsDx1h4jwWnLgi/PvX9HxDJp52618PJV+FsEz0r8idmSeq4Z2OG1rtfDTtAXOvS1J2l6fBqMeevapPnHxfCsG8QEBAQQpBB4c1SwmEIgUgoSlBKgESz0VJLM8RxMMjzoaNm06gN5zKa1m07QwyZKY69q87QsjFfEyOnLZZ7SzjO1umNh3X85286NW1X8WnivO3V53W8Ttl9THyr958odarLkigFIICAgyoCAgICAgwVlJHMwxysbIw6WuFxx3HeotWLRtLPHktjt2qTtLg8Ocnzhd9G7KH3Lzn4Nfr4O71TyaXvo7um4xE+rmj5x+8eX0cVV0kkLyyVjo3jquBB4jaN4VS1ZrO0u1jyUyR2qTvHuYFDMQEBAQEHkhSxmHlGIiUhQPcUbnODWtLnHQ1oLnHgBnKmI36ImYrG8ztDrcCYhzyWdUnmGegLOmI+DO253Kzj01p9rk5Wo4vjpyxetPj3ec/wB5u/wXguCmZkQsDBrOlzjtc45yrlKVpG0Q4ObUZM1u1ed32hZtKQgKAUggICDKgICAgICAgIMFZRxTNyJWNkb6LgHDiL6CotWLRtMM8eW+Oe1SZifc5TCfJ7TPuYHugPonykfcTleKrW0tZ9nk6uHjOWvLJET9p8vs5iuxFr475LWzDaxwBtvD7eF1otprx73TxcW09+szHxjy3aKqwdURX52GSMDW5jmt7yLLTNbR1hdpmx39m0T8Jh8oIWLbslAQQSoGWno5Zf4Ub5PYa5/9oWVYmekNWS9Ke1MR8Z2biixNr5NMYiHpSODfAXd4LdXT5J7lLJxLTU/Nv8I/sOkwdyexNsaiV0nqMGQ3gXG5PZZb66WPzS5+XjN55Y67e+ef9+7q8HYMgpxkwxtjGsgdI+045z2lWa0rXpDlZs+TLO97bvsCyaUoJQSoBSCAgICDKgICAgICAgICAgICDg8cut2qpndzh/crwqi9CKB2GJ/V4q3gcjiCzWaBwCvvNT1fMiHoKEgUoSEHpBKAoBSCAgICD//Z";

function enableMod(){
ctx.runOnUiThread(new Runnable({ run: function(){
    try{
        var layout = new LinearLayout(ctx);
        layout.setOrientation(1);
        var menuNo = new Button(ctx);
menuNo.setTextSize(10);
        menuNo.setText("");
		menuNo.setTextColor(Color.GREEN);
        layout.addView(menuNo);
 
        Debug = new PopupWindow(layout, dip2px(0), dip2px(0)); 

        Debug.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        Debug.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 1500);
        }catch(err){
            Toast.makeText(ctx, "An error occured: " + err, 1).show();
        }
    }}));
}
enableMod();

function showMenuBtn(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
    try{
        var layout = new LinearLayout(MainActivity);
        layout.setOrientation(1);
        var menuBtn = new Button(MainActivity);
        menuBtn.setTextSize(20);
        menuBtn.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(bg64, 0) , 0, android.util.Base64.decode(bg64, 0).length)));
        menuBtn.setText("");
        menuBtn.setOnClickListener(new View.OnClickListener({
            onClick: function(viewarg){
mainMenu();
GUI.dismiss();
Toast.makeText(MainActivity, "Scroll down", 1).show();
 if(getLanguage=="de_DE")Toast.makeText(MainActivity, "Scroll nach unten", 1).show();
            }
        }));
        layout.addView(menuBtn);
 
        GUI = new PopupWindow(layout, dip2px(45), dip2px(45)); 

        GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        GUI.showAtLocation(MainActivity.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 120);
        }catch(err){
            Toast.makeText(MainActivity, "An error occured: " + err, 1).show();
        }
    }}));
}
showMenuBtn(); 

function mainMenu(){
    MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var menuLayout = new LinearLayout(MainActivity);
            var menuScroll = new ScrollView(MainActivity);
            var menuLayout1 = new LinearLayout(MainActivity);
            menuLayout.setOrientation(1);
            menuLayout1.setOrientation(1);
            menuScroll.addView(menuLayout);
            menuLayout1.addView(menuScroll);

var line0 = new android.widget.LinearLayout(ctx);
	    line0.setOrientation(0);
            
            var title2 = new TextView(MainActivity);
            title2.setTextSize(20);
            title2.setText("Made by: ArceusMαtt    ");
            title2.setGravity(Gravity.LEFT);
            title2.setTextColor(Color.WHITE);
            line0.addView(title2);
            
            var title = new TextView(MainActivity);
            title.setTextSize(20);
            title.setText(" AlphαHαck v2 ("+version+") ");
            title.setGravity(Gravity.CENTER);
            title.setTextColor(Color.WHITE);
            line0.addView(title);
            
            var title3 = new TextView(MainActivity);
            title3.setTextSize(20);
            title3.setText("     Scroll down!");
            title3.setGravity(Gravity.RIGHT);
            title3.setTextColor(Color.WHITE);
            line0.addView(title3);

menuLayout.addView(line0);
            
            var exit = new Button(MainActivity);
            exit.setText("Exit AlphαHαck");
            exit.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
            exit.setTextColor(Color.RED);
            exit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
menu.dismiss(); 
showMenuBtn(); 
Toast.makeText(MainActivity, "Closed successfully", 1).show();
 if(getLanguage=="de_DE")Toast.makeText(MainActivity, "Erfolgreich geschlossen", 1).show();
                }
            }));
            menuLayout.addView(exit);
            
            var line1 = new android.widget.LinearLayout(ctx);
	    line1.setOrientation(0);
	    
	    var active = new TextView(MainActivity);
            active.setTextSize(10);
            active.setText("Active mods: ");
            if(getLanguage=="de_DE")active.setText('Active: ');
            active.setTextColor(Color.WHITE);
            line1.addView(active);
            
            var active2 = new TextView(MainActivity);
            active2.setTextSize(10);
            if(liquidwalk==true)active2.setText("Liquid walk, ");
            active2.setTextColor(Color.WHITE);
            line1.addView(active2);
            
            var active3 = new TextView(MainActivity);
            active3.setTextSize(10);
            if(xray==true)active3.setText("Xray, ");
            active3.setTextColor(Color.WHITE);
            line1.addView(active3);
            
            var active4 = new TextView(MainActivity);
            active4.setTextSize(10);
            if(armor==true)active4.setText("Armor status, ");
            active4.setTextColor(Color.WHITE);
            line1.addView(active4);
            
            var active5 = new TextView(MainActivity);
            active5.setTextSize(10);
            if(coords==true)active5.setText("Coordinates, ");
            active5.setTextColor(Color.WHITE);
            line1.addView(active5);
            
            var active6 = new TextView(MainActivity);
            active6.setTextSize(10);
            if(antivoid==true)active6.setText("Anti void, ");
            active6.setTextColor(Color.WHITE);
            line1.addView(active6);
            
            var active7 = new TextView(MainActivity);
            active7.setTextSize(10);
            if(glide==true)active7.setText("Glide, ");
            active7.setTextColor(Color.WHITE);
            line1.addView(active7);
            
            var active8 = new TextView(MainActivity);
            active8.setTextSize(10);
            if(ttot==true)active8.setText("TextToToast, ");
            active8.setTextColor(Color.WHITE);
            line1.addView(active8);
            
            var active9 = new TextView(MainActivity);
            active9.setTextSize(10);
            if(block==true)active9.setText("Anti break, ");
            active9.setTextColor(Color.WHITE);
            line1.addView(active9);
            
            var active10 = new TextView(MainActivity);
            active10.setTextSize(10);
            if(tapspam==true)active8.setText("TapSpam, ");
            active10.setTextColor(Color.WHITE);
            line1.addView(active10);
            
            var active11 = new TextView(MainActivity);
            active11.setTextSize(10);
            if(tapdestroy==true)active8.setText("TapDestroy, ");
            active11.setTextColor(Color.WHITE);
            line1.addView(active11);
            
            menuLayout.addView(line1);
            
            var line2 = new android.widget.LinearLayout(ctx);
	    line2.setOrientation(0);
	    
	    var worldInfo = new Button(MainActivity);
            worldInfo.setText("World info");
            worldInfo.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
            worldInfo.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
                Level.getRainLevel();	
clientMessage("World name: "+Level.getWorldName()+" World: "+Player.getDimension()+" Biome: "+Level.getBiomeName());
Math.round(Level.getRainLevel());
if(Math.round(Level.getRainLevel())=="0")clientMessage("Weather: clear"+" Time: "+Level.getTime());
if(Math.round(Level.getRainLevel())=="1")clientMessage("Weather: rain/snow "+" Time: "+Level.getTime());
                }
            }));
            line2.addView(worldInfo);
	    
	    var button1 = new Button(MainActivity);
button1.setText("Walk on liquid");
button1.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
button1.setTextColor(Color.RED);
if(liquidwalk==true)button1.setTextColor(Color.GREEN);
            button1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             liquidwalk?liquidwalk=false:liquidwalk=true;
button1.setText("Walk on liquid");
if(liquidwalk == true){
button1.setTextColor(Color.GREEN);
Block.setShape(8, 0, 0, 0, 1, 0.6, 1);
Block.setShape(9, 0, 0, 0, 1, 0.6, 1);
Block.setShape(10, 0, 0, 0, 1, 0.6, 1);
Block.setShape(11, 0, 0, 0, 1, 0.6, 1);
Block.defineBlock(8, "Water", [["still_water", 0]], 8, false, 4);
Block.defineBlock(9, "Stationary Water", [["still_water", 0]], 9, false, 4);
Block.defineBlock(10, "Lava", [["still_lava", 0]], 10, false, 4);
Block.defineBlock(11, "Stationary Lava", [["still_lava", 0]], 11, false, 4);
liquidwalk = true;
}
if(liquidwalk == false){
button1.setTextColor(Color.RED);
Block.setShape(8, null, null, null, null, null, null);
Block.setShape(9, null, null, null, null, null, null);
Block.setShape(10, null, null, null, null, null, null);
Block.setShape(11, null, null, null, null, null, null);
liquidwalk = false;
}
                }
            }));
            line2.addView(button1);
            
            var creative = new Button(MainActivity);
            creative.setText("Creative");        
            creative.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
            creative.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(1);
                    Player.setCanFly(true);
Server.sendChat("/gamemode 1");
Server.sendChat("/gamemode creative");
clientMessage("§7Your gamemode was updated to creative mode!");
                }
            }));
            line2.addView(creative);
            
            var survival = new Button(MainActivity);
            survival.setText("Survival");
            survival.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
            survival.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(0);
                    if(Player.setCanFly(true))Player.setCanFly(false);
Server.sendChat("/gamemode 0");
Server.sendChat("/gamemode survival");
clientMessage("§7Your gamemode was updated to survival mode!");
                }
            }));
            line2.addView(survival);
            
            var adventure = new Button(MainActivity);
            adventure.setText("Adventure");       
            adventure.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
            adventure.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(2);
                    if(Player.setCanFly(true))Player.setCanFly(false);
Server.sendChat("/gamemode 2");
Server.sendChat("/gamemode adventure");
clientMessage("§7Your gamemode was updated to adventure mode!");
                }
            }));
            line2.addView(adventure);
            
            var spectator = new Button(MainActivity);
            spectator.setText("Spectator");     
            spectator.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
            spectator.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(3);
                    Player.setCanFly(true);
Server.sendChat("/gamemode 3");
Server.sendChat("/gamemode spectator");
clientMessage("§7Your gamemode was updated to spectator mode!");
                }
            }));
            line2.addView(spectator);
            
            menuLayout.addView(line2);
            
            var line3 = new android.widget.LinearLayout(ctx);
	    line3.setOrientation(0);
	    
	    //this is a test xray
	    	    var button2 = new Button(MainActivity);
button2.setText("Ground X-Ray");
button2.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
button2.setTextColor(Color.RED);
if(xray==true)button2.setTextColor(Color.GREEN);
            button2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             xray?xray=false:xray=true;
button2.setText("Ore view(xray)");
if(xray == true){
button2.setTextColor(Color.GREEN);
clientMessage("You may crash!\nchange on/off fancy graphics for better view.");
Block.setRenderLayer(1,1);
Block.setRenderLayer(2,1);
Block.setRenderLayer(3,1);
Block.setRenderLayer(12,1);
Block.setRenderLayer(24,1);
Block.setRenderLayer(78,1);
Block.setShape(1, 0, 0, 0, 0.0001, 0.6, 0.0001);
Block.setShape(2, 0, 0, 0, 0.0001, 0.6, 0.0001);
Block.setShape(3, 0, 0, 0, 0.0001, 0.6, 0.0001);
Block.setShape(12, 0, 0, 0, 0.0001, 0.6, 0.0001);
Block.setShape(24, 0, 0, 0, 0.0001, 0.6, 0.0001);
Block.setShape(78, 0, 0, 0, 0.0001, 0.6, 0.0001);
xray = true;
}
if(xray == false){
button2.setTextColor(Color.RED);
num0++
Block.setRenderLayer(1,num0);
Block.setRenderLayer(2,num0);
Block.setRenderLayer(3,num0);
Block.setRenderLayer(12,num0);
Block.setRenderLayer(24,num0);
Block.setRenderLayer(78,num0);
Block.setShape(1, null, null, null, 1, 1, 1);
Block.setShape(2, null, null, null, 1, 1, 1);
Block.setShape(3, null, null, null, 1, 1, 1);
Block.setShape(12, null, null, null, 1, 1, 1);
Block.setShape(24, null, null, null, 1, 1, 1);
Block.setShape(78, null, null, null, 1, 1, 1);
xray = false;
}
                }
            }));
            line3.addView(button2);
            
            var svr = new android.widget.Button(MainActivity);
            svr.setText("Server IP:Port");
            svr.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
            svr.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("§lIP:§r " + Server.getAddress() + " §lPort:§r " + Server.getPort());
if(Server.getAddress()=="null" || Server.getPort()=="0")clientMessage("You are not on a server!");
                }
            }));
            line3.addView(svr);
            
            var itemInfo = new Button(MainActivity);
            itemInfo.setText("Item info"); 
            itemInfo.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
            itemInfo.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Item ID: " + Player.getCarriedItem());
clientMessage("Data / damage: " + Player.getCarriedItemData());
clientMessage("Amount in hand: " + Player.getCarriedItemCount());
clientMessage("Item enchantment: " + Player.getEnchantments(Player.getSelectedSlotId()));
                }
            }));
            line3.addView(itemInfo);
            
            var cidban = new Button(MainActivity);
            cidban.setText("CID/dev pardon"); 
            cidban.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
            cidban.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                	devpardon();
                	
Toast.makeText(ctx, "You will crash & be unbanned!", 1).show();

                }
            }));
            line3.addView(cidban);
            
            var button3 = new Button(MainActivity);
button3.setText("Anti void");
button3.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
button3.setTextColor(Color.RED);
if(antivoid==true)button3.setTextColor(Color.GREEN);
            button3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             antivoid?antivoid=false:antivoid=true;
button3.setText("Anti void");
if(antivoid == true){
button3.setTextColor(Color.GREEN);

antivoid = true;
}
if(antivoid == false){
button3.setTextColor(Color.RED);

antivoid = false;
}
                }
            }));
            line3.addView(button3);
            
             menuLayout.addView(line3);
             
             var line4 = new android.widget.LinearLayout(ctx);
	    line4.setOrientation(0);
	    
	    var button4 = new Button(MainActivity);
button4.setText("Armor status");
button4.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
button4.setTextColor(Color.RED);
if(armor==true)button4.setTextColor(Color.GREEN);
            button4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             armor?armor=false:armor=true;
button4.setText("Armor status");
if(armor == true){
button4.setTextColor(Color.GREEN);
if(coords==true)coords==false;
armor = true;
}
if(armor == false){
button4.setTextColor(Color.RED);

armor = false;
}
                }
            }));
            line4.addView(button4);
            
            var button5 = new Button(MainActivity);
button5.setText("Coordinates");
button5.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
button5.setTextColor(Color.RED);
if(coords==true)button5.setTextColor(Color.GREEN);
            button5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             coords?coords=false:coords=true;
button5.setText("Coordinates");
if(coords == true){
button5.setTextColor(Color.GREEN);
if(armor==true)armor==false;
coords = true;
}
if(coords == false){
button5.setTextColor(Color.RED);

coords = false;
}
                }
            }));
            line4.addView(button5);
            
            var button6 = new Button(MainActivity);
button6.setText("Glide");
button6.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
button6.setTextColor(Color.RED);
if(glide==true)button6.setTextColor(Color.GREEN);
            button6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             glide?glide=false:glide=true;
button6.setText("Glide");
if(glide == true){
button6.setTextColor(Color.GREEN);
Toast.makeText(MainActivity, "Credit: Apric0cks from maximus mod!", 1).show();
glide = true;
}
if(glide == false){
button6.setTextColor(Color.RED);

glide = false;
}
                }
            }));
            line4.addView(button6);
            
            var button7 = new Button(MainActivity);
button7.setText("Text to toast");
button7.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
button7.setTextColor(Color.RED);
if(ttot==true)button7.setTextColor(Color.GREEN);
            button7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             ttot?ttot=false:ttot=true;
button7.setText("Text to toast");
if(ttot == true){
button7.setTextColor(Color.GREEN);

ttot = true;
}
if(ttot == false){
button7.setTextColor(Color.RED);

ttot = false;
}
                }
            }));
            line4.addView(button7);
            
            var button8 = new Button(MainActivity);
button8.setText("Anti break");
button8.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
button8.setTextColor(Color.RED);
if(block==true)button8.setTextColor(Color.GREEN);
            button8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             block?block=false:block=true;
button8.setText("Anti break");
if(block == true){
button8.setTextColor(Color.GREEN);

block = true;
}
if(block == false){
button8.setTextColor(Color.RED);

block = false;
}
                }
            }));
            line4.addView(button8);
            
             menuLayout.addView(line4);
             
             var line5 = new android.widget.LinearLayout(ctx);
	    line5.setOrientation(0);
	    
	    var button9 = new Button(MainActivity);
button9.setText("Tap spam");
button9.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
button9.setTextColor(Color.RED);
if(tapspam==true)button9.setTextColor(Color.GREEN);
            button9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tapspam?tapspam=false:tapspam=true;
button9.setText("Tap spam");
if(tapspam == true){
button9.setTextColor(Color.GREEN);
spam();
tapspam = true;
}
if(tapspam == false){
button8.setTextColor(Color.RED);

tapspam = false;
}
                }
            }));
            line5.addView(button9);
            
            var button10 = new Button(MainActivity);
button10.setText("Tap destroy");
button10.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
button10.setTextColor(Color.RED);
if(tapdestroy==true)button10.setTextColor(Color.GREEN);
            button10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tapdestroy?tapdestroy=false:tapdestroy=true;
button10.setText("Tap destroy");
if(tapdestroy == true){
button10.setTextColor(Color.GREEN);

tapdestroy = true;
}
if(tapdestroy == false){
button10.setTextColor(Color.RED);

tapdestroy = false;
}
                }
            }));
            line5.addView(button10);
            
            var button11 = new Button(MainActivity);
button11.setText("Chest ESP");
button11.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
button11.setTextColor(Color.RED);
if(chestesp==true)button11.setTextColor(Color.GREEN);
            button11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             chestesp?chestesp=false:chestesp=true;
button11.setText("Chest ESP");
if(chestesp == true){
button11.setTextColor(Color.GREEN);

chestesp = true;
}
if(chestesp == false){
button11.setTextColor(Color.RED);

chestesp = false;
}
                }
            }));
            line5.addView(button11);
            
            menuLayout.addView(line5);
            
            var line6 = new android.widget.LinearLayout(ctx);
	    line6.setOrientation(0);
	    
	    /*var twitter = new android.widget.Button(MainActivity);
            twitter.setText("");
            twitter.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(twitterIcon, 0) , 0, android.util.Base64.decode(twitterIcon, 0).length)));
            twitter.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                	
                }
            }));
            line6.addView(twitter);
            
            var google = new android.widget.Button(MainActivity);
            google.setText("");
            google.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(googleIcon, 0) , 0, android.util.Base64.decode(googleIcon, 0).length)));
            google.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                	
                }
            }));
            line6.addView(google);*/
	    
	    menuLayout.addView(line6);
	    
var cheats = new android.widget.Button(ctx);
cheats.setText("Online mods");
cheats.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
cheats.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             cheat_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(cheats);
		
		function cheat_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var cheatLayout = new LinearLayout(ctx);
            var cheatScroll = new ScrollView(ctx);
            var cheatLayout1 = new LinearLayout(ctx);
            cheatLayout.setOrientation(1);
            cheatLayout1.setOrientation(1);
            cheatScroll.addView(cheatLayout);
            cheatLayout1.addView(cheatScroll);
            
            var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             cheat.dismiss();
             showMenuBtn();
			}
		});
		cheatLayout.addView(exit);

            cheat = new PopupWindow(cheatLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, ctx.getWindowManager().getDefaultDisplay().getHeight());
            cheat.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
cheatLayout1.setBackgroundDrawable(bg);
cheatLayout1.setPadding(20,0,20,0);
            cheat.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}
            
var mods = new android.widget.Button(ctx);
mods.setText("Offline mods");
mods.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
mods.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             mod_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(mods);
		
		function mod_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var modLayout = new LinearLayout(ctx);
            var modScroll = new ScrollView(ctx);
            var modLayout1 = new LinearLayout(ctx);
            modLayout.setOrientation(1);
            modLayout1.setOrientation(1);
            modScroll.addView(modLayout);
            modLayout1.addView(modScroll);
            
            var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             mod.dismiss();
             showMenuBtn();
			}
		});
		modLayout.addView(exit);

            mod = new PopupWindow(modLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, ctx.getWindowManager().getDefaultDisplay().getHeight());
            mod.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
modLayout1.setBackgroundDrawable(bg);
modLayout1.setPadding(20,0,20,0);
            mod.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var misc = new android.widget.Button(ctx);
misc.setText("Misc");
misc.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
misc.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             misc_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(misc);
		
		function misc_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var miscLayout = new LinearLayout(ctx);
            var miscScroll = new ScrollView(ctx);
            var miscLayout1 = new LinearLayout(ctx);
            miscLayout.setOrientation(1);
            miscLayout1.setOrientation(1);
            miscScroll.addView(miscLayout);
            miscLayout1.addView(miscScroll);
            
            var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             misc.dismiss();
             showMenuBtn();
			}
		});
		miscLayout.addView(exit);

            misc = new PopupWindow(miscLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, ctx.getWindowManager().getDefaultDisplay().getHeight());
            misc.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
miscLayout1.setBackgroundDrawable(bg);
miscLayout1.setPadding(20,0,20,0);
            misc.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var enchant = new android.widget.Button(ctx);
enchant.setText("Enchant menu");
if(getLanguage=="de_DE")enchant.setText("Verzauberungs menu");
enchant.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
enchant.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             enchant_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(enchant);
		
		function enchant_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var enchantLayout = new LinearLayout(ctx);
            var enchantScroll = new ScrollView(ctx);
            var enchantLayout1 = new LinearLayout(ctx);
            enchantLayout.setOrientation(1);
            enchantLayout1.setOrientation(1);
            enchantScroll.addView(enchantLayout);
            enchantLayout1.addView(enchantScroll);
            
            var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             enchant.dismiss();
             showMenuBtn();
			}
		});
		enchantLayout.addView(exit);

            enchant = new PopupWindow(enchantLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, ctx.getWindowManager().getDefaultDisplay().getHeight());
            enchant.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
enchantLayout1.setBackgroundDrawable(bg);
enchantLayout1.setPadding(20,0,20,0);
            enchant.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var give = new android.widget.Button(ctx);
give.setText("Give menu");
if(getLanguage=="de_DE")give.setText("Geben menu");
give.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
give.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             give_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(give);
		
		function give_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var giveLayout = new LinearLayout(ctx);
            var giveScroll = new ScrollView(ctx);
            var giveLayout1 = new LinearLayout(ctx);
            giveLayout.setOrientation(1);
            giveLayout1.setOrientation(1);
            giveScroll.addView(giveLayout);
            giveLayout1.addView(giveScroll);
            
            var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             give.dismiss();
             showMenuBtn();
			}
		});
		giveLayout.addView(exit);

            give = new PopupWindow(giveLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, ctx.getWindowManager().getDefaultDisplay().getHeight());
            give.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
giveLayout1.setBackgroundDrawable(bg);
giveLayout1.setPadding(20,0,20,0);
            give.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var morph = new android.widget.Button(ctx);
morph.setText("Morph menu");
if(getLanguage=="de_DE")morph.setText("Verwandelungs menu");
morph.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
morph.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             morph_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(morph);
		
		function morph_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var morphLayout = new LinearLayout(ctx);
            var morphScroll = new ScrollView(ctx);
            var morphLayout1 = new LinearLayout(ctx);
            morphLayout.setOrientation(1);
            morphLayout1.setOrientation(1);
            morphScroll.addView(morphLayout);
            morphLayout1.addView(morphScroll);
            
            var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             morph.dismiss();
             showMenuBtn();
			}
		});
		morphLayout.addView(exit);

            morph = new PopupWindow(morphLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, ctx.getWindowManager().getDefaultDisplay().getHeight());
            morph.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
morphLayout1.setBackgroundDrawable(bg);
morphLayout1.setPadding(20,0,20,0);
            morph.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var nuke = new android.widget.Button(ctx);
nuke.setText("Nuke menu");
if(getLanguage=="de_DE")nuke.setText("Vernichtungs menu");
nuke.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
nuke.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             nuke_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(nuke);
		
		function nuke_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var nukeLayout = new LinearLayout(ctx);
            var nukeScroll = new ScrollView(ctx);
            var nukeLayout1 = new LinearLayout(ctx);
            nukeLayout.setOrientation(1);
            nukeLayout1.setOrientation(1);
            nukeScroll.addView(nukeLayout);
            nukeLayout1.addView(nukeScroll);
            
            var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             nuke.dismiss();
             showMenuBtn();
			}
		});
		nukeLayout.addView(exit);

            nuke = new PopupWindow(nukeLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, ctx.getWindowManager().getDefaultDisplay().getHeight());
            nuke.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
nukeLayout1.setBackgroundDrawable(bg);
nukeLayout1.setPadding(20,0,20,0);
            nuke.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var particle = new android.widget.Button(ctx);
particle.setText("Particle menu");
if(getLanguage=="de_DE")particle.setText("Partikel menu");
particle.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
particle.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             particle_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(particle);
		
		function particle_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var particleLayout = new LinearLayout(ctx);
            var particleScroll = new ScrollView(ctx);
            var particleLayout1 = new LinearLayout(ctx);
            particleLayout.setOrientation(1);
            particleLayout1.setOrientation(1);
            particleScroll.addView(particleLayout);
            particleLayout1.addView(particleScroll);
            
            var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             particle.dismiss();
             showMenuBtn();
			}
		});
		particleLayout.addView(exit);

            particle = new PopupWindow(particleLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, ctx.getWindowManager().getDefaultDisplay().getHeight());
            particle.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
particleLayout1.setBackgroundDrawable(bg);
particleLayout1.setPadding(20,0,20,0);
            particle.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var spawn = new android.widget.Button(ctx);
spawn.setText("Spawn menu");
if(getLanguage=="de_DE")spawn.setText("Erschaffungs menu");
spawn.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
spawn.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             spawn_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(spawn);
		
		function spawn_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var spawnLayout = new LinearLayout(ctx);
            var spawnScroll = new ScrollView(ctx);
            var spawnLayout1 = new LinearLayout(ctx);
            spawnLayout.setOrientation(1);
            spawnLayout1.setOrientation(1);
            spawnScroll.addView(spawnLayout);
            spawnLayout1.addView(spawnScroll);
            
            var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             spawn.dismiss();
             showMenuBtn();
			}
		});
		spawnLayout.addView(exit);

            spawn = new PopupWindow(spawnLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, ctx.getWindowManager().getDefaultDisplay().getHeight());
            spawn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
spawnLayout1.setBackgroundDrawable(bg);
spawnLayout1.setPadding(20,0,20,0);
            spawn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var speed = new android.widget.Button(ctx);
speed.setText("Speed menu");
if(getLanguage=="de_DE")speed.setText("Schnelligkeits menu");
speed.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
speed.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             speed_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(speed);
		
		function speed_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var speedLayout = new LinearLayout(ctx);
            var speedScroll = new ScrollView(ctx);
            var speedLayout1 = new LinearLayout(ctx);
            speedLayout.setOrientation(1);
            speedLayout1.setOrientation(1);
            speedScroll.addView(speedLayout);
            speedLayout1.addView(speedScroll);
            
            var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             speed.dismiss();
             showMenuBtn();
			}
		});
		speedLayout.addView(exit);

            speed = new PopupWindow(speedLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, ctx.getWindowManager().getDefaultDisplay().getHeight());
            speed.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
speedLayout1.setBackgroundDrawable(bg);
speedLayout1.setPadding(20,0,20,0);
            speed.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var teleport = new android.widget.Button(ctx);
teleport.setText("Teleport menu");
if(getLanguage=="de_DE")teleport.setText("Teleportierungs menu");
teleport.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
teleport.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             teleport_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(teleport);
		
		function teleport_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var teleportLayout = new LinearLayout(ctx);
            var teleportScroll = new ScrollView(ctx);
            var teleportLayout1 = new LinearLayout(ctx);
            teleportLayout.setOrientation(1);
            teleportLayout1.setOrientation(1);
            teleportScroll.addView(teleportLayout);
            teleportLayout1.addView(teleportScroll);
            
            var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             teleport.dismiss();
             showMenuBtn();
			}
		});
		teleportLayout.addView(exit);

            teleport = new PopupWindow(teleportLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, ctx.getWindowManager().getDefaultDisplay().getHeight());
            teleport.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
teleportLayout1.setBackgroundDrawable(bg);
teleportLayout1.setPadding(20,0,20,0);
            teleport.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var time = new android.widget.Button(ctx);
time.setText("Time menu");
if(getLanguage=="de_DE")time.setText("Zeit menu");
time.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
time.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             time_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(time);
		
		function time_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var timeLayout = new LinearLayout(ctx);
            var timeScroll = new ScrollView(ctx);
            var timeLayout1 = new LinearLayout(ctx);
            timeLayout.setOrientation(1);
            timeLayout1.setOrientation(1);
            timeScroll.addView(timeLayout);
            timeLayout1.addView(timeScroll);
            
            var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             time.dismiss();
             showMenuBtn();
			}
		});
		timeLayout.addView(exit);

            time = new PopupWindow(timeLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, ctx.getWindowManager().getDefaultDisplay().getHeight());
            time.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
timeLayout1.setBackgroundDrawable(bg);
timeLayout1.setPadding(20,0,20,0);
            time.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var weather = new android.widget.Button(ctx);
weather.setText("Weather menu");
if(getLanguage=="de_DE")weather.setText("Wetter menu");
weather.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
weather.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             weather_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(weather);
		
		function weather_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var weatherLayout = new LinearLayout(ctx);
            var weatherScroll = new ScrollView(ctx);
            var weatherLayout1 = new LinearLayout(ctx);
            weatherLayout.setOrientation(1);
            weatherLayout1.setOrientation(1);
            weatherScroll.addView(weatherLayout);
            weatherLayout1.addView(weatherScroll);
            
            var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             weatherdismiss();
             showMenuBtn();
			}
		});
		weatherLayout.addView(exit);
		
		var button = new android.widget.Button(ctx);
            button.setText("Custom wether");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
setDialogW();
weather.dismiss();
                }
            }));
            weatherLayout.addView(button);
			
	    var button3 = new android.widget.Button(ctx);
            button3.setText("Rain");
            button3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setRainLevel(1);
Server.sendChat("/weather rain");
                }
            }));
            weatherLayout.addView(button3);
			
			var button4 = new android.widget.Button(ctx);
            button4.setText("Lightning");
            button4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setLightningLevel(1);
Server.sendChat("/weather rain");
                }
            }));
            weatherLayout.addView(button4);

var button2 = new android.widget.Button(ctx);
            button2.setText("Clear weather");
            button2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setRainLevel(0);
Level.setLightningLevel(0);
Server.sendChat("/weather clear");
                }
            }));
            weatherLayout.addView(button2);

            weather = new PopupWindow(weatherLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, ctx.getWindowManager().getDefaultDisplay().getHeight());
            weather.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
weatherLayout1.setBackgroundDrawable(bg);
weatherLayout1.setPadding(20,0,20,0);
            weather.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

function setDialogW() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var w = new android.widget.EditText(ctx);
var w2 = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Set Weather");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(w);
Layer.addView(w2);
Layer.addView(Exit);

w.setText("");
w.setHint("rain/snow = 1");
w2.setText("");
w2.setHint("lightning = 1");
Exit.setText("Set weather");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
v=w.getText();
v2=w2.getText();
Dialog.dismiss();
setWeather();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The WS Dialog Is Malfunctioning:"+e);
}
}});
}

function setWeather() {
Level.setRainLevel(v);
Level.setLightningLevel(v2);
Server.sendChat("/weather rain");
}
            
            menu = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
           menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
		   var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
menuLayout1.setBackgroundDrawable(bg);
menuLayout1.setPadding(20,0,20,0);
            menu.showAtLocation(MainActivity.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}

function serverMessageReceiveHook(str) {
	ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
	if(ttot)Toast.makeText(ctx, str, 1).show();
	}});
}

function destroyBlock(x, y, z, side)
{
if(block == true)preventDefault();
}

function startDestroyBlock(x, y, z, side)
{
if(block == true)preventDefault()
}

function useItem(x, y, z, itemId, blockId, side){
if(sign)if(blockId == 63 || blockId == 68)signEditor(); 

	if(lightning) {
Level.spawnMob(x, y, z, EntityType.LIGHTNING_BOLT);
	}
	if(primedtnt) {
Level.spawnMob(x, y +2, z, EntityType.PRIMED_TNT);
	}
	if(arrow) {
Level.spawnMob(x, y +1, z, EntityType.ARROW);
	}
	if(exporb) {
Level.spawnMob(x, y +1, z, EntityType.EXPERIENCE_ORB);
	}

if(tapspam){
	Server.sendChat(text);
	Server.getPort();
	if(Server.getPort()=="0")clientMessage(text);
}

if(block == true)preventDefault();

if(tapdestroy){
	Level.destroyBlock(x +1, y, z +1, vidd);
	Level.destroyBlock(x +2, y, z +2, vidd);
	Level.destroyBlock(x +3, y, z +3, vidd);
	Level.destroyBlock(x +4, y, z +4, vidd);
	
    Level.destroyBlock(x, y, z, vidd);

	Level.destroyBlock(x -1, y, z -1, vidd);
	Level.destroyBlock(x -2, y, z -2, vidd);
	Level.destroyBlock(x -3, y, z -3, vidd);
	Level.destroyBlock(x -4, y, z -4, vidd);
}

if(taptp){
	setPosition(Player.getEntity(), x, y, z);
Server.sendChat("/tp " + Player.getName(Player.getEntity()) + space + x + space + y + space + z);

}

}

function modTick(){
	if(stackheart){
Player.setHealth(20);
}
if(infhun){
Player.setHunger(20);
}
if(killaura){

killing(); 

}

if(killfaura){

killingf(); 

}
if(killdaura) {
	
	killingd();
}
if(particle1)Level.addParticle(ParticleType.angryVillager, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 5);
if(particle2)Level.addParticle(ParticleType.bubble, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle3)Level.addParticle(ParticleType.cloud, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle4)Level.addParticle(ParticleType.crit, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 50);
if(particle5)Level.addParticle(ParticleType.dripLava, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle6)Level.addParticle(ParticleType.dripWater, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle7)Level.addParticle(ParticleType.enchantmenttable, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle8)Level.addParticle(ParticleType.fallingDust, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle9)Level.addParticle(ParticleType.flame, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle10)Level.addParticle(ParticleType.happyVillager, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 50);
if(particle11)Level.addParticle(ParticleType.heart, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 5);
if(particle12)Level.addParticle(ParticleType.hugeexplosion, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle13)Level.addParticle(ParticleType.hugeexplosionSeed, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 10);
if(particle14)Level.addParticle(ParticleType.ink, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle15)Level.addParticle(ParticleType.itemBreak, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle16)Level.addParticle(ParticleType.lava, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle17)Level.addParticle(ParticleType.mobFlame, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle18)Level.addParticle(ParticleType.note, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle19)Level.addParticle(ParticleType.portal, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle20)Level.addParticle(ParticleType.rainSplash, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle21)Level.addParticle(ParticleType.redstone, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 10);
if(particle22)Level.addParticle(ParticleType.slime, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle23)Level.addParticle(ParticleType.smoke, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle24)Level.addParticle(ParticleType.snowballpoof, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle25)Level.addParticle(ParticleType.spell, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle26)Level.addParticle(ParticleType.splash, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle27)Level.addParticle(ParticleType.suspendedTown, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle28)Level.addParticle(ParticleType.terrain, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle29)Level.addParticle(ParticleType.waterWake, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle30)Level.addParticle(ParticleType.largeexplode, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle31)Level.addParticle(ParticleType.spell2, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle32)Level.addParticle(ParticleType.spell3, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

if(onlynight)Level.setTime(15000);

if(onlyday)Level.setTime(0);
	
	if(antivoid){
		Math.round(getPlayerY());
		if(Math.round(getPlayerY())=="-3"){
			clientMessage("You were at void!");
			Server.sendChat("/spawn");
			setPosition(Player.getEntity(), getPlayerX(), 65, getPlayerZ()+5);
		}
	}
	if(glide){
if(Entity.getVelY(Player.getEntity()) <= 0){
setVelY(Player.getEntity(), -0.05)
}
}
if(coords)ModPE.showTipMessage("x"+Math.round(getPlayerX())+", y"+Math.round(getPlayerY())+", z"+Math.round(getPlayerZ()));
if(armor)ModPE.showTipMessage("\n\nHead: " + Entity.getArmorDamage(getPlayerEnt(), 0) + " Chest: " + Entity.getArmorDamage(getPlayerEnt(), 1) + " Legs: " + Entity.getArmorDamage(getPlayerEnt(), 2) + " Feet: " + Entity.getArmorDamage(getPlayerEnt(), 3));
}

function devpardon() {
var file = new java.io.File( android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/clientId.txt/");
        var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/clientId.txt/" ; 
        java.io.File(path).mkdirs(); 
        file.createNewFile();
        var write = new java.io.OutputStreamWriter(new java.io.FileOutputStream(file));
        var string="";
        write.append((Math.floor(Math.random() * (500000 - 100000 + 1)) + 100000));
        write.close();
}

function rptask() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function () {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function () {
                        if (Debug == null || Debug.isShowing() == false) {
                        net.zhuoweizhang.mcpelauncher.ScriptManager.isRemote = true;
                        net.zhuoweizhang.mcpelauncher.ScriptManager.setLevelFakeCallback(true, false);
                        enableMod();
                        showMenuBtn();
                    }
                    if (autospam) {
                        Server.sendChat(text);
                    }
                    if (autodestroy) {
                        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), true);
                    }
                    nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask())
                }
            }), 1000 / 70)
        }
    }))
}
rptask()
