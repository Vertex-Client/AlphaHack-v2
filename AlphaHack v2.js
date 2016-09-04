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
var update;
var num0 = 0;
var vidd = true;
var viddd = "§9";
var text = "AlphαHαck!";
var space = " ";
var version = "0.8.2";
if(version=="0.8.2")version = "Beta";
var chestTracersRange = 10;
var chestTracersGroundMode = "on";
var chestTracersParticle = "on";
var playerTracersRange = 10;
var playerTracersGroundMode = "on";
var playerTracersParticle = "on";
var offtime = 0;
var horseheart = "";
var newage = "";
var vid = "11";
var seconds = "1000";
var numhack = 0;
var client = "§f<§9AlphαHαck§f> ";
var copyright = "©";
var trademark = "AlphaHackPE ™";
var modpeFolder = ctx.getDir("ModPE", 0);
var modpeFile = new java.io.File(modpeFolder, "AlphaHack v2.js");
var perm = "*";
var notex;
var notey;
var notez;
var test2 = false;

var GUISize = "2";

var liquidwalk = false;
var xray = false;
var ttot = false;
var antivoid = false;
var armor = false;
var coords = false;
var glide = false;
var tapspam = false;
var tapdestroy = false;
var block = false;
var taptp = false;
var sign = false;
var autodestroy = false;
var autospam = false;
var autodestroy2 = false;
var autospam2 = false;
var onlyday = false;
var onlynight = false;
var chestesp = false;
var tapnuke = false;
var autonuke = false;
var antispam = false;
var antispam2 = false;
var playeresp = false;
var lightningaura = false;
var tapid = false;
var horsehealth = false;
var getage = false;
var setage = false;
var noclip = false;
var extraj = false;
var getvel = false;
var yawpitch = false;
var airwalk = false;
var aimaura = false;
var aim;
var aimbot = false;
var aimed = false;

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
var jump = false;
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
var useFire = false;
var useNether = false;

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

var GUIColor = Color.TRANSPARENT;
var default = true;

var GUIColor1 = Color.TRANSPARENT;
var GUIColor2 = Color.BLACK;
var GUIColor3 = Color.WHITE;
var GUIColor4 = Color.RED;
var GUIColor5 = Color.BLUE;
var GUIColor6 = Color.GRAY;
var GUIColor7 = Color.LTGRAY;
var GUIColor8 = Color.YELLOW;
var GUIColor9 = Color.CYAN;
var GUIColor10 = Color.DKGRAY;
var GUIColor11 = Color.GREEN;
var GUIColor12 = Color.MAGENTA;

var GUIName = Color.WHITE;

var GUIPos = Gravity.CENTER;

var GUIBtns = Color.BLACK;

var GUIBtns2 = Color.BLACK;
var GUIBtns3 = Color.WHITE;
var GUIBtns4 = Color.RED;
var GUIBtns5 = Color.BLUE;
var GUIBtns6 = Color.GRAY;
var GUIBtns7 = Color.LTGRAY;
var GUIBtns8 = Color.YELLOW;
var GUIBtns9 = Color.CYAN;
var GUIBtns10 = Color.DKGRAY;
var GUIBtns11 = Color.GREEN;
var GUIBtns12 = Color.MAGENTA;

var AlphaHack = {};
AlphaHack.drawTracer = function(x, y, z, groundMode, particleName) {
	for(var count = 0; count <= 25; count++) {
		Level.addParticle(ParticleType.flame, x, y, z, (getPlayerX() - x) / count, groundMode?0:((getPlayerY() - y) / count), (getPlayerZ() - z) / count, 2);
	}
}

function getUpdate(callback){
var r = new java.lang.Runnable({
        run: function() {
            try {
                var u = new java.net.URL("https://arceusmatt.github.io/update");
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
                var update;
                var update = strFileContents;
                var update = JSON.parse(strFileContents+"");

if(update.status.equals("success")){
callback(new Array(update.version));
}else{
print("Error");
callback(new Array("Error"));
}
                }catch(e){
                	
                clientMessage(e+"");
                
                clientMessage(e.lineNumber);
                
                }
                }});
                var th = new java.lang.Thread(r);
    th.start();
                }
function newLevel(){ 
clientMessage("§2≡≡=======»§a>§9 α §a<§2«======≡≡§f§r");
clientMessage(client + "\n§aKik§f: ArceusMatt" + "\n" + "§bTwitter§f: @ArceusMatt" + "\n" + "§cGoogle+§f: Arceus matt" + "\n" + "§fYou§4tube§f: Arceus Matt");
clientMessage("§2≡≡=======»§a>§9 α §a<§2«======≡≡§f§r\n\n");
getUpdate(function(info){clientMessage("")});
test2 = true;
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

var defaultDestroyTime = [
null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 
0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 
0.2, 0.7, null, null, 4, 0, 0, null, null, 0.8, null, 0, 
0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, 
null, 3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, 
null, null, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2, 
0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, null, null, 
-1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 
1.5, null, null, 2, null, 2, null, null, null, null, null, 
null, null, null, null, null, null, null, null, 0.8, null, 
null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, 
null, null, null, null, null, null, null, null, null, null, 
null, null, 0.8, 0.8, 2, 2, null, null, null, null, null, null, 
null, null, null, null, null, 0.5, 0.1, 5, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0
]; 

function dip2px(dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

var bg64 = "iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAABHNCSVQICAgIfAhkiAAAEZJJREFUaIHlm3uMHVd9xz/nnHncu/fuK8nGiRcH4xA/Cm5D0xRiMJgACnFsaNImTkIrHu0fFZWqSAipFapE+b9SHyClCFoqgfKigcTGgfIIFAgSJIiAi2M7TQI4rmPv2mvv7n3NefSPMzN3Zu6967Wd5B+ONJrHnZnz+/7ev9+cC7/FQ7xaE83suL15aUP9AsF6Ify0dmB690LS1tc+962HzrwaNL1i4Dft2vMBIeUXATKwQqjCscA6h3MuJyL7zTmDS38z1n7kyL4H/v2VoPFlB79l911OCIEQAicogS2CB3D5gStfL4B3zoH1+4N773tZ6X1ZXrZh5+1bQ6V+LoRCStkHUgI+BLz08J3z+/S0BNw5h8MzQzj/m06SNx3Z/9DPLpbuiwZ/zS13OCllCloVgIoVwQshcLIgXfrgrbX5tWHgs9+fefTiNOGCH950yx1dK1QkhCADL2VQAm9FH7ifTJXOUWXwGbhM7XPw2e+p+mfgndVYY/Thrz0YvmrgM7vWjlzNlVJIGeTnQggMrmzzFfBO2nOCLzIgA58zwGq/N5bD+x88byzn9cDrb745VnKqk9u1ClL17Uu/pPZOltW8MpvDrDifSXR6ZAf8AADa5Myy1nJ43wPnhWfVN2949+2TYRwsFEE6mdqw8ufF3wCcLds8sjKdsCvOmYF3zqT74eCt1f66sbRZuuTXX/va6ZcNfAZcqNS2RZCDqYIvqrU1lO+jH/pWpsozxeo+6GHgnU5KZkCqAb1W64rnv/3oS+eaJjjXDV7VvcRF5tiELIFyFeB9oAx4/RyfEJ7gocOV7hdCeJtP9zl4KXPgUkpIr0e1+nFWIVh5zhvEZAcpEMpLXIqA/DxzdpS3/FkFQjokAolAOO/UgJJDqw5hJcJKcOlWYUSeRMmyv0EoEAqhJBt37Rk9wWrAb9x5p6uqc/W8quo5gFWoefGdw7Zh949iRDnk+m3LLSszYCT4jTvv6ANHeTtXMlV1lcZ0hxAOKUmPRa4JxWwNYUvOra8BgqJ2FjVjGJOko6RhPmlSuQb0GRAgZQBSsmnnnt4ojCNt/lxS8dyv2nhZYq5g06tydENoSN+Un+c5gRCIfkmUXssfzH2NkGJkAjSUoo270uIkzdiklCilUJKSmkcu8rl24F9jAlmK58548GqUXzOuBAayECpKQCHzEbZwDNhuei5KkcBaW0qCrE6GJkEDav/6m297S0ZMNXYP9+jnEcKGjFH2PTSpqTxTpWeUXxJCsOG9t11fnWNA7aUIfpQDrjgQBP5aSqyR3pysyCSuUt3LeJqBGu5anKxmeA6HA5epuB0IjyUmFNQ+S6dxDgn98AcgJSHhj6lo+iD4FSRdnNunr0MxeRgrhLJzjVVHiqrN93/s2/wK0aMkko279jihZOooBlXK26TC4XE7BVY6nLA4YfE22d+k65epQD9uuwBcgBYOI8EJvyF94pSfF4EWiJfOV3iefImTvoIcYGAW99OtGvqC6gMrxdxRsfdC7X2A2OocI16b3VPVrfxZ0c8IixpAhU6VHVxzy598SsrwHUJkcVJBFtdlf+8ESCEBgZEKJxQWiUOCkAghfax2IJ1F4FCO9A6HxCIwCAxIg8DhX+f3DotwXnNcqkGZeiskkj6TvNb1gefpb2qR/UBp/blzTG/YfHL+2V/+BApqLxB/V+X8aqV/oWNURjdQwBT8xzB6RkWfYe9WSn0mO+6Dl8pLWPgqDdV3B1XnZYXfjI1YXNKEUQMhY9rtLs4JlLMIo+ktnSXCEkuN0C1Mb4FQdui0T2HNEjUJrYVTtBZOETpD6DS6tYhJ2kw0a0RKIqyhFgUEEtrtdurFA+97qgxKfUqWA1YZjZS4ou+ocnRU7BzGVaUUURSRJAlaa5rNJjKttJIkIQxDms0mc3Nz1Ot1Go0Gy8vLrF27Fikl7XabqakpJicn6XQ6HD16lGazSaPRYH5+Hq01vV4vf1+z2SSOY7TWaK1HamlVg0adBwDX7Lz9Q6WH873K6lLvRNL8Pfc0ThFHY1iboHuGyUadxcVF4hCcFNSwiKTNa2cvZc+eP+aNW7dSq9XoWs3y8jLP/OIg+/fv5+T8HEp32bRhHeB46/a3csMNN9BNHA8//DDH/u8EZxZOoaTPKFUUorWmj8rLMLf1guMTQpQcoxCCTe9539pD33z0WAAglfzXoTn6gAZk8dUPnWjiOEbi6Ha7aK1pt9uM15qEYYjQlu3bt3PnHbcxEUkM5I0rOTnO69ZewY03vpO//cQnWFhYYP7UKYQQ3HTTTbx2ZhID/NvCAouLi9RqNeI4ptfrEUbKX6uXVbs4it4+S3ac81pJGD8FXCkBLEROgMFhRT/uDqgVCpzMf5ciwZo2wiVEAaC7xApcr4Oymi1XX82eW29lKpI4B1p7VTu71AGgDlwawt/89Uepu4RmKHjX297C+plJNPDciyc5fuzXtNvLKOVjeavbQRtHrd7wtFiRxoVBB+mEj0Z5HZjHfHkFrKKZsVIcz+w9SRJf+ChFs9mk1+sxPT3Nxz72MaYbCgt0OpZ77/0sd+z5M+655x4+fe/nOP7SPD0LG14zywc/+EHCMGT37t10LNSAAwcOMD4+ThzHuWYJIeh2u9RqtZy+Kp2rzT3kqBcUR+bdBxgjNSqwCBKk0CTJMlEE0ia8c/s2mrUQ4yACPv1P/8zBn/8S2zVExDz5xFM8+KX/QLeXCYDtb/lD1q+9gqvXzTImYbHT5ZuP7Wdp4TRYRxSExHHM+Pg4xhgWFxfzjHDAOafXi9iKwiyBHwC1ylhurSWKIsLQl8ytViv38jfeeCNxCErAT58+xJNPPsnc3BxjY2MsLCyQJAlPPPEEjz/+OBqvqh//+MeJg5AAOHLkCO12mzAM8+3MmTNoranVakRRNDKmVyNXsTgrCriU3ma5uDQOKb13R/juiSxwM/OeizZECUVMDRlIxgKL7Uhmp2qsna5TR+NwHDhwgDAMWZRjdJViqembl04HfO4HT3Lj297G5OQkM5PjoLu8FMR85/s/4iU5hhurU+slWGdpSAO9Nr2wjpQS7Tx9mUf3GR5Y61IaU18gHE7i+4hIXBodzmnz2RhWVyvVTzSs9eVnEASsWbOGCIlxBonk8OHDfrKU+0EQ5HH7xIkTHD582Hdy00TkxNk2Tz31VD7PMGlm16s0DhujNHlF8MOaCcXjiARlOkirESbJwa2ZXYcBOgQsOXjhxDxtEeAaTZK4Rjfwm9E9nNX8+Gc/wymFtg6k4uChQ/S0Jq0d0RKMEpggQCvlj1WfAaOaHdlxtbrM+oQSP4Utgh3GxWGSz7+hFSYzxjAxMUGSTtxqtQiCILdVID/udDoEQcAPf/hDTi0s0Ov55sjTTz/db0RUAOUV3cA3/dX1D3wa7I7n4NHmz7HDv4qUgFe6sIFLCFyCFA6BRbt0kxILGCSJVKjaGD0n0E7RMz5zVEHEZBwxVYu5ct06as0mwViTHpKp6QlUIJAuQbokj+OJlGjlQ6dxvkKU2IEolXV5ETb9vG0o9hkMelsO/sj+h74wsCBgSA+typTM/mylS7uwsJCXFY36mM8CpaTX66G1Jgx9erq0tMSZM2fYsWMHtSDA4ejqLtdff/3IOVc7RgnQOcehvQ8935d8Xx2gCDiTdMrBUcM46zsw0vfRfvXro/TSl4fApqvWU0fS0F0austE0qbeOsu4M8yON9i8eTMa0EAYxLzhqtew8ap11HVCXSdIpxE2ySUXplu+qAGLEq70vQBS27YrCG8Yp0ZxepjNA7mnB2/zL774ImdbHRSQAFu2bEFKSRiGuQZYa4njmOuuu47Z2VkCYGl5CVImbNu2bdWZWnGM8gPDMBXAm/tzB5ZyDGPB9DlcJcQoQUv3GL/kUpZ7CTKqoeI62jmeff55BD5NveGNm7gsliRHn+cy02Hy7BwbQsd0oLjtPe8mTN/7wFceoQtEznHDm65ltlmnffxFxoQiSAym20FaQ6S7RLqb05R3cDD5ZmxSXh+UCslYfU92npdFp4788j8v2/S7n/QvSx/KEgiR2rcse1wr0i+kIqbT6RCH/nWtsyew1vIHW9+IVIrxesiaNbM8+9wLtFot4jFfmv7FRz7M7299A8uJ5n+eeYZHvvoVfu/aa2k0Gkw1Grxw7Di/+c1vaFtBGIY4IbHWovA5hhFyqGbkGpyt5LAm3z/zyH03Z/eVW9fW4Mt1g8MhCNIXidwn+MkyB6eIohqJdYggxAYBSilEq8ZPfvpznrruaXZsuwGbwPZt13LZ9DSLi4tEdVizZg2Tl8ygABEGPPrN79IJx3j08R/wVx+4Awd8+O67ef26dZwSMffddx/dxIfR9smTWCFwjeZQtR78cuP3WUQbkDzA3OEDfz+zaesnhfSXRbbyIpN4vrIitfU0ozNWpd/HDUIIxmNJp9PhJ9//HluvfRMzk5cSBHD5zBQzM5czs+YypsabGKDV1uz99nfZu3cvJ+fmOH36NO9485uJa3XqkWT91a8jnpph3759xHVfFzSjiFqtRrsQnvNFSumxMabvvFPJH3zkSyU1GcjwVkpm/EKh/gLBwCTIpItLesRK0tOw1OrRCyJ0VIOJaT71j//Cl7/1PV5swSLQCiFRklPA6Zbj8198gM9/9euEV6xHzVzF8Z7iHz7zWVoWuimbpy+p4aI6JogJm5OcXe7QSaxf+mHLCxazBUrO2JxenMFZXYU62BnftPOu96ooeExKiVShl3y2EEGVU0cpnO+n0aDRaNA1liRJGIu6JEnCpHIsLy/ToEa9XmfH27czOzvL0ePPIYTgO1//b+I45tByh1arxRVXXsn8/DwbapKJiQne/tZtRFHEr7qOb3zjG6jaGEIIpoC5uTmC8TEvnNQX5LZuvOSdM14DdEJizE3P7nvgv1YED7Dl/X/qv80XwCulEKpfnADExpAkCSacIgxDTBwD0E38eqDA+JA2XptkcXERay2NRoPTyy8hpSReglqtxsnGFEopJqYmOXHiBDOtBZrNJoHucfr0ac6OX4ZSinB8wjdKO22CIKBnOqmn94mWpQwe47/SGt3j0N77B7AOLWwOPvJFUbWjnFuViir7fN3pdEgSH1609qujsk5Pr9cjiiK/WKjXo9FoYIwhjmOCIPAeXCmOHTvG5ZdfTrfbZXl5mfn5eaanp6nVanlN32q18vmqNBadXPH6MOAjJQ/wO390t4O0EaBClFKgglJjoNg+LlVSDG8s9pmYhso8LR5cgFS6X9hSPM9+y/t21uRgre3nJk4nWGtHLlheMX3a8v67nY/vwVDwxeSnlI1lreQhWVUWOitXy0SJCnNEuXjJJGqcPSf4lVZqnzN33Py+u5xUYQ44Y8KoFpJ/qSoTfx6jmpFl4LPfimZoTFJSfWHLy1LPtTD5nOvwlmI91uypVjax77jYnJBhvbNsccGFjGKd3tec4aG3Gtv74C1n3VLjXHOds4119KGH2lizI1/fYi0YnXvSYZvDYJ3u59pDegTDwOT2nD6XV5SVqmyg3DYeuLPaSz2xO4/t3ds6F7ZVi2fjrjvfpYLwW8WOqBVpI3DoQoZ0AiEGFhJWgQ8QJfvVYvGeoto759C6N6DuSWJ3/u9jDzy2GkznpZvrd3yoVptI2jlYWQafrcHNVlWVJjrPpiMUfYbfS1dWeZ/IuNzGF1lurEbiOU2rvbE4Nr/vA85XfZWOqso0oB/qBrSA1TOgL3nfSKn+EyPLJ5zVI2P5SuPCvBKwededTqigDL7CjNxxZYXSKkA755BucH29c/5fWKVrqd95Zt/5A4eLAJ+NTbvTXOACwVdbz0Xw2Xnu2CrMeObRL10U/RcNHmDjrttvlaiHc4enghL4HPQK4a8o2eK1LIkpZXbO3X5o3/1fvli6XxbwxbFl910Oqc4bPOAbqDAg9Qz8har3qPGyg8/GG3bfuc8ibgHI/lJW/eZfHFnv0ANPMzbncNZ+9eD+B299JWh8xcBXxzU77/xLoeRnxEqJlXXOOvfRI/vvv/fVouu3dvw/t3vZIuirdnQAAAAASUVORK5CYII=";

var buttonBg = "iVBORw0KGgoAAAANSUhEUgAAAEYAAAAgCAYAAACvgw7DAAAFB0lEQVR42t1aV47kOgzsQ0zOOWIwwOScw/1P5EVpUUY1pyjZ2PeAxX6wqWiJ5SIV2pP19fVuYWGhm5mZ6WZnZ7u5ubki8/PzvSwuLnZLS0vdyspKt7q6WgT9IBsbG93m5ma3tbVVZHt7u9vZ2ekF+d3d3ZLe29srmnloCvL6DGj2R1rH0GeznoJ2bAvNea6trfVzhx3Ly8vFJtgOe6lhL2yaIHF5edl9f393n5+f3dfXV9GQj4+PIky/v78X/fb2VtKvr68lTU1BHvL8/Ny9vLxMCcpdHv3Ynlqfr/1QzzKWq3bzoeb8qWkbbQYWAGkCpgAUDPb09NQ9Pj4Wub+/L/rh4aEvo6AM9RCkKayD3N3dFdF2TLu+2pZ1Oh7npM9iWZwj87RH27vnUtgezCnAACltpIM7o2Ody9f6R4DUaAecgtYC2809juPGU4AKYxBXFJjIhsxgN7kISG3CLeNc+6y/zjuri3NzfQhMYQx+4GOs5BvJUI8oDwGsxq5amxaoyqKsvvUS1G6O3TOGwMRGNfdoMarmPrE89s+Mq4GZsSa+vJodjItYrQpjsMLQl1UPcYmxcac2yaF1Ll60DI+x0zGGeSzlvStlfl5jiHOBrHwIkK03WwvQ2dgtF412ASDsc8o+Bus7Cm5vb39EfrdCKLpuMhl9nTi3qrnaGEBabeNKR41N4ASBBhsdgOLAgb6+vu7rKWNY5IDSsrgHqQE21Hh9zhBwFCQLjIo2VtCirztwasxxG60I0hDmubnUnp2BE+3GEaK4kgIT2YJyBc3FHGdIZlzWNmNM1j8D0u1LMuZEpvwABmeMm5ubH8hF5mSbOPeGomFuC94CZigDImtb7TLWQIMEg4BxG6l4lsqMqxnpzmBZu1bwHgKMa+eAgeBUPgWMBuC/EZgsJtXc2M3VbQPUXguMiynu1PuvAKPxlNIDgysHAENw6FYakCNj3ApUm9yfxpj/Epgs6NLeKcZcXV31oDjW6P5l7KrUWm3Grkqub2uDGftFxmgYKcBgHwPGABiyxrlVxhgX0Ia+3do+ZghbagfX2qZSw4KyhVJWJQUGO1wFKAZiTUe21M5ANYPGrEity7LWZtKxhaJhpF+ucaUHQAiOY47zxXhcr93WtZba1vmp9iJqrlS7N1J7aC8wKMDgdA1gyBZoigPHBeTaQS87T429uqjd4MVY07q9i6BQaG85KxEYgHJxcTHlTg6cDKB4wTX2CqMGXuu6YeiFWhZXaCd1AQY3eIgx+NsAgEBDlDXUCo7b68Sz1pArjBqIQ2XM/U0MCXzxtBe2l/sYMgYFYAxEQYouRoRj3NElL5Y7ZsVtQM2IGsg1if8oRKYoKBpjyw0eGANgAAjdiaLgOFEWtQK1O264fFau90RDznQOfAeKrsYkR7nzxf9KCFJkCvT5+XmfJnsiqi4OZaKgRBCzFTC6bVbnjHbbDB2Pc6Y9JARt7f+JBGMAhrLl7Ozsh2tlooMpo1ydtokAuq1CBnTUDgS34mhYIEugaT/y5X8l7GNOTk5KhYKj+cieqJVJOqgDQJkX314E1kl8rnt+NiaDqy4ytJX2HR0d/Xal4+Pj/+VrB/3qgV857O/vly8bkIdGHmnm2RblkIODgyLMs+zw8LAYAEGagjzrtS+fjTnxawjM3X35gPzp6Wk3QScyhqipaJljiQZoXcWcZHGK/biPinEtuqAeWxz7MoYqa+J8aSNwAFl+AeaQgIFzUqgAAAAAAElFTkSuQmCC";

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
            	setRot(getPlayerEnt(), getYaw(getPlayerEnt()), 0);
mainMenu();
GUI.dismiss();
if(getLanguage=="en_US")Toast.makeText(MainActivity, "Scroll down", 1).show();
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
            
            /*var title3 = new TextView(MainActivity);
            title3.setTextSize(20);
            title3.setText("     Scroll down!");
            title3.setGravity(Gravity.RIGHT);
            title3.setTextColor(Color.WHITE);
            menuLayout.addView(title3);*/

menuLayout.addView(line0);

            var title2 = new TextView(MainActivity);
            title2.setTextSize(20);
            title2.setText("Made by: ArceusMαtt");
            title2.setGravity(Gravity.CENTER);
            title2.setTextColor(Color.WHITE);
            menuLayout.addView(title2);
            
            var title = new TextView(MainActivity);
            title.setTextSize(20);
            title.setText(" AlphαHαck v2 ("+version+")");
            title.setGravity(Gravity.CENTER);
            title.setTextColor(Color.WHITE);
            menuLayout.addView(title);
            
            var exit = new Button(MainActivity);
            exit.setText("Exit AlphαHαck");
            exit.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
            exit.setTextColor(Color.RED);
            exit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
menu.dismiss(); 
showMenuBtn(); 
if(getLanguage=="en_US")Toast.makeText(MainActivity, "Closed successfully", 1).show();
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
            if(tapspam==true)active10.setText("TapSpam, ");
            active10.setTextColor(Color.WHITE);
            line1.addView(active10);
            
            var active11 = new TextView(MainActivity);
            active11.setTextSize(10);
            if(tapdestroy==true)active11.setText("TapDestroy, ");
            active11.setTextColor(Color.WHITE);
            line1.addView(active11);
            
            var active12 = new TextView(MainActivity);
            active12.setTextSize(10);
            if(airwalk==true)active12.setText("AirWalk, ");
            active12.setTextColor(Color.WHITE);
            line1.addView(active12);
            
            menuLayout.addView(line1);
            
            var line2 = new android.widget.LinearLayout(ctx);
	    line2.setOrientation(0);
            
            menuLayout.addView(line2);
            
            var line3 = new android.widget.LinearLayout(ctx);
	    line3.setOrientation(0);
	    
            
             menuLayout.addView(line3);
             
             var line4 = new android.widget.LinearLayout(ctx);
	    line4.setOrientation(0);
	    

            menuLayout.addView(line4);
            
            var line6 = new android.widget.LinearLayout(ctx);
	    line6.setOrientation(0);
	    
	    menuLayout.addView(line6);
	    
	    var group = new android.widget.Button(ctx);
group.setText("Community");
group.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
group.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             var urls4 = new Intent(ctx);
	  urls4.setAction(Intent.ACTION_VIEW);
                    urls4.setData(Uri.parse("https://plus.google.com/communities/103695355587842948163"));
                    ctx.startActivity(urls4);
			}
		});
		menuLayout.addView(group);
	    
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
		
		var credits = new android.widget.Button(ctx);
		credits.setText("Credits");
		credits.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             misc.dismiss();
             credit_menu();
			}
		});
		miscLayout.addView(credits);
		
		function credit_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var creditLayout = new LinearLayout(ctx);
            var creditScroll = new ScrollView(ctx);
            var creditLayout1 = new LinearLayout(ctx);
            creditLayout.setOrientation(1);
            creditLayout1.setOrientation(1);
            creditScroll.addView(creditLayout);
            creditLayout1.addView(creditScroll);

			var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             credit.dismiss();
             showMenuBtn();
			}
		});
		creditLayout.addView(exit);
		
	    var credit1 = new TextView(MainActivity);
            credit1.setTextSize(20);
            credit1.setText("Godsoft029 for providing JS support & some of his scripts.");
            credit1.setTextColor(Color.GREEN);
            creditLayout.addView(credit1);
            
            var credit2 = new TextView(MainActivity);
            credit2.setTextSize(20);
            credit2.setText("Peacestorm / vertex for some of their scripts & ideas.");
            credit2.setTextColor(Color.BLUE);
            creditLayout.addView(credit2);
            
            var credit3 = new TextView(MainActivity);
            credit3.setTextSize(20);
            credit3.setText("AJ170 for ideas & adding 'clear inventory'.");
            credit3.setTextColor(Color.YELLOW);
            creditLayout.addView(credit3);
            
            var credit4 = new TextView(MainActivity);
            credit4.setTextSize(20);
            credit4.setText("APRIC0CKS for ideas & adding 'glide'.");
            credit4.setTextColor(Color.WHITE);
            creditLayout.addView(credit4);
            
            var credit5 = new TextView(MainActivity);
            credit5.setTextSize(20);
            credit5.setText("Johnmacrocraft for korean translate & adding 'block protect'.");
            credit5.setTextColor(Color.RED);
            creditLayout.addView(credit5);
			
credit = new PopupWindow(creditLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, ctx.getWindowManager().getDefaultDisplay().getHeight());
            credit.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
creditLayout1.setBackgroundDrawable(bg);
creditLayout1.setPadding(20,0,20,0);
            credit.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

var pass = new android.widget.Button(ctx);
		pass.setText("Brute force (Numbers)");
		pass.setTextColor(Color.RED);
if(hackk==true)pass.setTextColor(Color.GREEN);
		pass.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             hackk?hackk=false:hackk=true;
pass.setText("Brute force (Numbers)");
if(hackk == true){
pass.setTextColor(Color.GREEN);
hackk = true;
}
if(hackk == false){
pass.setTextColor(Color.RED);

hackk = false;
}
			}
		});
		miscLayout.addView(pass);
		
		var ht1 = new android.widget.Button(ctx);
		ht1.setText("How to bypass ban");
		ht1.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(ctx); 
/*alert.setTitle(""); */

var scroll = new android.widget.ScrollView(ctx); 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);

alert.setTitle("How to bypass a /ban");
 alert.setMessage("OP ban you with /ban\nTo get unbanned:\n#1 let an OP unban you\n#2 Server reset can unban all players\n#3 Change your username\n/ban only bans your username.\n-ArceusMatt");

alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
misc.dismiss();
      }});

alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){

dialog.dismiss();
      }});
var dialog = alert.create();
dialog.show();
			}
		});
		miscLayout.addView(ht1);

var ht2 = new android.widget.Button(ctx);
		ht2.setText("How to bypass ip ban");
		ht2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(ctx); 
/*alert.setTitle(""); */

var scroll = new android.widget.ScrollView(ctx); 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);

alert.setTitle("How to bypass a /ban-ip");
 alert.setMessage("OP ip ban you with /ban-ip\nTo get unbanned:\n#1 let an OP unban you\n#2 Server reset can unban all players\n#3 Change IP with a VPN\n/ban-ip only bans your public ip address");

alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
misc.dismiss();
      }});

alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){

dialog.dismiss();
      }});
var dialog = alert.create();
dialog.show();
			}
		});
		miscLayout.addView(ht2);

var ht3 = new android.widget.Button(ctx);
		ht3.setText("How to bypass CID/devban");
		ht3.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(ctx); 
/*alert.setTitle(""); */

var scroll = new android.widget.ScrollView(ctx); 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);

alert.setTitle("How to bypass a /devban");
 alert.setMessage("You can get out of a cid ban in 3 ways.\n#1 get Unbanned\n#2 server resets\n#3 Go in your file storage and go to Games > com.mojang > minecraftpe > clientId.txt and change the id to any number\nWhen an OP uses /devban on you it bans your device(MCPE Client ID) in the server and puts your ID in a type of saving system that doesn't allow you to join, /devban is a command the server has if they download a plugin\n-Arceus_matt");

alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
misc.dismiss();
      }});

alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){

dialog.dismiss();
      }});
var dialog = alert.create();
dialog.show();
			}
		});
		miscLayout.addView(ht3);
		
		var ht4 = new android.widget.Button(ctx);
		ht4.setText("How to bypass Alias");
		ht4.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(ctx); 
/*alert.setTitle(""); */

var scroll = new android.widget.ScrollView(ctx); 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);

alert.setTitle("How to bypass /alias");
 alert.setMessage("Eventually you'll get banned by username,\nYou can hide your username from alias\n#1 Change IP\n#2 server resets\n#3 no longer targeted\nWhen an OP uses /alias on you it shows your usernames by IP in the server, /alias is a command the server has if they download a plugin\n-Arceus_matt");

alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
misc.dismiss();
      }});

alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){

dialog.dismiss();
      }});
var dialog = alert.create();
dialog.show();
			}
		});
		miscLayout.addView(ht4);
            
            var sit = new android.widget.Button(ctx);
		sit.setText("Image lookup");
		sit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
web3(); 
//print("Loading web page");
			}
		});
		miscLayout.addView(sit);

      function web3()
      {
      var urls2 = new Intent(ctx);
	  urls2.setAction(Intent.ACTION_VIEW);
                    urls2.setData(Uri.parse("http://www.tineye.com"));
                    ctx.startActivity(urls2);
      }

var sid = new android.widget.Button(ctx);
		sid.setText("View website code");
		sid.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             misc.dismiss();
             scc();
			}
		});
		miscLayout.addView(sid);

function scc() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
scc = new android.widget.PopupWindow();
var Layer5 = new android.widget.LinearLayout(ctx);
var sc1 = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter website");
Dialog.setContentView(Layer5);

Layer5.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer5.addView(sc1);
Layer5.addView(Exit);

sc1.setText("");
sc1.setHint("https://example.com");
Exit.setText("View code");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
sc2 =sc1.getText();
Dialog.dismiss();
sc3();
print("Loading web page");
showMenuBtn();
}
});

scc.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
scc.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
scc.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The scc Dialog Is Malfunctioning:"+e);
}
}});
}

      function sc3()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('view-source:' + sc2);
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

            misc = new PopupWindow(miscLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            if(default==true)misc.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default==false)misc.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
miscLayout1.setBackgroundDrawable(bg);
miscLayout1.setPadding(20,0,20,0);
            misc.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

var settings = new android.widget.Button(ctx);
settings.setText("Settings");
settings.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
settings.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             settings_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(settings);
	
		function settings_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var settingsLayout = new LinearLayout(ctx);
            var settingsScroll = new ScrollView(ctx);
            var settingsLayout1 = new LinearLayout(ctx);
            settingsLayout.setOrientation(1);
            settingsLayout1.setOrientation(1);
            settingsScroll.addView(settingsLayout);
            settingsLayout1.addView(settingsScroll);
            
var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             settings.dismiss();
             showMenuBtn();
			}
		});
		settingsLayout.addView(exit);
		
	    var link = new Button(ctx);
            link.setText("Download link");       
            link.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
var urls3 = new Intent(ctx);
	  urls3.setAction(Intent.ACTION_VIEW);
                    urls3.setData(Uri.parse("https://arceusmatt.github.io/AlphaHack"));
                    ctx.startActivity(urls3);
                }
            }));
            settingsLayout.addView(link);
		
		var g1 = new Button(ctx);
            g1.setText("Menu center");       
            g1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIPos = Gravity.CENTER;
GUIPos2 = Gravity.CENTER;
GUIPos3 = Gravity.CENTER;
                }
            }));
            settingsLayout.addView(g1);

var g2 = new Button(ctx);
            g2.setText("Menu right");       
            g2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIPos = Gravity.RIGHT;
GUIPos2 = Gravity.RIGHT;
GUIPos3 = Gravity.RIGHT;
                }
            }));
            settingsLayout.addView(g2);

var g3 = new Button(ctx);
            g3.setText("Menu left");       
            g3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIPos = Gravity.LEFT;
GUIPos2 = Gravity.LEFT;
GUIPos3 = Gravity.LEFT;
                }
            }));
            settingsLayout.addView(g3);
			
			var gs0 = new Button(ctx);
            gs0.setText("Menu Size 1");       
            gs0.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUISize = 4;
                }
            }));
            settingsLayout.addView(gs0);

var gs1 = new Button(ctx);
            gs1.setText("Menu Size 2");       
            gs1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUISize = 3;
                }
            }));
            settingsLayout.addView(gs1);

var gs2 = new Button(ctx);
            gs2.setText("Menu Size normal");       
            gs2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUISize = 2;
                }
            }));
            settingsLayout.addView(gs2);

var gs3 = new Button(ctx);
            gs3.setText("Menu Size 3");       
            gs3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUISize = 1;
                }
            }));
            settingsLayout.addView(gs3);
            
var l1 = new Button(ctx);
            l1.setText("Default Menu");       
            l1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor1
var GUIName = Color.WHITE;
default = true;
                }
            }));
            settingsLayout.addView(l1);
            
            var l2 = new Button(ctx);
            l2.setText("Black Menu");       
            l2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor2
 var GUIName = Color.BLACK;
 if(default==true)default = false;
                }
            }));
            settingsLayout.addView(l2);

var l3 = new Button(ctx);
            l3.setText("White Menu");       
            l3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor3
var GUIName = Color.BLACK
if(default==true)default = false;
                }
            }));
            settingsLayout.addView(l3);

var l4 = new Button(ctx);
            l4.setText("Red Menu");       
            l4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor4
if(default==true)default = false;
                }
            }));
            settingsLayout.addView(l4);

var l5 = new Button(ctx);
            l5.setText("Blue Menu");       
            l5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor5
if(default==true)default = false;
                }
            }));
            settingsLayout.addView(l5);

var l6 = new Button(ctx);
            l6.setText("Gray Menu");       
            l6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor6
var GUIName = Color.WHITE;
if(default==true)default = false;
                }
            }));
            settingsLayout.addView(l6);

var l7 = new Button(ctx);
            l7.setText("Light gray Menu");       
            l7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor7
var GUIName = Color.BLACK;
if(default==true)default = false;
                }
            }));
            settingsLayout.addView(l7);

var l8 = new Button(ctx);
            l8.setText("Yellow Menu");       
            l8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor8
var GUIName = Color.BLACK;
if(default==true)default = false;
                }
            }));
            settingsLayout.addView(l8);

var l9 = new Button(ctx);
            l9.setText("Cyan Menu");       
            l9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor9
var GUIName = Color.BLACK;
if(default==true)default = false;
                }
            }));
            settingsLayout.addView(l9);

var l10 = new Button(ctx);
            l10.setText("Dark gray Menu");       
            l10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor10
var GUIName = Color.WHITE
if(default==true)default = false;
                }
            }));
            settingsLayout.addView(l10);

var l11 = new Button(ctx);
            l11.setText("Green Menu");       
            l11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor11
if(default==true)default = false;
                }
            }));
            settingsLayout.addView(l11);

var l12 = new Button(ctx);
            l12.setText("Magenta Menu");       
            l12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor12
if(default==true)default = false;
                }
            }));
            settingsLayout.addView(l12);

            settings = new PopupWindow(settingsLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            if(default==true)settings.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default==false)settings.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
settingsLayout1.setBackgroundDrawable(bg);
settingsLayout1.setPadding(20,0,20,0);
            settings.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}
	    
var cheats = new android.widget.Button(ctx);
cheats.setText("Online & offline mods");
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
		
		var bypass1 = new Button(MainActivity);
bypass1.setText("Anti-spam bypass");
bypass1.setTextColor(Color.RED);
if(antispam2==true)bypass1.setTextColor(Color.GREEN);
            bypass1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             antispam2?antispam2=false:antispam2=true;
bypass1.setText("Anti-spam bypass");
if(antispam2 == true){
bypass1.setTextColor(Color.GREEN);
spa2();
antispam2 = true;
}
if(antispam2 == false){
bypass1.setTextColor(Color.RED);
antispam = false;
antispam2 = false;
}
                }
            }));
            cheatLayout.addView(bypass1);
            
            function spa2() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
new10 = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var m1 = new android.widget.EditText(ctx);
var select1 = new android.widget.Button(ctx);
var select2 = new android.widget.Button(ctx);
var select3 = new android.widget.Button(ctx);
var select4 = new android.widget.Button(ctx);
var Dialog = new android.app.Dialog(ctx);
 
Dialog.setTitle("Enter text & select");
Dialog.setContentView(Layer);
 
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();

Layer.addView(m1);
m1.setText("AlphaHack!");
 
Layer.addView(select1);

Layer.addView(select2);

Layer.addView(select3);

Layer.addView(select4);
 
            select1.setText("LBSG Bypass");
            select1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
text =m1.getText();
seconds = "2000";
antispam = true;
Dialog.dismiss();
showMenuBtn();
                }
            }));
             
            select2.setText("Mineplex Bypass");
            select2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
text =m1.getText();
seconds = "3000";
antispam = true;
Dialog.dismiss();
showMenuBtn();
                }
            }));
            
            select3.setText("Simple Bypass");
            select3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
text =m1.getText();
var seconds = "1000";
antispam = true;
Dialog.dismiss();
showMenuBtn();
                }
            }));
            
            select4.setText("Leet.cc Bypass");
            select4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
text =m1.getText();
var seconds = "2500";
antispam = true;
Dialog.dismiss();
showMenuBtn();
                }
            }));
 
new10.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new10.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new10.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("Bypass error: "+e);
}
}});
}
		
		var worldInfo = new Button(MainActivity);
            worldInfo.setText("World info");
            worldInfo.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
                Level.getRainLevel();	
clientMessage("World name: "+Level.getWorldName()+" World: "+Player.getDimension()+" Biome: "+Level.getBiomeName());
Math.round(Level.getRainLevel());
if(Math.round(Level.getRainLevel())=="0")clientMessage("Weather: clear"+" Time: "+Level.getTime());
if(Math.round(Level.getRainLevel())=="1")clientMessage("Weather: rain/snow "+" Time: "+Level.getTime());
                }
            }));
            cheatLayout.addView(worldInfo);
	    
	    var button1 = new Button(MainActivity);
button1.setText("Walk on liquid");
button1.setTextColor(Color.RED);
if(liquidwalk==true)button1.setTextColor(Color.GREEN);
            button1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             liquidwalk?liquidwalk=false:liquidwalk=true;
button1.setText("Walk on liquid");
if(liquidwalk == true){
button1.setTextColor(Color.GREEN);
Toast.makeText(MainActivity, "Credit: GodSoft029!", 1).show();
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
            cheatLayout.addView(button1);
            
            var creative = new Button(MainActivity);
            creative.setText("Creative");        
            creative.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(1);
                    Player.setCanFly(true);
clientMessage(client + "§7Your gamemode was updated to creative mode!");
                }
            }));
            cheatLayout.addView(creative);
            
            var survival = new Button(MainActivity);
            survival.setText("Survival");
            survival.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(0);
                    Player.setCanFly(false);
clientMessage(client + "§7Your gamemode was updated to survival mode!");
                }
            }));
            cheatLayout.addView(survival);
            
            var adventure = new Button(MainActivity);
            adventure.setText("Adventure");       
            adventure.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(2);
                    Player.setCanFly(false);
clientMessage(client + "§7Your gamemode was updated to adventure mode!");
                }
            }));
            cheatLayout.addView(adventure);
            
            var spectator = new Button(MainActivity);
            spectator.setText("Spectator");     
            spectator.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(3);
                    Player.setCanFly(true);
clientMessage(client + "§7Your gamemode was updated to spectator mode!");
                }
            }));
            cheatLayout.addView(spectator);
            
            var button6 = new Button(MainActivity);
button6.setText("Glide");
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
            cheatLayout.addView(button6);
            
            var walkonair = new Button(MainActivity);
walkonair.setText("Walk on air");
walkonair.setTextColor(Color.RED);
if(airwalk==true)walkonair.setTextColor(Color.GREEN);
            walkonair.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             airwalk?airwalk=false:airwalk=true;
walkonair.setText("Walk on air");
if(airwalk == true){
walkonair.setTextColor(Color.GREEN);
Block.setShape(95, 0, 0, 0, 1, 1, 1);
clientMessage(client + "You may get detected as flying becareful!")
airwalk = true;
}
if(airwalk == false){
walkonair.setTextColor(Color.RED);
clientMessage(client + "Walk on air is off")
airwalk = false;
}
                }
            }));
            cheatLayout.addView(walkonair);
            
            var killaura1 = new Button(MainActivity);
killaura1.setText("Aim aura");
killaura1.setTextColor(Color.RED);
if(aimaura==true)killaura1.setTextColor(Color.GREEN);
            killaura1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             aimaura?aimaura=false:aimaura=true;
killaura1.setText("Aim aura");
if(aimaura == true){
killaura1.setTextColor(Color.GREEN);
clientMessage(client + "Aim aura on");
Toast.makeText(MainActivity, "Credit: Firepro9978 from flame client!", 1).show();
aimbot = true;
aimed = true;
aimaura = true;
}
if(aimaura == false){
killaura1.setTextColor(Color.RED);
clientMessage(client + "Aim aura off");
aimbot = false;
aimed = false;
aimaura = false;
}
                }
            }));
            cheatLayout.addView(killaura1);
	    
	    	    var button2 = new Button(MainActivity);
button2.setText("X-Ray");
button2.setTextColor(Color.RED);
if(xray==true)button2.setTextColor(Color.GREEN);
            button2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             xray?xray=false:xray=true;
button2.setText("X-Ray");
if(xray == true){
button2.setTextColor(Color.GREEN);
clientMessage(client + "You may crash!\nchange on/off fancy graphics for better view.");
Block.setRenderLayer(1,1);
Block.setRenderLayer(2,1);
Block.setRenderLayer(3,1);
Block.setRenderLayer(12,1);
Block.setRenderLayer(24,1);
Block.setRenderLayer(78,1);
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
xray = false;
}
                }
            }));
            cheatLayout.addView(button2);
            
            var svr = new android.widget.Button(MainActivity);
            svr.setText("Server IP:Port");
            svr.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage(client + "§lIP:§r " + Server.getAddress() + " §lPort:§r " + Server.getPort());
if(Server.getAddress()=="null" || Server.getPort()=="0")clientMessage(client + "You are not on a server!");
                }
            }));
            cheatLayout.addView(svr);
            
            var itemInfo = new Button(MainActivity);
            itemInfo.setText("Item info"); 
            itemInfo.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
clientMessage(client + "Item ID: " + Player.getCarriedItem());
clientMessage(client + "Data / damage: " + Player.getCarriedItemData());
clientMessage(client + "Amount in hand: " + Player.getCarriedItemCount());
                }
            }));
            cheatLayout.addView(itemInfo);
            
            var cidban = new Button(MainActivity);
            cidban.setText("CID/dev pardon"); 
            cidban.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                	for(var hk = 0; hk < 4; hk++){
                		if(hk==3)devpardon();
                	}
Toast.makeText(ctx, "You will crash & be unbanned!", 1).show();
                }
            }));
            cheatLayout.addView(cidban);
	    
	    var button4 = new Button(MainActivity);
button4.setText("Armor status");
button4.setTextColor(Color.RED);
if(armor==true)button4.setTextColor(Color.GREEN);
            button4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             armor?armor=false:armor=true;
button4.setText("Armor status");
if(armor == true){
button4.setTextColor(Color.GREEN);
if(coords==true)coords==false;
if(yawpitch==true)yawpitch==false;
if(getvel==true)getvel==false;
armor = true;
}
if(armor == false){
button4.setTextColor(Color.RED);

armor = false;
}
                }
            }));
            cheatLayout.addView(button4);
            
            var button5 = new Button(MainActivity);
button5.setText("Coordinates");
button5.setTextColor(Color.RED);
if(coords==true)button5.setTextColor(Color.GREEN);
            button5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             coords?coords=false:coords=true;
button5.setText("Coordinates");
if(coords == true){
button5.setTextColor(Color.GREEN);
if(armor==true)armor==false;
if(yawpitch==true)yawpitch==false;
if(getvel==true)getvel==false;
coords = true;
}
if(coords == false){
button5.setTextColor(Color.RED);

coords = false;
}
                }
            }));
            cheatLayout.addView(button5);
            
            var seevel = new Button(MainActivity);
seevel.setText("Velocity");
seevel.setTextColor(Color.RED);
if(getvel==true)seevel.setTextColor(Color.GREEN);
            seevel.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             getvel?getvel=false:getvel=true;
seevel.setText("Velocity");
if(getvel == true){
seevel.setTextColor(Color.GREEN);
if(yawpitch==true)yawpitch==false;
if(armor==true)armor==false;
if(coords==true)coords==false;
getvel = true;
}
if(getvel == false){
seevel.setTextColor(Color.RED);

getvel = false;
}
                }
            }));
            cheatLayout.addView(seevel);
            
            var seeyaw = new Button(MainActivity);
seeyaw.setText("Pitch & yaw");
seeyaw.setTextColor(Color.RED);
if(yawpitch==true)seeyaw.setTextColor(Color.GREEN);
            seeyaw.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             yawpitch?yawpitch=false:yawpitch=true;
seeyaw.setText("Pitch & yaw");
if(yawpitch == true){
seeyaw.setTextColor(Color.GREEN);
if(getvel==true)getvel==false;
if(armor==true)armor==false;
if(coords==true)coords==false;
yawpitch = true;
}
if(yawpitch == false){
seeyaw.setTextColor(Color.RED);

yawpitch = false;
}
                }
            }));
            cheatLayout.addView(seeyaw);
            
            var button7 = new Button(MainActivity);
button7.setText("Text to toast");
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
            cheatLayout.addView(button7);
            
            var button8 = new Button(MainActivity);
button8.setText("Anti break");
button8.setTextColor(Color.RED);
if(block==true)button8.setTextColor(Color.GREEN);
            button8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             block?block=false:block=true;
button8.setText("Anti break");
if(block == true){
button8.setTextColor(Color.GREEN);
Toast.makeText(MainActivity, "Credit: Johnmacrocraft!", 1).show();
block = true;
}
if(block == false){
button8.setTextColor(Color.RED);

block = false;
}
                }
            }));
            cheatLayout.addView(button8);
	    
	    var button9 = new Button(MainActivity);
button9.setText("Tap spam");
button9.setTextColor(Color.RED);
if(tapspam==true)button9.setTextColor(Color.GREEN);
            button9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tapspam?tapspam=false:tapspam=true;
button9.setText("Tap spam");
if(tapspam == true){
button9.setTextColor(Color.GREEN);
spa();
tapspam = true;
}
if(tapspam == false){
button8.setTextColor(Color.RED);

tapspam = false;
}
                }
            }));
            cheatLayout.addView(button9);
            
            function spa() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
spa = new android.widget.PopupWindow();
var Layer6 = new android.widget.LinearLayout(ctx);
var mm = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter text for spam");
Dialog.setContentView(Layer6);

Layer6.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer6.addView(mm);
Layer6.addView(Exit);

mm.setText("AlphaHack!");
Exit.setText("Spam");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
text =mm.getText();
Dialog.dismiss();
if(autospam2==true)autospam = true;
}
});

spa.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
spa.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
spa.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("Spam dialog error:"+e);
}
}});
}
            
            var button10 = new Button(MainActivity);
button10.setText("Tap destroy");
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
            cheatLayout.addView(button10);
            
            var button11 = new Button(MainActivity);
button11.setText("Chest ESP");
button11.setTextColor(Color.RED);
if(chestesp==true)button11.setTextColor(Color.GREEN);
            button11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             chestesp?chestesp=false:chestesp=true;
button11.setText("Chest ESP");
if(chestesp == true){
button11.setTextColor(Color.GREEN);
Toast.makeText(MainActivity, "Credit: Vertex Client team!", 1).show();
chestesp = true;
}
if(chestesp == false){
button11.setTextColor(Color.RED);

chestesp = false;
}
                }
            }));
            cheatLayout.addView(button11);
            
var button12 = new Button(MainActivity);
button12.setText("Auto spam");
button12.setTextColor(Color.RED);
if(autospam2==true)button12.setTextColor(Color.GREEN);
            button12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             autospam2?autospam2=false:autospam2=true;
button12.setText("Auto spam");
if(autospam2== true){
button12.setTextColor(Color.GREEN);
spa();
autospam2= true;
}
if(autospam2== false){
button12.setTextColor(Color.RED);
autospam = false;
autospam2= false;
}
                }
            }));
            cheatLayout.addView(button12);
            
            var button13 = new Button(MainActivity);
button13.setText("Auto destroy");
button13.setTextColor(Color.RED);
if(autodestroy2==true)button12.setTextColor(Color.GREEN);
            button13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             autodestroy2?autodestroy2=false:autodestroy2=true;
button13.setText("Auto destroy");
if(autodestroy2 == true){
button13.setTextColor(Color.GREEN);
dig1();
autodestroy2 = true;
}
if(autodestroy2 == false){
button13.setTextColor(Color.RED);
if(autodestroy==true)autodestroy = false;
if(extraj==true)extraj = false;
autodestroy2 = false;
}
                }
            }));
            cheatLayout.addView(button13);
            
            function dig1() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
digg = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var select1 = new android.widget.Button(ctx);
var select2 = new android.widget.Button(ctx);
var select3 = new android.widget.Button(ctx);
var ddf = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);
 
Dialog.setTitle("Select");
Dialog.setContentView(Layer);
 
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
 
Layer.addView(select1);
Layer.addView(select2);
Layer.addView(Exit);
 
            select1.setText("1 Block");
            select1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage(client + "§7Face a block to see!");
 autodestroy = true;
 Dialog.dismiss();
showMenuBtn();
                }
            }));
             
            select2.setText("More than 1 Block");
            select2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage(client + "§7Face a block to see!");
extraj = true;
Dialog.dismiss();
showMenuBtn();
                }
            }));
 
digg.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
digg.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
digg.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("Error :"+e);
}
}});
}
            
            var taptoid = new Button(MainActivity);
taptoid.setText("Tap block for ID");
taptoid.setTextColor(Color.RED);
if(tapid==true)taptoid.setTextColor(Color.GREEN);
            taptoid.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tapid?tapid=false:tapid=true;
taptoid.setText("Tap block for ID");
if(tapid == true){
taptoid.setTextColor(Color.GREEN);

tapid = true;
}
if(tapid == false){
taptoid.setTextColor(Color.RED);

taptoid = false;
}
                }
            }));
            cheatLayout.addView(taptoid);
            
            var kjump = new android.widget.Button(ctx);
            kjump.setText("Higher jumps: "+(jump?"on":"off"));
            kjump.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
jump?jump=false:jump=true;
kjump.setText("Higher jumps: "+(jump?"on":"off"));
if(jump == true){
clientMessage(client + "§7");
jump = true;
}
if(jump == false){
clientMessage(client + "§7");
jump = false;
                }
}
            }));
            cheatLayout.addView(kjump);
            
            var nowall = new android.widget.Button(ctx);
            nowall.setText("No clip: "+(noclip?"on":"off"));
            nowall.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
noclip?noclip=false:noclip=true;
nowall.setText("No clip: "+(noclip?"on":"off"));
if(noclip == true){
clientMessage(client + "§7No clip / walk through walls on");

Block.setShape(4, null, null, null, null, null, null);
Block.setShape(5, null, null, null, null, null, null);
Block.setShape(17, null, null, null, null, null, null);
Block.setShape(3, null, null, null, null, null, null);

Block.setShape(24, null, null, null, null, null, null);
Block.setShape(3, null, null, null, null, null, null);
Block.setShape(41, null, null, null, null, null, null);
Block.setShape(42, null, null, null, null, null, null);
Block.setShape(45, null, null, null, null, null, null);
Block.setShape(49, null, null, null, null, null, null);
Block.setShape(48, null, null, null, null, null, null);
Block.setShape(47, null, null, null, null, null, null);

Block.setShape(57, null, null, null, null, null, null);
Block.setShape(8, null, null, null, null, null, null);
Block.setShape(98, null, null, null, null, null, null);
Block.setShape(1, null, null, null, null, null, null);
Block.setShape(112, null, null, null, null, null, null);
Block.setShape(133, null, null, null, null, null, null);
Block.setShape(7, null, null, null, null, null, null);

Block.setShape(155, null, null, null, null, null, null);
Block.setShape(179, null, null, null, null, null, null);
Block.setShape(188, null, null, null, null, null, null);
Block.setShape(189, null, null, null, null, null, null);
Block.setShape(19, null, null, null, null, null, null);
Block.setShape(191, null, null, null, null, null, null);
Block.setShape(192, null, null, null, null, null, null);

noclip = true;
}
if(noclip == false){
clientMessage(client + "§7No clip / walk through walls off");

Block.setShape(4, 0, 0, 0, 1, 1, 1);
Block.setShape(5, 0, 0, 0, 1, 1, 1);
Block.setShape(17, 0, 0, 0, 1, 1, 1);
Block.setShape(3, 0, 0, 0, 1, 1, 1);

Block.setShape(24, 0, 0, 0, 1, 1, 1);
Block.setShape(21, 0, 0, 0, 1, 1, 1);
Block.setShape(41, 0, 0, 0, 1, 1, 1);
Block.setShape(42, 0, 0, 0, 1, 1, 1);
Block.setShape(45, 0, 0, 0, 1, 1, 1);
Block.setShape(49, 0, 0, 0, 1, 1, 1);
Block.setShape(48, 0, 0, 0, 1, 1, 1);
Block.setShape(47, 0, 0, 0, 1, 1, 1);

Block.setShape(57, 0, 0, 0, 1, 1, 1);
Block.setShape(81, 0, 0, 0, 1, 1, 1);
Block.setShape(98, 0, 0, 0, 1, 1, 1);
Block.setShape(111, 0, 0, 0, 1, 1, 1);
Block.setShape(112, 0, 0, 0, 1, 1, 1);
Block.setShape(133, 0, 0, 0, 1, 1, 1);
Block.setShape(7, 0, 0, 0, 1, 1, 1);

Block.setShape(155, 0, 0, 0, 1, 1, 1);
Block.setShape(179, 0, 0, 0, 1, 1, 1);
Block.setShape(188, 0, 0, 0, 1, 1, 1);
Block.setShape(189, 0, 0, 0, 1, 1, 1);
Block.setShape(191, 0, 0, 0, 1, 1, 1);
Block.setShape(191, 0, 0, 0, 1, 1, 1);
Block.setShape(192, 0, 0, 0, 1, 1, 1);

noclip = false;
                }
}
            }));
            cheatLayout.addView(nowall);
            
            var online = new Button(MainActivity);
online.setText("Players online");
            online.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
var b_x023489a = Server.getAllPlayerNames();
for (var i = 0; i < b_x023489a.length; i++) {
  clientMessage(client + "Players online: \n"+b_x023489a[i]);
}
                }
            }));
            cheatLayout.addView(online);
            
            var barrier = new Button(MainActivity);
barrier.setText("Nullify barriers");
            barrier.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
Block.setShape(0, null, null, null, null, null, null);
Block.setShape(65, null, null, null, null, null, null);
Block.setShape(95, null, null, null, null, null, null);
Block.setShape(255, null, null, null, null, null, null);
clientMessage(client + "Any barriers have been nullifed.");
                }
            }));
            cheatLayout.addView(barrier);
            
            var ecd = new Button(ctx);
            ecd.setText("Easy commands");       
            ecd.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
             cmd_menu();
             cheat.dismiss();
                }
            }));
            cheatLayout.addView(ecd);
            
            function cmd_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var cmdLayout = new LinearLayout(ctx);
            var cmdScroll = new ScrollView(ctx);
            var cmdLayout1 = new LinearLayout(ctx);
            cmdLayout.setOrientation(1);
            cmdLayout1.setOrientation(1);
            cmdScroll.addView(cmdLayout);
            cmdLayout1.addView(cmdScroll);
            
            var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             cmd.dismiss();
             showMenuBtn();
			}
		});
		cmdLayout.addView(exit);
		
		var cmd1 = new android.widget.Button(ctx);
		cmd1.setText("Creative");
		cmd1.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				Server.sendChat("/gamemode 1");
				Server.sendChat("/gamemode creative");
				Toast.makeText(ctx, "Command has been sent.", 1).show();
			}
		});
		cmdLayout.addView(cmd1);
		
		var cmd2 = new android.widget.Button(ctx);
		cmd2.setText("Survival");
		cmd2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				Server.sendChat("/gamemode 0");
				Server.sendChat("/gamemode survival");
				Toast.makeText(ctx, "Command has been sent.", 1).show();
			}
		});
		cmdLayout.addView(cmd2);
		
		var cmd3 = new android.widget.Button(ctx);
		cmd3.setText("Adventure");
		cmd3.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				Server.sendChat("/gamemode 2");
				Server.sendChat("/gamemode adventure");
				Toast.makeText(ctx, "Command has been sent.", 1).show();
			}
		});
		cmdLayout.addView(cmd3);
		
		var cmd4 = new android.widget.Button(ctx);
		cmd4.setText("Spectator");
		cmd4.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				Server.sendChat("/gamemode 3");
				Server.sendChat("/gamemode spectator");
				Toast.makeText(ctx, "Command has been sent.", 1).show();
			}
		});
		cmdLayout.addView(cmd4);
		
		var cmd5 = new android.widget.Button(ctx);
		cmd5.setText("List");
		cmd5.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				Server.sendChat("/list");
				Toast.makeText(ctx, "Command has been sent.", 1).show();
			}
		});
		cmdLayout.addView(cmd5);
		
	    var opp = new Button(ctx);
            opp.setText("OP perm (Not hack)");        
            opp.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
Server.sendChat("/setuperm " + Player.getName(Player.getEntity()) + space + perm);
Server.sendChat("/setuperm " + Player.getName(Player.getEntity()) + space + perm);
clientMessage(client + "gives you permanent op if you were op before, if server closes you can op yourself instead of losing it after server closes.");
                }
            }));
            cmdLayout.addView(opp);
            
            cmd = new PopupWindow(cmdLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            cmd.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
cmdLayout1.setBackgroundDrawable(bg);
cmdLayout1.setPadding(20,0,20,0);
            cmd.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

            cheat = new PopupWindow(cheatLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            if(default==true)cheat.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default==false)cheat.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
cheatLayout1.setBackgroundDrawable(bg);
cheatLayout1.setPadding(20,0,20,0);
            cheat.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}
            
var mods = new android.widget.Button(ctx);
mods.setText("Single player mods");
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
		
		var endHack = new Button(MainActivity);
endHack.setText("End portal");
            endHack.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
				/*front*/
				Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ() -4, 120, 4);
				Level.setTile(getPlayerX() -1, getPlayerY() -1, getPlayerZ() -4, 120, 4);
				Level.setTile(getPlayerX() +1, getPlayerY() -1, getPlayerZ() -4, 120, 4);
				Level.setTile(getPlayerX() -2, getPlayerY() -1, getPlayerZ() -4, 0, 0);
				Level.setTile(getPlayerX() +2, getPlayerY() -1, getPlayerZ() -4, 0, 0);
				/*middle
				Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ() -5, 209, 0);
				Level.setTile(getPlayerX() -1, getPlayerY() -1, getPlayerZ() -5, 209, 0);
				Level.setTile(getPlayerX() +1, getPlayerY() -1, getPlayerZ() -5, 209, 0);
				Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ() -6, 209, 0);
				Level.setTile(getPlayerX() -1, getPlayerY() -1, getPlayerZ() -6, 209, 0);
				Level.setTile(getPlayerX() +1, getPlayerY() -1, getPlayerZ() -6, 209, 0);
				Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ() -7, 209, 0);
				Level.setTile(getPlayerX() -1, getPlayerY() -1, getPlayerZ() -7, 209, 0);
				Level.setTile(getPlayerX() +1, getPlayerY() -1, getPlayerZ() -7, 209, 0);*/
				/*back*/
				Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ() -8, 120, 4);
				Level.setTile(getPlayerX() -1, getPlayerY() -1, getPlayerZ() -8, 120, 4);
				Level.setTile(getPlayerX() +1, getPlayerY() -1, getPlayerZ() -8, 120, 4);
				Level.setTile(getPlayerX() -2, getPlayerY() -1, getPlayerZ() -8, 0, 0);
				Level.setTile(getPlayerX() +2, getPlayerY() -1, getPlayerZ() -8, 0, 0);
				/*sides*/
				Level.setTile(getPlayerX() -2, getPlayerY() -1, getPlayerZ() -5, 120, 4);
				Level.setTile(getPlayerX() +2, getPlayerY() -1, getPlayerZ() -5, 120, 4);
				Level.setTile(getPlayerX() -2, getPlayerY() -1, getPlayerZ() -6, 120, 4);
				Level.setTile(getPlayerX() +2, getPlayerY() -1, getPlayerZ() -6, 120, 4);
				Level.setTile(getPlayerX() -2, getPlayerY() -1, getPlayerZ() -7, 120, 4);
				Level.setTile(getPlayerX() +2, getPlayerY() -1, getPlayerZ() -7, 120, 4);
				}
            }));
            modLayout.addView(endHack);
		
		var portal = new Button(MainActivity);
portal.setText("Nether portal");
            portal.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                new9();
                }
            }));
            modLayout.addView(portal);
            
            function new9() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
fov = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var select1 = new android.widget.Button(ctx);
var select2 = new android.widget.Button(ctx);
var Dialog = new android.app.Dialog(ctx);
//var Exit = new android.widget.Button(ctx);
 
Dialog.setTitle("Select");
Dialog.setContentView(Layer);
 
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
 
Layer.addView(select1);

Layer.addView(select2);

//Layer.addView(Exit);
 
            select1.setText("Use nether block");
            select1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
useNether = true;
if(useNether){
                Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() +1, getPlayerY() -1, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() -1, getPlayerY() -1, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() +2, getPlayerY() -1, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() -2, getPlayerY() -1, getPlayerZ() -3, 49, 0);
              
                Level.setTile(getPlayerX() +2, getPlayerY() +1, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() -2, getPlayerY() +1, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() +2, getPlayerY() +2, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() -2, getPlayerY() +2, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() +2, getPlayerY() +3, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() -2, getPlayerY() +3, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() +2, getPlayerY() +4, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() -2, getPlayerY() +4, getPlayerZ() -3, 49, 0);
                
                Level.setTile(getPlayerX(), getPlayerY() +4, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() +1, getPlayerY() +4, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() -1, getPlayerY() +4, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() +2, getPlayerY(), getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() -2, getPlayerY(), getPlayerZ() -3, 49, 0);
                
                Level.setTile(getPlayerX(), getPlayerY() +1, getPlayerZ() -3, 90, 0);
                Level.setTile(getPlayerX() +1, getPlayerY() +1, getPlayerZ() -3, 90, 0);
                Level.setTile(getPlayerX() -1, getPlayerY() +1, getPlayerZ() -3, 90, 0);
                
                 Level.setTile(getPlayerX(), getPlayerY(), getPlayerZ() -3, 90, 0);
                Level.setTile(getPlayerX() +1, getPlayerY(), getPlayerZ() -3, 90, 0);
                Level.setTile(getPlayerX() -1, getPlayerY(), getPlayerZ() -3, 90, 0);
                
                Level.setTile(getPlayerX(), getPlayerY() +2, getPlayerZ() -3, 90, 0);
                Level.setTile(getPlayerX() +1, getPlayerY() +2, getPlayerZ() -3, 90, 0);
                Level.setTile(getPlayerX() -1, getPlayerY() +2, getPlayerZ() -3, 90, 0);
                
                Level.setTile(getPlayerX(), getPlayerY() +3, getPlayerZ() -3, 90, 0);
                Level.setTile(getPlayerX() +1, getPlayerY() +3, getPlayerZ() -3, 90, 0);
                Level.setTile(getPlayerX() -1, getPlayerY() +3, getPlayerZ() -3, 90, 0);
                }
Dialog.dismiss();
showMenuBtn();
                }
            }));
             
            select2.setText("Use fire block");
            select2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
useFire = true;
if(useFire){
                Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() +1, getPlayerY() -1, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() -1, getPlayerY() -1, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() +2, getPlayerY() -1, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() -2, getPlayerY() -1, getPlayerZ() -3, 49, 0);
              
                Level.setTile(getPlayerX() +2, getPlayerY() +1, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() -2, getPlayerY() +1, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() +2, getPlayerY() +2, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() -2, getPlayerY() +2, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() +2, getPlayerY() +3, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() -2, getPlayerY() +3, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() +2, getPlayerY() +4, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() -2, getPlayerY() +4, getPlayerZ() -3, 49, 0);
                
                Level.setTile(getPlayerX(), getPlayerY() +4, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() +1, getPlayerY() +4, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() -1, getPlayerY() +4, getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() +2, getPlayerY(), getPlayerZ() -3, 49, 0);
                Level.setTile(getPlayerX() -2, getPlayerY(), getPlayerZ() -3, 49, 0);
                
                Level.setTile(getPlayerX(), getPlayerY() +1, getPlayerZ() -3, 51, 0);
                }
Dialog.dismiss();
showMenuBtn();
                }
            }));

new9.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new9.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new9.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("error: "+e);
}
}});
}
		
		var button13 = new Button(MainActivity);
button13.setText("Sugar farm");
            button13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ(), 8, 0);
             Level.setTile(getPlayerX() -1, getPlayerY() -1, getPlayerZ(), 12, 0);
             Level.setTile(getPlayerX() +1, getPlayerY() -1, getPlayerZ(), 12, 0);
             Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ() +1, 12, 0);
             Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ() -1, 12, 0);
             Level.setTile(getPlayerX() -1, getPlayerY() +1, getPlayerZ(), 83, 0);
             Level.setTile(getPlayerX() +1, getPlayerY() +1, getPlayerZ(), 83, 0);
             Level.setTile(getPlayerX(), getPlayerY() +1, getPlayerZ() +1, 83, 0);
             Level.setTile(getPlayerX(), getPlayerY() +1, getPlayerZ() -1, 83, 0);
             Level.setTile(getPlayerX() -1, getPlayerY() +2, getPlayerZ(), 83, 0);
             Level.setTile(getPlayerX() +1, getPlayerY() +2, getPlayerZ(), 83, 0);
             Level.setTile(getPlayerX(), getPlayerY() +2, getPlayerZ() +1, 83, 0);
             Level.setTile(getPlayerX(), getPlayerY() +2, getPlayerZ() -1, 83, 0);
                }
            }));
            modLayout.addView(button13);
            
            var button14 = new Button(MainActivity);
button14.setText("Wheat farm");
            button14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ(), 8, 0);
             Level.setTile(getPlayerX() -1, getPlayerY() -1, getPlayerZ(), 60, 0);
             Level.setTile(getPlayerX() +1, getPlayerY() -1, getPlayerZ(), 60, 0);
             Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ() +1, 60, 0);
             Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ() -1, 60, 0);
             Level.setTile(getPlayerX() -1, getPlayerY() +1, getPlayerZ(), 59, 0);
             Level.setTile(getPlayerX() +1, getPlayerY() +1, getPlayerZ(), 59, 0);
             Level.setTile(getPlayerX(), getPlayerY() +1, getPlayerZ() +1, 59, 0);
             Level.setTile(getPlayerX(), getPlayerY() +1, getPlayerZ() -1, 59, 0);
                }
            }));
            modLayout.addView(button14);
            
            var anti2void = new Button(MainActivity);
anti2void.setText("Anti void");
anti2void.setTextColor(Color.RED);
if(antivoid==true)anti2void.setTextColor(Color.GREEN);
            anti2void.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             antivoid?antivoid=false:antivoid=true;
anti2void.setText("Anti void");
if(antivoid == true){
anti2void.setTextColor(Color.GREEN);

antivoid = true;
}
if(antivoid == false){
anti2void.setTextColor(Color.RED);

antivoid = false;
}
                }
            }));
            modLayout.addView(anti2void);

var df = new android.widget.Button(ctx);
      df.setText("Disable up/down fly: "+(nofly?"on":"off"));
		df.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				nofly?nofly=false:nofly=true;
df.setText("Disable up/down fly: "+(nofly?"on":"off"));
if(nofly == true){
clientMessage(client + "§7No up/down fly is on");
Player.setCanFly(false);

nofly = true;
}
if(nofly == false){
clientMessage(client + "§7No up/down fly is off");
Player.setCanFly(true);

nofly = false;
 }
			}
		});
		modLayout.addView(df);

var es = new Button(ctx);
            es.setText("Entity spawner");        
            es.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    new3(); 
                }
            }));
            modLayout.addView(es);
 
function new3() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
fov = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var select1 = new android.widget.Button(ctx);
var select2 = new android.widget.Button(ctx);
var select3 = new android.widget.Button(ctx);
var select4 = new android.widget.Button(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);
 
Dialog.setTitle("Select");
Dialog.setContentView(Layer);
 
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
 
Layer.addView(select1);

Layer.addView(select2);

Layer.addView(select3);

Layer.addView(select4);

Layer.addView(Exit);
 
            select1.setText("Lightning");
            select1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 lightning = true;
if(primedtnt==true)primedtnt = false;
if(arrow==true)arrow = false;
if(exporb==true)exporb = false;
Dialog.dismiss();
showMenuBtn();
                }
            }));
             
            select2.setText("Primed tnt");
            select2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 primedtnt = true;
if(lightning==true)lightning = false;
if(arrow==true)arrow = false;
if(exporb==true)exporb = false;
Dialog.dismiss();
showMenuBtn();
                }
            }));
			
			select3.setText("Arrow");
            select3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 arrow = true;
if(lightning==true)lightning = false;
if(primedtnt==true)primedtnt = false;
if(exporb==true)exporb = false;
Dialog.dismiss();
showMenuBtn();
                }
            }));
			
			select4.setText("Exp orb");
            select4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 exporb = true;
if(lightning==true)lightning = false;
if(primedtnt==true)primedtnt = false;
if(arrow==true)arrow = false;
Dialog.dismiss();
showMenuBtn();
                }
            }));
Exit.setText("Off");
 
Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
 
 exporb = false;
 lightning = false;
 arrow = false;
 primedtnt = false;
Dialog.dismiss();
showMenuBtn();
}
});
 
new3.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new3.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The new Dialog Is Malfunctioning:"+e);
}
}});
}

var cc = new Button(ctx);
            cc.setText("Clear your chat");        
            cc.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){

clientMessage(" " + "\n" + " ");

clientMessage(" " + "\n" + " ");

clientMessage(" " + "\n" + " ");

clientMessage(" " + "\n" + " ");

clientMessage(" " + "\n" + " ");

clientMessage(" " + "\n" + " ");

clientMessage(" " + "\n" + " ");

clientMessage(" " + "\n" + " ");
                }
            }));
            modLayout.addView(cc);

var me = new Button(ctx);
            me.setText("My username / nametag");
            me.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
clientMessage(client + "Username is: " + Player.getName(Player.getEntity()))
                }
            }));
            modLayout.addView(me);

var d = new Button(ctx);
            d.setText("Difficulty");        
            d.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
  clientMessage(client + "Difficulty: " + Level.getDifficulty());
                }
            }));
            modLayout.addView(d);

var dh = new Button(ctx);
            dh.setText("Max player health");        
            dh.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                     clientMessage(client + "Max health: " + Entity.getMaxHealth(getPlayerEnt()));
                }
            }));
            modLayout.addView(dh);

var rr = new android.widget.Button(ctx);
rr.setText("Reactor time mode: "+(remode?"on":"off"));
rr.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
remode?remode=false:remode=true;
rr.setText("Reactor time mode: "+(remode?"on":"off"));
if(remode == true){
clientMessage(client + "§7Nether reactor time on");
 setNightMode(true);

remode = true
}
if(remode == false){
clientMessage(client + "§7Nether reactor time off");
setNightMode(false);

remode = false
}
}
}));
modLayout.addView(rr);

var cs = new android.widget.Button(ctx);
      cs.setText("Sign Editor: "+(deadchat?"on":"off"));
		cs.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				deadchat?deadchat=false:deadchat=true;
cs.setText("Sign Editor: "+(deadchat?"on":"off"));
if(deadchat == true){
clientMessage(client + "§7Sign editor is on");

deadchat = true;
}
if(deadchat == false){
clientMessage(client + "§7Sign editor is off");

deadchat = false;
}
			}
		});
		modLayout.addView(cs);

var killme = new Button(ctx);
            killme.setText("Kill yourself");        
            killme.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
Player.setHealth(0);
Player.setHealth(0);
                }
            }));
            modLayout.addView(killme);

var hea = new android.widget.Button(ctx);
      hea.setText("Heal hearts");
		hea.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             Player.setHealth(20);
             clientMessage(client + "§7Health healed");
			}
		});
		modLayout.addView(hea);

var hun = new android.widget.Button(ctx);
      hun.setText("Heal hunger");
		hun.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             Player.setHunger(25);
             clientMessage(client + "§7Hunger healed");
			}
		});
		modLayout.addView(hun);

var mm = new android.widget.Button(ctx);
      mm.setText("Infinite health: "+(stackheart?"on":"off"));
		mm.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         stackheart?stackheart=false:stackheart=true;
mm.setText("Infinite health: "+(stackheart?"on":"off"));
if(stackheart == true){
stackheart = true;
clientMessage(client + "§7infinite health is on");
}
if(stackheart == false){
clientMessage(client + "§7infinite health is off");
Player.setHealth(20);
stackheart = false;
 }
			}
		});
		modLayout.addView(mm);

var mm2 = new android.widget.Button(ctx);
mm2.setText("Infinite hunger: "+(infhun?"on":"off"));
mm2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
infhun?infhun=false:infhun=true;
mm2.setText("Infinite hunger: "+(infhun?"on":"off"));
if(infhun == true){
clientMessage(client + "§7infinite hunger is on");
}
if(infhun == false){
clientMessage(client + "§7infinite hunger is off");
Player.setHunger(20);
                }
}
            }));
            modLayout.addView(mm2);

var zm = new android.widget.Button(ctx);
      zm.setText("1 hit kill: "+(instakilled?"on":"off"));
		zm.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         instakilled?instakilled=false:instakilled=true;
zm.setText("1 hit kill: "+(instakilled?"on":"off"));
if(instakilled == true){
instakilled = true;
clientMessage(client + "§7Insta kill is on");
}
if(instakilled == false){
clientMessage(client + "§7Insta kill is off");
instakilled = false;
                }
			}
		});
		modLayout.addView(zm);

var zmm = new android.widget.Button(ctx);
      zmm.setText("Ride mobs: "+(saddle?"on":"off"));
		zmm.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             saddle?saddle=false:saddle=true;
zmm.setText("Ride mobs: "+(saddle?"on":"off"));
if(saddle == true){
clientMessage(client + "§7Ride mobs is on");
clientMessage(client + "§cTap mob to ride,\n§cJump to get off mob.");
saddle = true;
}
if(saddle == false){
clientMessage(client + "§7Ride mobs is off");
saddle = false;
                }
			}
		});
		modLayout.addView(zmm);

var zmmm = new android.widget.Button(ctx);
      zmmm.setText("Instant break: "+(instabreak?"on":"off"));
		zmmm.setOnClickListener(new android.view.View.OnClickListener() {
		 onClick: function(v){
 instabreak?instabreak=false:instabreak=true;
zmmm.setText("Instant break: "+(instabreak?"on":"off"));
if(instabreak == true){
instaDestroy();
clientMessage(client + "§7Instant break is on");
}
if(instabreak == false){
clientMessage(client + "§7Instant break is off");
defaultDestroy();
                }
			}
		});
		modLayout.addView(zmmm);

var f = new android.widget.Button(ctx);
            f.setText("Fly in survival: "+(fch?"on":"off"));
            f.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
fch?fch=false:fch=true;
f.setText("Fly in survival: "+(fch?"on":"off"));
if(fch == true){
Player.setCanFly(1);
clientMessage(client + "§7Fly in survival is on");
}
if(fch == false){
clientMessage(client + "§7Fly in survival is off");
Player.setCanFly(0);
                }
}
            }));
            modLayout.addView(f);

var g = new android.widget.Button(ctx);
            g.setText("Grief: "+(grief?"on":"off"));
            g.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
grief?grief=false:grief=true;
g.setText("Grief: "+(grief?"on":"off"));
if(grief == true){
new2();
}
if(grief == false){
clientMessage(client + "§7You stopped griefing!");
grief = false;
                }
}
            }));
            modLayout.addView(g);

function new2() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
new2 = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var select1 = new android.widget.Button(ctx);
var select2 = new android.widget.Button(ctx);
var select3 = new android.widget.Button(ctx);
var ddf = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);
 
Dialog.setTitle("Select");
Dialog.setContentView(Layer);
 
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
 
Layer.addView(select1);
Layer.addView(select2);
//Layer.addView(select3);
Layer.addView(ddf);
Layer.addView(Exit);
 
            select1.setText("Use lava?");
            select1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage(client + "§7Face a block to see!");
 vid = 11;
grief = true;
                }
            }));
             
            select2.setText("Use water?");
            select2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage(client + "§7Face a block to see!");
 vid = 8;
grief = true;
                }
            }));
			
			ddf.setText("");
ddf.setHint("Pick item ID");
			
			
Exit.setText("done");
 
Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
 
 vid =ddf.getText();
 grief = true;
Dialog.dismiss();
showMenuBtn();
}
});
 
new2.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new2.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("Error :"+e);
}
}});
}

var kl = new android.widget.Button(ctx);
            kl.setText("KillAura: "+(killaura?"on":"off"));
            kl.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
killaura?killaura=false:killaura=true;
kl.setText("KillAura: "+(killaura?"on":"off"));
if(killaura == true){
clientMessage(client + "§7KillAura on");
killaura = true;
}
if(killaura == false){
clientMessage(client + "§7KillAura off");
killaura = false;
                }
}
            }));
            modLayout.addView(kl);

var kl2 = new android.widget.Button(ctx);
            kl2.setText("FreezeAura: "+(killfaura?"on":"off"));
            kl2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
killfaura?killfaura=false:killfaura=true;
kl2.setText("FreezeAura: "+(killfaura?"on":"off"));
if(killfaura == true){
clientMessage(client + "§7FreezeAura on");
killfaura = true;
}
if(killfaura == false){
clientMessage(client + "§7FreezeAura off");
killfaura = false;
                }
}
            }));
            modLayout.addView(kl2);

var ui = new android.widget.Button(ctx);
            ui.setText("Ui Layout Viewer: "+(uirender?"on":"off"));
            ui.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
uirender?uirender=false:uirender=true;
ui.setText("Ui Layout Viewer: "+(uirender?"on":"off"));
if(uirender == true){
ModPE.setUiRenderDebug(true);
}
if(uirender == false){
ModPE.setUiRenderDebug(false);
                }
}
            }));
            modLayout.addView(ui);

var attd = new Button(ctx);
            attd.setText("Set difficulty");        
            attd.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
named(); 

                }
            }));
            modLayout.addView(attd);

function named() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(ctx);
var ntd = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter difficulty");
Dialog.setContentView(Layer8);

Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer8.addView(ntd);
Layer8.addView(Exit);

ntd.setText("");
ntd.setHint("0 = peaceful, 1 = normal, 2 = medium, 3 = hard");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
nametd =ntd.getText();
Dialog.dismiss();
setdiff();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The setdiff Dialog Is Malfunctioning:"+e);
}
}});
}

function setdiff(){
Level.setDifficulty(nametd);
}

var fovy = new Button(ctx);
            fovy.setText("Fov editor");        
            fovy.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 

fov(); 

zmenu.dismiss();
                }
            }));
            modLayout.addView(fovy);

var att = new Button(ctx);
            att.setText("Set nametag");        
            att.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
nameMe(); 

                }
            }));
            modLayout.addView(att);

function nameMe() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(ctx);
var nt = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter nickname");
Dialog.setContentView(Layer8);

Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer8.addView(nt);
Layer8.addView(Exit);

nt.setText("");
nt.setHint("New nickname");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
nametgg =nt.getText();
Dialog.dismiss();
setName();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The setName Dialog Is Malfunctioning:"+e);
}
}});
}

function setName(){
Entity.setNameTag(Player.getEntity(), nametgg);
Server.sendChat("/nick set " + nametgg);
}

var fp = new android.widget.Button(ctx);
            fp.setText("Fire punch: "+(firepunch?"on":"off"));
            fp.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
firepunch?firepunch=false:firepunch=true;
fp.setText("Fire punch: "+(firepunch?"on":"off"));
if(firepunch == true){
clientMessage(client + "§7Falcon punch! on");
}
if(firepunch == false){
clientMessage(client + "§7Falcon punch! off");
                }
}
            }));
            modLayout.addView(fp);

var sbn = new Button(ctx);
            sbn.setText("Set block brightness");        
            sbn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
block1(); 

                }
            }));
            modLayout.addView(sbn);

function block1() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(ctx);
var bd = new android.widget.EditText(ctx);
var bn = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Set block light");
Dialog.setContentView(Layer8);

Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer8.addView(bn);
Layer8.addView(bd);
Layer8.addView(Exit);

bd.setText("");
bd.setHint("Block ID");
bn.setText("");
bn.setHint("New light level");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
idm =bd.getText();
levelm =bn.getText();
Dialog.dismiss();
setLight();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The block L Dialog Is Malfunctioning:"+e);
}
}});
}

function setLight(){
Block.setLightLevel(idm, levelm);
}

var sbr = new Button(ctx);
            sbr.setText("Set block Resistance");        
            sbr.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
block2(); 

                }
            }));
            modLayout.addView(sbr);

function block2() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(ctx);
var bi = new android.widget.EditText(ctx);
var br = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Set block resistance");
Dialog.setContentView(Layer8);

Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer8.addView(bi);
Layer8.addView(br);
Layer8.addView(Exit);

bi.setText("");
bi.setHint("Block ID");
br.setText("");
br.setHint("Explosion resistance");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
idb =bi.getText();
resis =br.getText();
Dialog.dismiss();
setResis();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The block R Dialog Is Malfunctioning:"+e);
}
}});
}

function setResis(){
Block.setExplosionResistance(idb, resis);
}

/*var hst = new android.widget.Button(ctx);
           hst.setText("Health status: "+(somd?"on":"off"));
            hst.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
somd?somd=false:somd=true;
hst.setText("Health status: "+(somed?"on":"off"));
if(somd == true){
clientMessage(client + "§7Health status is showing"); 

somd = true
}
if(somd == false){
clientMessage(client + "§7Health status off");

somd = false
                }
}
            }));
            modLayout.addView(hst);*/

var saysome = new android.widget.Button(ctx);
            saysome.setText("BurnAura: "+(killdaura?"on":"off"));
            saysome.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
killdaura?killdaura=false:killdaura=true;
saysome.setText("BurnAura: "+(killdaura?"on":"off"));
if(killdaura == true){
clientMessage(client + "§7BurnAura on, Thanks to the vertex team for coming up with the idea");
killdaura = true;
}
if(killdaura == false){
clientMessage(client + "§7BurnAura off");
killdaura = false;
                }
}
            }));
            modLayout.addView(saysome);

var nh = new Button(ctx);
            nh.setText("Add more hearts");        
            nh.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
newhealth(); 

                }
            }));
            modLayout.addView(nh);

function newhealth() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(ctx);
var enh = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter new hearts");
Dialog.setContentView(Layer8);

Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer8.addView(enh);
Layer8.addView(Exit);

enh.setText("");
enh.setHint("Half heart number here");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
newheart =enh.getText();
Dialog.dismiss();
sethealth();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The set health Dialog Is Malfunctioning:"+e);
}
}});
}

function sethealth(){
Entity.setMaxHealth(getPlayerEnt(), newheart);
}

var horse = new android.widget.Button(ctx);
      horse.setText("Set mob health: "+(horsehealth?"on":"off"));
		horse.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
			horsehealth?horsehealth=false:horsehealth=true;
horse.setText("Set mob health: "+(horsehealth?"on":"off"));
if(horsehealth == true){
horsehealth1();
horsehealth = true;
}
if(horsehealth == false){
clientMessage(client + "§7Set health is off");

horsehealth = false;
 }
			}
		});
		modLayout.addView(horse);
            
function horsehealth1() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer10 = new android.widget.LinearLayout(ctx);
var eha = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter new hearts");
Dialog.setContentView(Layer10);

Layer10.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer10.addView(eha);
Layer10.addView(Exit);

eha.setText("");
eha.setHint("Hearts number here");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
horseheart =eha.getText();
Dialog.dismiss();
clientMessage(client + "Tap mob to change health.");
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The set health Dialog Is Malfunctioning:"+e);
}
}});
}

var gage = new android.widget.Button(ctx);
      gage.setText("Get mob age: "+(getage?"on":"off"));
		gage.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
			getage?getage=false:getage=true;
gage.setText("Get mob age: "+(getage?"on":"off"));
if(getage == true){
clientMessage(client + "§7Tap mob to get age");

getage = true;
}
if(getage == false){
clientMessage(client + "§7Get age is off");

getage = false;
 }
			}
		});
		modLayout.addView(gage);
		
		var sage = new android.widget.Button(ctx);
      sage.setText("Set mob age: "+(setage?"on":"off"));
		sage.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
			setage?setage=false:setage=true;
sage.setText("Set mob age: "+(setage?"on":"off"));
if(setage == true){
new4();
setage = true;
}
if(setage == false){
clientMessage(client + "§7Set age is off");

setage = false;
 }
			}
		});
		modLayout.addView(sage);
		
		function new4() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
fov = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var select1 = new android.widget.Button(ctx);
var select2 = new android.widget.Button(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);
 
Dialog.setTitle("Select");
Dialog.setContentView(Layer);
 
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
 
Layer.addView(select1);
Layer.addView(select2);
//Layer.addView(Exit);
 
            select1.setText("Child");
            select1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 newage = "-2000";
 Dialog.dismiss();
showMenuBtn();
                }
            }));
             
            select2.setText("Adult");
            select2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 newage = "0";
 Dialog.dismiss();
showMenuBtn();
                }
            }));
			
Exit.setText("done");
 
Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
 
Dialog.dismiss();
showMenuBtn();
}
});
 
new3.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new3.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
new3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The new Dialog Is Malfunctioning:"+e);
}
}});
}

var laura = new android.widget.Button(ctx);
      laura.setText("LightningAura: "+(lightningaura?"on":"off"));
		laura.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
			lightningaura?lightningaura=false:lightningaura=true;
laura.setText("LightningAura: "+(lightningaura?"on":"off"));
if(lightningaura == true){
clientMessage(client + "§7LightningAura is on");

lightningaura = true;
}
if(lightningaura == false){
clientMessage(client + "§7LightningAura is off");

lightningaura = false;
 }
			}
		});
		modLayout.addView(laura);

            mod = new PopupWindow(modLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            if(default==true)mod.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default==false)mod.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
modLayout1.setBackgroundDrawable(bg);
modLayout1.setPadding(20,0,20,0);
            mod.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

var effect = new android.widget.Button(ctx);
effect.setText("Effect menu");
effect.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
effect.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             effect_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(effect);
		
		function effect_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var effectLayout = new LinearLayout(ctx);
            var effectScroll = new ScrollView(ctx);
            var effectLayout1 = new LinearLayout(ctx);
            effectLayout.setOrientation(1);
            effectLayout1.setOrientation(1);
            effectScroll.addView(effectLayout);
            effectLayout1.addView(effectScroll);
            
            var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             effect.dismiss();
             showMenuBtn();
			}
		});
		effectLayout.addView(exit);
		
		var mov = new Button(ctx);
            mov.setText("Remove all effect");
            mov.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                 //Entity.removeAllEffects(player);
Entity.removeAllEffects(getPlayerEnt());
                }
            }));
            effectLayout.addView(mov);

var e1 = new Button(ctx);
            e1.setText("saturation");
            e1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ea();
                }
            }));
            effectLayout.addView(e1);

function ea() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn1();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn1() {
Entity.addEffect(getPlayerEnt(), MobEffect.saturation, s*l, 0, false, true);
}
            
            var e2 = new Button(ctx);
            e2.setText("Absorption");
            e2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eb();
                }
            }));
            effectLayout.addView(e2);

function eb() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn2();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn2() {
Entity.addEffect(getPlayerEnt(), MobEffect.absorption, s*l, 0, false, true);
}

var e3 = new Button(ctx);
            e3.setText("Health boost");
            e3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
  ec();
                }
            }));
            effectLayout.addView(e3);

function ec() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn3();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn3() {
Entity.addEffect(getPlayerEnt(), MobEffect.healthBoost, s*l, 0, false, true);
}

var e4 = new Button(ctx);
            e4.setText("Wither");
            e4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ed();
                }
            }));
            effectLayout.addView(e4);

function ed() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn4();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn4() {
Entity.addEffect(getPlayerEnt(), MobEffect.wither, s*l, 0, false, true);
}
            
            var e5 = new Button(ctx);
            e5.setText("Poison");
            e5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ee();
                }
            }));
            effectLayout.addView(e5);

function ee() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn5();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn5() {
Entity.addEffect(getPlayerEnt(), MobEffect.poison, s*l, 0, false, true);
}

var e6 = new Button(ctx);
            e6.setText("Weakness");
            e6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    ef();
                }
            }));
            effectLayout.addView(e6);

function ef() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn6();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn6() {
Entity.addEffect(getPlayerEnt(), MobEffect.weakness, s*l, 0, false, true);
}

var e7 = new Button(ctx);
            e7.setText("Hunger");
            e7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eg()
                }
            }));
            effectLayout.addView(e7);

function eg() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn7();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn7() {
Entity.addEffect(getPlayerEnt(), MobEffect.hunger, s*l, 0, false, true);
}

var e8 = new Button(ctx);
            e8.setText("Night vision");
            e8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eh();
                }
            }));
            effectLayout.addView(e8);

function eh() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn8();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn8() {
Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, s*l, 0, false, true);
}

var e9 = new Button(ctx);
            e9.setText("Blindness");
            e9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ei();
                }
            }));
            effectLayout.addView(e9);

function ei() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn9();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn9() {
Entity.addEffect(getPlayerEnt(), MobEffect.blindness, s*l, 0, false, true);
}

var e10 = new Button(ctx);
            e10.setText("Invisibility");
            e10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 ej();
                }
            }));
            effectLayout.addView(e10);

function ej() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn10();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn10() {
Entity.addEffect(getPlayerEnt(), MobEffect.invisibility, s*l, 0, false, true);
}

var e11 = new Button(ctx);
            e11.setText("Water breathing");
            e11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ek();
                }
            }));
            effectLayout.addView(e11);

function ek() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn11();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn11() {
Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, s*l, 0, false, true);
}

var e12 = new Button(ctx);
            e12.setText("Fire resistance");
            e12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
el();
                }
            }));
            effectLayout.addView(e12);

function el() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn12();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn12() {
Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, s*l, 0, false, true);
}

var e13 = new Button(ctx);
            e13.setText("Resistance");
            e13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
em();
                }
            }));
            effectLayout.addView(e13);

function em() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn13();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn13() {
Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, s*l, 0, false, true);
}

var e14 = new Button(ctx);
            e14.setText("Regeneration");
            e14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en();
                }
            }));
            effectLayout.addView(e14);

function en() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn14();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn14() {
Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, s*l, 0, false, true);
}

var e15 = new Button(ctx);
            e15.setText("Nausea");
            e15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 eo();
                }
            }));
            effectLayout.addView(e15);

function eo() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn15();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn15() {
Entity.addEffect(getPlayerEnt(), MobEffect.confusion, s*l, 0, false, true);
}

var e16 = new Button(ctx);
            e16.setText("Jump boost");
            e16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 ep();
                }
            }));
            effectLayout.addView(e16);

function ep() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn16();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn16() {
Entity.addEffect(getPlayerEnt(), MobEffect.jump, s*l, 0, false, true);
}

var e17 = new Button(ctx);
            e17.setText("harm");
            e17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eq();
                }
            }));
            effectLayout.addView(e17);

function eq() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn17();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn17() {
Entity.addEffect(getPlayerEnt(), MobEffect.harm, s*l, 0, false, true);
}

var e18 = new Button(ctx);
            e18.setText("heal");
            e18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
er();
                }
            }));
            effectLayout.addView(e18);

function er() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn18();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn18() {
Entity.addEffect(getPlayerEnt(), MobEffect.heal, s*l, 0, false, true);
}

var e19 = new Button(ctx);
            e19.setText("Strength");
            e19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
es();
                }
            }));
            effectLayout.addView(e19);

function es() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn19();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn19() {
Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, s*l, 0, false, true);
}

var e20 = new Button(ctx);
            e20.setText("Mining fatigue");
            e20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
et();
                }
            }));
            effectLayout.addView(e20);

function et() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn20();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn20() {
Entity.addEffect(getPlayerEnt(), MobEffect.digSlowdown, s*l, 0, false, true);
}

var e21 = new Button(ctx);
            e21.setText("Haste");
            e21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eu();
                }
            }));
            effectLayout.addView(e21);

function eu() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn21();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn21() {
Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, s*l, 0, false, true);
}

var e22 = new Button(ctx);
            e22.setText("Slowness");
            e22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ev();
                }
            }));
            effectLayout.addView(e22);

function ev() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn22();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn22() {
Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, s*l, 0, false, true);
}

var e23 = new Button(ctx);
            e23.setText("Speed boost");
            e23.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ew();
                }
            }));
            effectLayout.addView(e23);

function ew() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("");
sec.setHint("Seconds");
lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn23();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn23() {
Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, s*l, 0, false, true);
}

            effect = new PopupWindow(effectLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            if(default==true)effect.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default==false)effect.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
effectLayout1.setBackgroundDrawable(bg);
effectLayout1.setPadding(20,0,20,0);
            effect.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
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
		
		var button = new android.widget.Button(ctx);
            button.setText("Add experience");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
XGive();
enchant.dismiss();
                }
            }));
            enchantLayout.addView(button);
            
            function XGive() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var XP = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter XP Amount");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(XP);
Layer.addView(Exit);

XP.setText("");
XP.setHint("EXP");
Exit.setText("GET exp");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
L=XP.getText();
Dialog.dismiss();
XG();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The XP Dialog Is Malfunctioning:"+e);
}
}});
}

function XG() {
Server.getPort()
Player.setLevel(Math.round(L));
if(Server.getPort()!="0")Server.sendChat("/xp " + L + space + Player.getName(Player.getEntity()));
}

var god1 = new Button(ctx);
            god1.setText("God sword");
            god1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                godsword()	
                }
            }));
            enchantLayout.addView(god1);
            
            function godsword(){
            	var tysplvl = "29000";
Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING,tysplvl);
            }

var ena = new Button(ctx);
            ena.setText("Aqua Affinity");
            ena.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en1();
                }
            }));
            enchantLayout.addView(ena);

function en1() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add1();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add1() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.AQUA_AFFINITY,ll);
}

var enb = new Button(ctx);
            enb.setText("Bane Of Athropods");
            enb.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en2();
                }
            }));
            enchantLayout.addView(enb);

function en2() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add2();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add2() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.BANE_OF_ARTHROPODS,ll);
}

var enc = new Button(ctx);
            enc.setText("Blast Protection");
            enc.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en3();
                }
            }));
            enchantLayout.addView(enc);

function en3() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add3();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add3() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.BLAST_PROTECTION,ll);
}

var enf = new Button(ctx);
            enf.setText("Depth Strider");
            enf.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en5();
                }
            }));
            enchantLayout.addView(enf);

function en5() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add5();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add5() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.DEPTH_STRIDER,ll);
}

var ene = new Button(ctx);
            ene.setText("Efficiency");
            ene.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en6();
                }
            }));
            enchantLayout.addView(ene);

function en6() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add6();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add6() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY,ll);
}

var eng = new Button(ctx);
            eng.setText("Feather Falling");
            eng.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en7();
                }
            }));
            enchantLayout.addView(eng);

function en7() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add7();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add7() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.FEATHER_FALLING,ll);
}

var enh = new Button(ctx);
            enh.setText("Fire Aspect");
            enh.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en8();
                }
            }));
            enchantLayout.addView(enh);

function en8() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add8();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add8() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT,ll);
}

var eni = new Button(ctx);
            eni.setText("Fire Protection");
            eni.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en9();
                }
            }));
            enchantLayout.addView(eni);

function en9() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add9();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add9() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_PROTECTION,ll);
}

var enj = new Button(ctx);
            enj.setText("Flame");
            enj.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en10();
                }
            }));
            enchantLayout.addView(enj);

function en10() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add10();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add10() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME,ll);
}

var enk = new Button(ctx);
            enk.setText("Fortune");
            enk.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en11();
                }
            }));
            enchantLayout.addView(enk);

function en11() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add11();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add11() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE,ll);
}

var enl = new Button(ctx);
            enl.setText("Infinity");
            enl.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en12();
                }
            }));
            enchantLayout.addView(enl);

function en12() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add12();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add12() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY,ll);
}

var enm = new Button(ctx);
            enm.setText("Knockback");
            enm.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en13();
                }
            }));
            enchantLayout.addView(enm);

function en13() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add13();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add13() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK,ll);
}

var enn = new Button(ctx);
            enn.setText("Looting");
            enn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en14();
                }
            }));
            enchantLayout.addView(enn);

function en14() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add14();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add14() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING,ll);
}

var eno = new Button(ctx);
            eno.setText("Luck of the sea");
            eno.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en15();
                }
            }));
            enchantLayout.addView(eno);

function en15() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add15();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add15() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.LUCK_OF_THE_SEA,ll);
}

var enp = new Button(ctx);
            enp.setText("Lure");
            enp.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en16();
                }
            }));
            enchantLayout.addView(enp);

function en16() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add16();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add16() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.LURE,ll);
}

var enq = new Button(ctx);
            enq.setText("Power");
            enq.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en17();
                }
            }));
            enchantLayout.addView(enq);

function en17() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add17();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add17() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.POWER,ll);
}

var enr = new Button(ctx);
            enr.setText("Projectile protection");
            enr.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en18();
                }
            }));
            enchantLayout.addView(enr);

function en18() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add18();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add18() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.PROJECTILE_PROTECTION,ll);
}

var ens = new Button(ctx);
            ens.setText("Protection");
            ens.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en19();
                }
            }));
            enchantLayout.addView(ens);

function en19() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add19();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add19() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION,ll);
}

var ent = new Button(ctx);
            ent.setText("Punch");
            ent.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en20();
                }
            }));
            enchantLayout.addView(ent);

function en20() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add20();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add20() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH,ll);
}

var enu = new Button(ctx);
            enu.setText("Respiration");
            enu.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en21();
                }
            }));
            enchantLayout.addView(enu);

function en21() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add21();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add21() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.RESPIRATION,ll);
}

var env = new Button(ctx);
            env.setText("Sharpness");
            env.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en22();
                }
            }));
            enchantLayout.addView(env);

function en22() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add22();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add22() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS,ll);
}

var enw = new Button(ctx);
            enw.setText("Silk touch");
            enw.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en23();
                }
            }));
            enchantLayout.addView(enw);

function en23() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add23();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add23() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.SILK_TOUCH,ll);
}

var enx = new Button(ctx);
            enx.setText("Smite");
            enx.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en24();
                }
            }));
            enchantLayout.addView(enx);

function en24() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add24();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add24() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.SMITE,ll);
}

var eny = new Button(ctx);
            eny.setText("Thorns");
            eny.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en25();
                }
            }));
            enchantLayout.addView(eny);

function en25() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add25();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add25() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS,ll);
}

var enz = new Button(ctx);
            enz.setText("Unbreaking");
            enz.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en26();
                }
            }));
            enchantLayout.addView(enz);

function en26() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(lvl);
Layer.addView(Exit);

lvl.setText("");
lvl.setHint("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ll =lvl.getText();
Dialog.dismiss();
add26();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add26() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING,ll);
}

//Enchantment.AQUA_AFFINITY;
//Enchantment.BANE_OF_ARTHROPODS;
//Enchantment.BLAST_PROTECTION;
//Enchantment.DEPTH_STRIDER;
//Enchantment.EFFICIENCY;
//Enchantment.FEATHER_FALLING;
//Enchantment.FIRE_ASPECT;
//Enchantment.FIRE_PROTECTION;
//Enchantment.FLAME;
//Enchantment.FORTUNE;
//Enchantment.INFINITY;
//Enchantment.KNOCKBACK;
//Enchantment.LOOTING;
//Enchantment.LUCK_OF_THE_SEA;
//Enchantment.LURE;
//Enchantment.POWER;
//Enchantment.PROJECTILE_PROTECTION;
//Enchantment.PROTECTION;
//Enchantment.PUNCH;
//Enchantment.RESPIRATION;
//Enchantment.SHARPNESS;
//Enchantment.SILK_TOUCH;
//Enchantment.SMITE;
//Enchantment.THORNS;
//Enchantment.UNBREAKING;

            enchant = new PopupWindow(enchantLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            if(default==true)enchant.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default==false)enchant.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
enchantLayout1.setBackgroundDrawable(bg);
enchantLayout1.setPadding(20,0,20,0);
            enchant.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
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
		
		var button = new android.widget.Button(ctx);
            button.setText("Custom Give");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Give();
give.dismiss();
                }
            }));
            giveLayout.addView(button);

var button90 = new android.widget.Button(ctx);
            button90.setText("Item ID list");
            button90.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
idList(); 
                }
            }));
            giveLayout.addView(button90);

function idList()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('https://arceusmatt.github.io/minecraftid.html');
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

var butto = new android.widget.Button(ctx);
            butto.setText("Special creative inventory");
            butto.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage(client + "§7Adding all items to creative inventory");
for(var j = 0; j < 901; j++) {
Player.addItemCreativeInv(j, 5, 0);
}
if(j==900)clientMessage(client + "§7Done, all items added.");
                }
            }));
            giveLayout.addView(butto);

var clear = new Button(ctx);
            clear.setText("Clear inventory");        
            clear.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
clientMessage(client + "§7Inventory cleared.");
for(var k = 0; k < 50; k++){
       Player.clearInventorySlot(k);
}
                }
            }));
            giveLayout.addView(clear);

var k1 = new android.widget.Button(ctx);
            k1.setText("Leather kit");
            k1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setArmorSlot(0, 298, 0);
Player.setArmorSlot(1, 299, 0);
Player.setArmorSlot(2, 300, 0);
Player.setArmorSlot(3, 301, 0);
clientMessage(client + "§6Leather §fkit equipped check inventory!");
addItemInventory(268, 1, 0);
addItemInventory(269, 1, 0);
addItemInventory(270, 1, 0);
addItemInventory(271, 1, 0);
addItemInventory(290, 1, 0);
                }
            }));
            giveLayout.addView(k1);

var k2 = new android.widget.Button(ctx);
            k2.setText("Chain kit");
            k2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setArmorSlot(0, 302, 0);
Player.setArmorSlot(1, 303, 0);
Player.setArmorSlot(2, 304, 0);
Player.setArmorSlot(3, 305, 0);
clientMessage(client + "§7Chain §fkit equipped check inventory!");
addItemInventory(272, 1, 0);
addItemInventory(273, 1, 0);
addItemInventory(274, 1, 0);
addItemInventory(275, 1, 0);
addItemInventory(291, 1, 0);
                }
            }));
            giveLayout.addView(k2);

var k3 = new android.widget.Button(ctx);
            k3.setText("Iron kit");
            k3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setArmorSlot(0, 306, 0);
Player.setArmorSlot(1, 307, 0);
Player.setArmorSlot(2, 308, 0);
Player.setArmorSlot(3, 309, 0);
clientMessage(client + "§fIron §fkit equipped check inventory!");
addItemInventory(267, 1, 0);
addItemInventory(256, 1, 0);
addItemInventory(257, 1, 0);
addItemInventory(258, 1, 0);
addItemInventory(292, 1, 0);
                }
            }));
            giveLayout.addView(k3);

var k4 = new android.widget.Button(ctx);
            k4.setText("Gold kit");
            k4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setArmorSlot(0, 314, 0);
Player.setArmorSlot(1, 315, 0);
Player.setArmorSlot(2, 316, 0);
Player.setArmorSlot(3, 317, 0);
clientMessage(client + "§eGold §fkit equipped check inventory!");
addItemInventory(283, 1, 0);
addItemInventory(284, 1, 0);
addItemInventory(285, 1, 0);
addItemInventory(286, 1, 0);
addItemInventory(294, 1, 0);
                }
            }));
            giveLayout.addView(k4);

var k5 = new android.widget.Button(ctx);
            k5.setText("Diamond kit");
            k5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setArmorSlot(0, 310, 0);
Player.setArmorSlot(1, 311, 0);
Player.setArmorSlot(2, 312, 0);
Player.setArmorSlot(3, 313, 0);
clientMessage(client + "§bDiamond §fkit equipped check inventory!");
addItemInventory(276, 1, 0);
addItemInventory(277, 1, 0);
addItemInventory(278, 1, 0);
addItemInventory(279, 1, 0);
addItemInventory(293, 1, 0);
                }
            }));
            giveLayout.addView(k5);

            give = new PopupWindow(giveLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            if(default==true)give.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default==false)give.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
giveLayout1.setBackgroundDrawable(bg);
giveLayout1.setPadding(20,0,20,0);
            give.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

function Give() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var ID = new android.widget.EditText(ctx);
var Amount = new android.widget.EditText(ctx);
var Damage = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter ID,Amt,Dmg");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(ID);
Layer.addView(Amount);
Layer.addView(Damage);
Layer.addView(Exit);

ID.setText("");
ID.setHint("Item ID");
Amount.setText("");
Amount.setHint("Item Amount");
Damage.setText("");
Damage.setHint("Item Damage");
Exit.setText("Give items");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
I=ID.getText();
A=Amount.getText();
D=Damage.getText();
Dialog.dismiss();
give2();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Give Dialog Is Malfunctioning:"+e);
}
}});
}

function give2() {
Player.addItemInventory(I,A,D);
Server.sendChat("/give " + Player.getName(Player.getEntity()) + space + I + ":" + D + space + A);
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
		
		var mm1 = new android.widget.Button(ctx);
            mm1.setText("Player");
            mm1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
Entity.setRenderType(Player.getEntity(), EntityRenderType.player);
			Entity.setMobSkin(Player.getEntity(),"mob/char.png");
                }
            }));
            morphLayout.addView(mm1);

var mm = new android.widget.Button(ctx);
            mm.setText("Bat");
            mm.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.2, 0.2, 0.2);

Entity.setRenderType(Player.getEntity(), EntityRenderType.bat);
			Entity.setMobSkin(Player.getEntity(),"mob/bat.png");
                }
            }));
            morphLayout.addView(mm);

var mm0 = new android.widget.Button(ctx);
            mm0.setText("Blaze");
            mm0.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
Entity.setRenderType(Player.getEntity(), EntityRenderType.blaze);
			Entity.setMobSkin(Player.getEntity(),"mob/blaze.png");
                }
            }));
            morphLayout.addView(mm0);

var mm2 = new android.widget.Button(ctx);
            mm2.setText("Chicken");
            mm2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.4, 0.4, 0.4);

Entity.setRenderType(Player.getEntity(), EntityRenderType.chicken);
			Entity.setMobSkin(Player.getEntity(),"mob/chicken.png");
                }
            }));
            morphLayout.addView(mm2);

var mm3 = new android.widget.Button(ctx);
            mm3.setText("Cow");
            mm3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.8, 1.7, 0.8);

Entity.setRenderType(Player.getEntity(), EntityRenderType.cow);
			Entity.setMobSkin(Player.getEntity(),"mob/cow.png");
                }
            }));
            morphLayout.addView(mm3);

var mm4 = new android.widget.Button(ctx);
            mm4.setText("Creeper");
            mm4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);

Entity.setRenderType(Player.getEntity(), EntityRenderType.creeper);
			Entity.setMobSkin(Player.getEntity(),"mob/creeper.png");
                }
            }));
            morphLayout.addView(mm4);

var mm5 = new android.widget.Button(ctx);
            mm5.setText("Enderman");
            mm5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.7, 3, 0.7);
Entity.setRenderType(Player.getEntity(), EntityRenderType.enderman);
			Entity.setMobSkin(Player.getEntity(),"mob/enderman.tga");
                }
            }));
            morphLayout.addView(mm5);

var mm6 = new android.widget.Button(ctx);
            mm6.setText("Ghast");
            mm6.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 4, 4, 4);

Entity.setRenderType(Player.getEntity(), EntityRenderType.ghast);
			Entity.setMobSkin(Player.getEntity(),"mob/ghast.png");
                }
            }));
            morphLayout.addView(mm6);

var mm7 = new android.widget.Button(ctx);
            mm7.setText("Iron golem");
            mm7.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 1, 3, 1);
Entity.setRenderType(Player.getEntity(), EntityRenderType.ironGolem);
			Entity.setMobSkin(Player.getEntity(),"mob/iron_golem.png");
                }
            }));
            morphLayout.addView(mm7);

var mm8 = new android.widget.Button(ctx);
            mm8.setText("Lava slime");
            mm8.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 2, 2, 2);

Entity.setRenderType(Player.getEntity(), EntityRenderType.lavaSlime);
			Entity.setMobSkin(Player.getEntity(),"mob/magmacube.png");
                }
            }));
            morphLayout.addView(mm8);

var mm9 = new android.widget.Button(ctx);
            mm9.setText("Ocelot");
            mm9.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 0.5, 0.5);
Entity.setRenderType(Player.getEntity(), EntityRenderType.ocelot);
			Entity.setMobSkin(Player.getEntity(),"mob/cat/ocelot.png");
                }
            }));
            morphLayout.addView(mm9);

var mm10 = new android.widget.Button(ctx);
            mm10.setText("Pig");
            mm10.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.8, 1, 0.8);

POTION()
Entity.setRenderType(Player.getEntity(), EntityRenderType.pig);
			Entity.setMobSkin(Player.getEntity(),"mob/pig.png");
                }
            }));
            morphLayout.addView(mm10);

var mm11 = new android.widget.Button(ctx);
            mm11.setText("Sheep");
            mm11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.8, 1.7, 0.8);

Entity.setRenderType(Player.getEntity(), EntityRenderType.sheep);
			Entity.setMobSkin(Player.getEntity(),"mob/sheep.tga");
                }
            }));
            morphLayout.addView(mm11);

var mm12 = new android.widget.Button(ctx);
            mm12.setText("Silverfish");
            mm12.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.3, 0.4, 0.3);

Entity.setRenderType(Player.getEntity(), EntityRenderType.silverfish);
			Entity.setMobSkin(Player.getEntity(),"mob/silverfish.png");
                }
            }));
            morphLayout.addView(mm12);

var mm13 = new android.widget.Button(ctx);
            mm13.setText("Skeleton");
            mm13.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);

Entity.setRenderType(Player.getEntity(), EntityRenderType.skeleton);
			Entity.setMobSkin(Player.getEntity(),"mob/skeleton.png");
                }
            }));
            morphLayout.addView(mm13);

var mm14 = new android.widget.Button(ctx);
            mm14.setText("Slime");
            mm14.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 2, 2, 2);

Entity.setRenderType(Player.getEntity(), EntityRenderType.slime);
			Entity.setMobSkin(Player.getEntity(),"mob/slime.png");
                }
            }));
            morphLayout.addView(mm14);

var mm15 = new android.widget.Button(ctx);
            mm15.setText("Snow golem");
            mm15.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.7, 2, 0.7);
Entity.setRenderType(Player.getEntity(), EntityRenderType.snowGolem);
			Entity.setMobSkin(Player.getEntity(),"mob/snow_golem.png");
                }
            }));
            morphLayout.addView(mm15);

var mm16 = new android.widget.Button(ctx);
            mm16.setText("Spider");
            mm16.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 1, 0.4, 1);

Entity.setRenderType(Player.getEntity(), EntityRenderType.spider);
			Entity.setMobSkin(Player.getEntity(),"mob/spider.tga");
                }
            }));
            morphLayout.addView(mm16);

var mm17 = new android.widget.Button(ctx);
            mm17.setText("Squid");
            mm17.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 0.5, 0.5);

Entity.setRenderType(Player.getEntity(), EntityRenderType.squid);
			Entity.setMobSkin(Player.getEntity(),"mob/squid.png");
                }
            }));
            morphLayout.addView(mm17);

var mm18 = new android.widget.Button(ctx);
            mm18.setText("Villager");
            mm18.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
                Entity.setRenderType(Player.getEntity(), EntityRenderType.villager);
			Entity.setMobSkin(Player.getEntity(),"mob/villager/villager.png");
                }
            }));
            morphLayout.addView(mm18);

var mm19 = new android.widget.Button(ctx);
            mm19.setText("Villager zombie");
            mm19.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);

Entity.setRenderType(Player.getEntity(), EntityRenderType.zombieVillager);
			Entity.setMobSkin(Player.getEntity(),"mob/zombieVillager.png");
                }
            }));
            morphLayout.addView(mm19);

var mm20 = new android.widget.Button(ctx);
            mm20.setText("Wolf");
            mm20.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.8, 0.7, 0.8);

Entity.setRenderType(Player.getEntity(), EntityRenderType.wolf);
			Entity.setMobSkin(Player.getEntity(),"mob/wolf.png");
                }
            }));
            morphLayout.addView(mm20);

var mm21 = new android.widget.Button(ctx);
            mm21.setText("Zombie");
            mm21.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);

Entity.setRenderType(Player.getEntity(), EntityRenderType.zombie);
			Entity.setMobSkin(Player.getEntity(),"mob/zombie.png");
                }
            }));
            morphLayout.addView(mm21);

var mm22 = new android.widget.Button(ctx);
            mm22.setText("Zombie pigman");
            mm22.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);

Entity.setRenderType(Player.getEntity(), EntityRenderType.zombie);
			Entity.setMobSkin(Player.getEntity(),"mob/pigzombie.png");
                }
            }));
            morphLayout.addView(mm22);

            morph = new PopupWindow(morphLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            if(default==true)morph.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
			if(default==false)morph.setBackgroundDrawable(new ColorDrawable(GUIColor));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
morphLayout1.setBackgroundDrawable(bg);
morphLayout1.setPadding(20,0,20,0);
            morph.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
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
		
            var tn = new android.widget.Button(ctx);
            tn.setText("Tap nuke: "+(tapnuke?"on":"off"));
            tn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
tapnuke?tapnuke=false:tapnuke=true;
tn.setText("Tap nuke: "+(tapnuke?"on":"off"));
if(tapnuke == true){
clientMessage(client + "§7Tap nuke is on");
}
if(tapnuke == false){
clientMessage(client + "§7Tap nuke is off");
                }
}
            }));
            nukeLayout.addView(tn);
            
            var an = new android.widget.Button(ctx);
            an.setText("Auto nuke: "+(autonuke?"on":"off"));
            an.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
autonuke?autonuke=false:autonuke=true;
an.setText("Auto nuke: "+(autonuke?"on":"off"));
if(autonuke == true){
clientMessage(client + "§7Auto nuke is on");
}
if(autonuke == false){
clientMessage(client + "§7Auto nuke is off");
                }
}
            }));
            nukeLayout.addView(an);
		
		var n1 = new Button(ctx);
            n1.setText("Nuke 1%");  
            n1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),1);
                }
            }));
            nukeLayout.addView(n1);

     var n2 = new Button(ctx);
            n2.setText("Nuke 5%");
            n2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),5);
                }
            }));
            nukeLayout.addView(n2);

var n3 = new Button(ctx);
            n3.setText("Nuke 10%");
            n3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),10);
                }
            }));
            nukeLayout.addView(n3);

var n4 = new Button(ctx);
            n4.setText("Nuke 15%");
            n4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),15);
                }
            }));
            nukeLayout.addView(n4);

var n5 = new Button(ctx);
            n5.setText("Nuke 20%");
            n5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),20);
                }
            }));
            nukeLayout.addView(n5);

var n6 = new Button(ctx);
            n6.setText("Nuke 25%");
            n6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),25);
                }
            }));
            nukeLayout.addView(n6);

var n7 = new Button(ctx);
            n7.setText("Nuke 30%");
            n7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),30);
                }
            }));
            nukeLayout.addView(n7);

var n8 = new Button(ctx);
            n8.setText("Nuke 35%");
            n8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),35);
                }
            }));
            nukeLayout.addView(n8);

var n9 = new Button(ctx);
            n9.setText("Nuke 40%");
            n9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),40);
                }
            }));
            nukeLayout.addView(n9);

var n10 = new Button(ctx);
            n10.setText("Nuke 45%");
            n10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),45);
                }
            }));
            nukeLayout.addView(n10);

var n11 = new Button(ctx);
            n11.setText("Nuke 50%");
            n11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),50);
                }
            }));
            nukeLayout.addView(n11);

            nuke = new PopupWindow(nukeLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            if(default==true)nuke.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default==false)nuke.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
nukeLayout1.setBackgroundDrawable(bg);
nukeLayout1.setPadding(20,0,20,0);
            nuke.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
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
		
var p1 = new android.widget.Button(ctx);
            p1.setText("Angry villager: "+(particle1?"on":"off"));
            p1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle1?particle1=false:particle1=true;
p1.setText("Angry villager: "+(particle1?"on":"off"));
if(particle1 == true){
clientMessage(client + "§7Particle 1 is true");
}
if(particle1 == false){
clientMessage(client + "§7Particle 1 is false");
                }
}
            }));
            particleLayout.addView(p1);

var p2 = new android.widget.Button(ctx);
            p2.setText("bubble: "+(particle2?"on":"off"));
            p2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle2?particle2=false:particle2=true;
p2.setText("bubble: "+(particle2?"on":"off"));
if(particle2 == true){
clientMessage(client + "§7Particle 2 is true");
}
if(particle2 == false){
clientMessage(client + "§7Particle 2 is false");
                }
}
            }));
            particleLayout.addView(p2);

var p3 = new android.widget.Button(ctx);
            p3.setText("cloud: "+(particle3?"on":"off"));
            p3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle3?particle3=false:particle3=true;
p3.setText("cloud: "+(particle3?"on":"off"));
if(particle3 == true){
clientMessage(client + "§7Particle 3 is true");
}
if(particle3 == false){
clientMessage(client + "§7Particle 3 is false");
                }
}
            }));
            particleLayout.addView(p3);

var p4 = new android.widget.Button(ctx);
            p4.setText("crit: "+(particle4?"on":"off"));
            p4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle4?particle4=false:particle4=true;
p4.setText("crit: "+(particle4?"on":"off"));
if(particle4 == true){
clientMessage(client + "§7Particle 4 is true");
}
if(particle4 == false){
clientMessage(client + "§7Particle 4 is false");
                }
}
            }));
            particleLayout.addView(p4);

var p5 = new android.widget.Button(ctx);
            p5.setText("drip lava: "+(particle5?"on":"off"));
            p5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle5?particle5=false:particle5=true;
p5.setText("drip lava: "+(particle5?"on":"off"));
if(particle5 == true){
clientMessage(client + "§7Particle 5 is true");
}
if(particle5 == false){
clientMessage(client + "§7Particle 5 is false");
                }
}
            }));
            particleLayout.addView(p5);

var p6 = new android.widget.Button(ctx);
            p6.setText("drip water: "+(particle6?"on":"off"));
            p6.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle6?particle6=false:particle6=true;
p6.setText("drip water: "+(particle6?"on":"off"));
if(particle6 == true){
clientMessage(client + "§7Particle 6 is true");
}
if(particle6 == false){
clientMessage(client + "§7Particle 6 is false");
                }
}
            }));
            particleLayout.addView(p6);

var p7 = new android.widget.Button(ctx);
            p7.setText("enchanting table: "+(particle7?"on":"off"));
            p7.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle7?particle7=false:particle7=true;
p7.setText("enchanting table: "+(particle7?"on":"off"));
if(particle7 == true){
clientMessage(client + "§7Particle 7 is true");
}
if(particle7 == false){
clientMessage(client + "§7Particle 7 is false");
                }
}
            }));
            particleLayout.addView(p7);

var p8 = new android.widget.Button(ctx);
            p8.setText("falling dust: "+(particle8?"on":"off"));
            p8.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle8?particle8=false:particle8=true;
p8.setText("falling dust: "+(particle8?"on":"off"));
if(particle8 == true){
clientMessage(client + "§7Particle 8 is true");
}
if(particle8 == false){
clientMessage(client + "§7Particle 8 is false");
                }
}
            }));
            particleLayout.addView(p8);

var p9 = new android.widget.Button(ctx);
            p9.setText("flame: "+(particle9?"on":"off"));
            p9.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle9?particle9=false:particle9=true;
p9.setText("flame: "+(particle9?"on":"off"));
if(particle9 == true){
clientMessage(client + "§7Particle 9 is true");
}
if(particle9 == false){
clientMessage(client + "§7Particle 9 is false");
                }
}
            }));
            particleLayout.addView(p9);

var p10 = new android.widget.Button(ctx);
            p10.setText("Happy villager: "+(particle10?"on":"off"));
            p10.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle10?particle10=false:particle10=true;
p10.setText("Happy villager: "+(particle10?"on":"off"));
if(particle10 == true){
clientMessage(client + "§7Particle 10 is true");
}
if(particle10 == false){
clientMessage(client + "§7Particle 10 is false");
                }
}
            }));
            particleLayout.addView(p10);

var p11 = new android.widget.Button(ctx);
            p11.setText("heart: "+(particle11?"on":"off"));
            p11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle11?particle11=false:particle11=true;
p11.setText("heart: "+(particle11?"on":"off"));
if(particle11 == true){
clientMessage(client + "§7Particle 11 is true");
}
if(particle11 == false){
clientMessage(client + "§7Particle 11 is false");
                }
}
            }));
            particleLayout.addView(p11);

var p12 = new android.widget.Button(ctx);
            p12.setText("Huge explosion: "+(particle12?"on":"off"));
            p12.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle12?particle12=false:particle12=true;
p12.setText("Huge explosion: "+(particle12?"on":"off"));
if(particle12 == true){
clientMessage(client + "§7Particle 12 is true");
}
if(particle12 == false){
clientMessage(client + "§7Particle 12 is false");
                }
}
            }));
            particleLayout.addView(p12);

var p13 = new android.widget.Button(ctx);
            p13.setText("Explosion seed: "+(particle13?"on":"off"));
            p13.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle13?particle13=false:particle13=true;
p13.setText("Explosion seed: "+(particle13?"on":"off"));
if(particle13 == true){
clientMessage(client + "§7Particle 13 is true");
}
if(particle13 == false){
clientMessage(client + "§7Particle 13 is false");
                }
}
            }));
            particleLayout.addView(p13);

var p14 = new android.widget.Button(ctx);
            p14.setText("ink: "+(particle14?"on":"off"));
            p14.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle14?particle14=false:particle14=true;
p14.setText("ink: "+(particle14?"on":"off"));
if(particle14 == true){
clientMessage(client + "§7Particle 14 is true");
}
if(particle14 == false){
clientMessage(client + "§7Particle 14 is false");
                }
}
            }));
            particleLayout.addView(p14);

var p15 = new android.widget.Button(ctx);
            p15.setText("Item break: "+(particle15?"on":"off"));
            p15.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle15?particle15=false:particle15=true;
p15.setText("Item break: "+(particle15?"on":"off"));
if(particle15 == true){
clientMessage(client + "§7Particle 15 is true");
}
if(particle15 == false){
clientMessage(client + "§7Particle 15 is false");
                }
}
            }));
            particleLayout.addView(p15);

var p16 = new android.widget.Button(ctx);
            p16.setText("Lava: "+(particle16?"on":"off"));
            p16.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle16?particle16=false:particle16=true;
p16.setText("Lava: "+(particle16?"on":"off"));
if(particle16 == true){
clientMessage(client + "§7Particle 16 is true");
}
if(particle16 == false){
clientMessage(client + "§7Particle 16 is false");
                }
}
            }));
            particleLayout.addView(p16);

var p17 = new android.widget.Button(ctx);
            p17.setText("Mob flame: "+(particle17?"on":"off"));
            p17.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle17?particle17=false:particle17=true;
p17.setText("Mob flame: "+(particle17?"on":"off"));
if(particle17 == true){
clientMessage(client + "§7Particle 17 is true");
}
if(particle17 == false){
clientMessage(client + "§7Particle 17 is false");
                }
}
            }));
            particleLayout.addView(p17);

var p18 = new android.widget.Button(ctx);
            p18.setText("Note: "+(particle18?"on":"off"));
            p18.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle18?particle18=false:particle18=true;
p18.setText("Note: "+(particle18?"on":"off"));
if(particle18 == true){
clientMessage(client + "§7Particle 18 is true");
}
if(particle18 == false){
clientMessage(client + "§7Particle 18 is false");
                }
}
            }));
            particleLayout.addView(p18);

var p19 = new android.widget.Button(ctx);
            p19.setText("Portal: "+(particle19?"on":"off"));
            p19.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle19?particle19=false:particle19=true;
p19.setText("Portal: "+(particle19?"on":"off"));
if(particle19 == true){
clientMessage(client + "§7Particle 19 is true");
}
if(particle19 == false){
clientMessage(client + "§7Particle 19 is false");
                }
}
            }));
            particleLayout.addView(p19);

var p20 = new android.widget.Button(ctx);
            p20.setText("Rain splash: "+(particle20?"on":"off"));
            p20.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle20?particle20=false:particle20=true;
p20.setText("Rain splash: "+(particle20?"on":"off"));
if(particle20 == true){
clientMessage(client + "§7Particle 20 is true");
}
if(particle20 == false){
clientMessage(client + "§7Particle 20 is false");
                }
}
            }));
            particleLayout.addView(p20);

var p21 = new android.widget.Button(ctx);
            p21.setText("Redstone: "+(particle21?"on":"off"));
            p21.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle21?particle21=false:particle21=true;
p21.setText("Redstone: "+(particle21?"on":"off"));
if(particle21 == true){
clientMessage(client + "§7Particle 21 is true");
}
if(particle21 == false){
clientMessage(client + "§7Particle 21 is false");
                }
}
            }));
            particleLayout.addView(p21);

var p22 = new android.widget.Button(ctx);
            p22.setText("Slime: "+(particle22?"on":"off"));
            p22.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle22?particle22=false:particle22=true;
p22.setText("Slime: "+(particle22?"on":"off"));
if(particle22 == true){
clientMessage(client + "§7Particle 22 is true");
}
if(particle22 == false){
clientMessage(client + "§7Particle 22 is false");
                }
}
            }));
            particleLayout.addView(p22);

var p23 = new android.widget.Button(ctx);
            p23.setText("Smoke: "+(particle23?"on":"off"));
            p23.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle23?particle23=false:particle23=true;
p23.setText("Smoke: "+(particle23?"on":"off"));
if(particle23 == true){
clientMessage(client + "§7Particle 23 is true");
}
if(particle23 == false){
clientMessage(client + "§7Particle 23 is false");
                }
}
            }));
            particleLayout.addView(p23);

var p24 = new android.widget.Button(ctx);
            p24.setText("Snow ball poof: "+(particle24?"on":"off"));
            p24.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle24?particle24=false:particle24=true;
p24.setText("Snow ball poof: "+(particle24?"on":"off"));
if(particle24 == true){
clientMessage(client + "§7Particle 24 is true");
}
if(particle24 == false){
clientMessage(client + "§7Particle 24 is false");
                }
}
            }));
            particleLayout.addView(p24);

var p25 = new android.widget.Button(ctx);
            p25.setText("Spell: "+(particle25?"on":"off"));
            p25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle25?particle25=false:particle25=true;
p25.setText("Spell: "+(particle25?"on":"off"));
if(particle25 == true){
clientMessage(client + "§7Particle 25 is true");
}
if(particle25 == false){
clientMessage(client + "§7Particle 25 is false");
                }
}
            }));
            particleLayout.addView(p25);

var p26 = new android.widget.Button(ctx);
            p26.setText("Splash: "+(particle26?"on":"off"));
            p26.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle26?particle26=false:particle26=true;
p26.setText("Splash: "+(particle26?"on":"off"));
if(particle26 == true){
clientMessage(client + "§7Particle 26 is true");
}
if(particle26 == false){
clientMessage(client + "§7Particle 26 is false");
                }
}
            }));
            particleLayout.addView(p26);

var p27 = new android.widget.Button(ctx);
            p27.setText("Suspended town: "+(particle27?"on":"off"));
            p27.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle27?particle27=false:particle27=true;
p27.setText("Suspended town: "+(particle27?"on":"off"));
if(particle27 == true){
clientMessage(client + "§7Particle 27 is true");
}
if(particle27 == false){
clientMessage(client + "§7Particle 27 is false");
                }
}
            }));
            particleLayout.addView(p27);

var p28 = new android.widget.Button(ctx);
            p28.setText("Terrain: "+(particle28?"on":"off"));
            p28.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle28?particle28=false:particle28=true;
p28.setText("Terrain: "+(particle28?"on":"off"));
if(particle28 == true){
clientMessage(client + "§7Particle 28 is true");
}
if(particle28 == false){
clientMessage(client + "§7Particle 28 is false");
                }
}
            }));
            particleLayout.addView(p28);

var p29 = new android.widget.Button(ctx);
            p29.setText("Water wake: "+(particle29?"on":"off"));
            p29.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle29?particle29=false:particle29=true;
p29.setText("Water wake: "+(particle29?"on":"off"));
if(particle29 == true){
clientMessage(client + "§7Particle 29 is true");
}
if(particle29 == false){
clientMessage(client + "§7Particle 29 is false");
                }
}
            }));
            particleLayout.addView(p29);

var p30 = new android.widget.Button(ctx);
            p30.setText("Large explosion: "+(particle30?"on":"off"));
            p30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle30?particle30=false:particle30=true;
p30.setText("Large explosion: "+(particle30?"on":"off"));
if(particle30 == true){
clientMessage(client + "§7Particle 30 is true");
}
if(particle30 == false){
clientMessage(client + "§7Particle 30 is false");
                }
}
            }));
            particleLayout.addView(p30);

var p31 = new android.widget.Button(ctx);
            p31.setText("Spell 2: "+(particle31?"on":"off"));
            p31.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle31?particle31=false:particle31=true;
p31.setText("Spell 2: "+(particle31?"on":"off"));
if(particle31 == true){
clientMessage(client + "§7Particle 31 is true");
}
if(particle31 == false){
clientMessage(client + "§7Particle 31 is false");
                }
}
            }));
            particleLayout.addView(p31);

var p32 = new android.widget.Button(ctx);
            p32.setText("Spell 3: "+(particle32?"on":"off"));
            p32.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle32?particle32=false:particle32=true;
p32.setText("Spell 3: "+(particle32?"on":"off"));
if(particle32 == true){
clientMessage(client + "§7Particle 32 is true");
}
if(particle32 == false){
clientMessage(client + "§7Particle 32 is false");
                }
}
            }));
            particleLayout.addView(p32);

            particle = new PopupWindow(particleLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            if(default==true)particle.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default==false)particle.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
particleLayout1.setBackgroundDrawable(bg);
particleLayout1.setPadding(20,0,20,0);
            particle.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
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
		
		var spawn10 = new Button(ctx);
            spawn10.setText("Spawn Chicken");      
            spawn10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 10);
                }
            }));
            spawnLayout.addView(spawn10);

var spawn11 = new Button(ctx);
            spawn11.setText("Spawn Cow");
            spawn11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 11);
                }
            }));
            spawnLayout.addView(spawn11);
            
            var spawn12 = new Button(ctx);
            spawn12.setText("Spawn Pig");
            spawn12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 12);
                }
            }));
            spawnLayout.addView(spawn12);
            
            var spawn13 = new Button(ctx);
            spawn13.setText("Spawn Sheep");
            spawn13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 13);
                }
            }));
            spawnLayout.addView(spawn13);
            
            var spawn14 = new Button(ctx);
            spawn14.setText("Spawn Wolf");
            spawn14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 14);
                }
            }));
            spawnLayout.addView(spawn14);
            
            var spawn15 = new Button(ctx);
            spawn15.setText("Spawn Villager");
            spawn15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 15);
                }
            }));
            spawnLayout.addView(spawn15);
            
            var spawn16 = new Button(ctx);
            spawn16.setText("Spawn Mushrom cow");
            spawn16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 16);
                }
            }));
            spawnLayout.addView(spawn16);
            
            var spawn17 = new Button(ctx);
            spawn17.setText("Spawn Squid");
            spawn17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 17);
                }
            }));
            spawnLayout.addView(spawn17);
            
            var spawn18 = new Button(ctx);
            spawn18.setText("Spawn Rabbit");
            spawn18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 18);
                }
            }));
            spawnLayout.addView(spawn18);
            
            var spawn19 = new Button(ctx);
            spawn19.setText("Spawn Bat");
            spawn19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 19);
                }
            }));
            spawnLayout.addView(spawn19);
            
            var spawn20 = new Button(ctx);
            spawn20.setText("Spawn Iron golem");
            spawn20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 20);
                }
            }));
            spawnLayout.addView(spawn20);
            
            var spawn21 = new Button(ctx);
            spawn21.setText("Spawn Snow golem");
            spawn21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 21);
                }
            }));
            spawnLayout.addView(spawn21);
            
            var spawn22 = new Button(ctx);
            spawn22.setText("Spawn Ocelot");
            spawn22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 22);
                }
            }));
            spawnLayout.addView(spawn22);

var spawn32 = new Button(ctx);
            spawn32.setText("Spawn Zombie");
            spawn32.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 32);
                }
            }));
            spawnLayout.addView(spawn32);

var spawn33 = new Button(ctx);
            spawn33.setText("Spawn Creeper");
            spawn33.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 33);
                }
            }));
            spawnLayout.addView(spawn33);

var spawn34 = new Button(ctx);
            spawn34.setText("Spawn Skeleton");
            spawn34.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 34);
                }
            }));
            spawnLayout.addView(spawn34);
            
            var spawn35 = new Button(ctx);
            spawn35.setText("Spawn Spider");
            spawn35.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 35);
                }
            }));
            spawnLayout.addView(spawn35);
            
            var spawn36 = new Button(ctx);
            spawn36.setText("Spawn Zombie pigman");
            spawn36.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 36);
                }
            }));
            spawnLayout.addView(spawn36);
            
            var spawn37 = new Button(ctx);
            spawn37.setText("Spawn Slime");
            spawn37.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 37);
                }
            }));
            spawnLayout.addView(spawn37);
            
            var spawn38 = new Button(ctx);
            spawn38.setText("Spawn Enderman");     
            spawn38.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 38);
                }
            }));
            spawnLayout.addView(spawn38);
            
            var spawn39 = new Button(ctx);
            spawn39.setText("Spawn Silverfish");
            spawn39.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 39);
                }
            }));
            spawnLayout.addView(spawn39);

var spawn40 = new Button(ctx);
            spawn40.setText("Spawn Cave spider"); 
            spawn40.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 40);
                }
            }));
            spawnLayout.addView(spawn40);

var spawn41 = new Button(ctx);
            spawn41.setText("Spawn Ghast");      
            spawn41.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 41);
                }
            }));
            spawnLayout.addView(spawn41);

var spawn42 = new Button(ctx);
            spawn42.setText("Spawn Magma cube");
            spawn42.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 42);
                }
            }));
            spawnLayout.addView(spawn42);

var spawn43 = new Button(ctx);
            spawn43.setText("Spawn Blaze");       
            spawn43.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 43);
                }
            }));
            spawnLayout.addView(spawn43);

var spawn44 = new Button(ctx);
            spawn44.setText("Spawn Zombie villager");
            spawn44.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 44);
                }
            }));
            spawnLayout.addView(spawn44);

var spawn66 = new Button(ctx);
            spawn66.setText("Spawn Witch");            
            spawn66.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 45);
                }
            }));
            spawnLayout.addView(spawn66);

			var spawn67 = new Button(ctx);
            spawn67.setText("Spawn Endermite");            
            spawn67.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 67);
                }
            }));
            spawnLayout.addView(spawn67);
			
			var spawn68 = new Button(ctx);
            spawn68.setText("Spawn Guardian");            
            spawn68.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 68);
                }
            }));
            spawnLayout.addView(spawn68);
			
			var spawn69 = new Button(ctx);
            spawn69.setText("Spawn Shulker");            
            spawn69.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 69);
                }
            }));
            spawnLayout.addView(spawn69);
			
var spawn70 = new Button(ctx);
            spawn70.setText("Spawn Horse");            
            spawn70.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 23);
                }
            }));
            spawnLayout.addView(spawn70);
			
			var spawn71 = new Button(ctx);
            spawn71.setText("Spawn Donkey");            
            spawn71.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 24);
                }
            }));
            spawnLayout.addView(spawn71);
			
			var spawn72 = new Button(ctx);
            spawn72.setText("Spawn Mule");            
            spawn72.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 25);
                }
            }));
            spawnLayout.addView(spawn72);
			
			var spawn73 = new Button(ctx);
            spawn73.setText("Spawn Skeleton Horse");            
            spawn73.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 26);
                }
            }));
            spawnLayout.addView(spawn73);
			
			var spawn74 = new Button(ctx);
            spawn74.setText("Spawn Zombie Horse");            
            spawn74.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 27);
                }
            }));
            spawnLayout.addView(spawn74);
			
			var spawn75 = new Button(ctx);
            spawn75.setText("Spawn Wither skeleton");            
            spawn75.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 48);
                }
            }));
            spawnLayout.addView(spawn75);
			
			var spawn76 = new Button(ctx);
            spawn76.setText("Spawn Stray");            
            spawn76.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 46);
                }
            }));
            spawnLayout.addView(spawn76);
			
			var spawn77 = new Button(ctx);
            spawn77.setText("Spawn Husk");            
            spawn77.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 47);
                }
            }));
            spawnLayout.addView(spawn77);

            spawn = new PopupWindow(spawnLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            if(default==true)spawn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default==false)spawn.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
spawnLayout1.setBackgroundDrawable(bg);
spawnLayout1.setPadding(20,0,20,0);
            spawn.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
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
		
		var d1 = new Button(ctx);
            d1.setText("Normal speed");       
            d1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(20);
                }
            }));
            speedLayout.addView(d1);
			
			var d0 = new Button(ctx);
            d0.setText("Speed 0%");       
            d0.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(0);
                }
            }));
            speedLayout.addView(d0);
            
            var d2 = new Button(ctx);
            d2.setText("Speed 5%");       
            d2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(5);
                }
            }));
            speedLayout.addView(d2);
            
            var d3 = new Button(ctx);
            d3.setText("Speed 10%");       
            d3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(10);
                }
            }));
            speedLayout.addView(d3);
            
            var d4 = new Button(ctx);
            d4.setText("Speed 15%");       
            d4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(15);
                }
            }));
            speedLayout.addView(d4);
            
            var d5 = new Button(ctx);
            d5.setText("Speed 20%");       
            d5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(20);
                }
            }));
            speedLayout.addView(d5);
            
            var d6 = new Button(ctx);
            d6.setText("Speed 25%");       
            d6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(25);
                }
            }));
            speedLayout.addView(d6);
            
            var d7 = new Button(ctx);
            d7.setText("Speed 30%");       
            d7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(30);
                }
            }));
            speedLayout.addView(d7);
            
            var d8 = new Button(ctx);
            d8.setText("Speed 35%");       
            d8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(35);
                }
            }));
            speedLayout.addView(d8);
            
            var d9 = new Button(ctx);
            d9.setText("Speed 40%");       
            d9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(40);
                }
            }));
            speedLayout.addView(d9);

var d10 = new Button(ctx);
            d10.setText("Speed 45%");       
            d10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(45);
                }
            }));
            speedLayout.addView(d10);

var d11 = new Button(ctx);
            d11.setText("Speed 50%");       
            d11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(50);
                }
            }));
            speedLayout.addView(d11);

var d12 = new Button(ctx);
            d12.setText("Speed 55%");       
            d12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(55);
                }
            }));
            speedLayout.addView(d12);

var d13 = new Button(ctx);
            d13.setText("Speed 60%");       
            d13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(60);
                }
            }));
            speedLayout.addView(d13);

var d14 = new Button(ctx);
            d14.setText("Speed 65%");       
            d14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(65);
                }
            }));
            speedLayout.addView(d14);

var d15 = new Button(ctx);
            d15.setText("Speed 70%");       
            d15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(70);
                }
            }));
            speedLayout.addView(d15);

var d16 = new Button(ctx);
            d16.setText("Speed 75%");       
            d16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(75);
                }
            }));
            speedLayout.addView(d16);

var d17 = new Button(ctx);
            d17.setText("Speed 80%");       
            d17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(80);
                }
            }));
            speedLayout.addView(d17);

var d18 = new Button(ctx);
            d18.setText("Speed 85%");       
            d18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(85);
                }
            }));
            speedLayout.addView(d18);

var d19 = new Button(ctx);
            d19.setText("Speed 90%");       
            d19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(90);
                }
            }));
            speedLayout.addView(d19);

var d20 = new Button(ctx);
            d20.setText("Speed 95%");       
            d20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(95);
                }
            }));
            speedLayout.addView(d20);

var d21 = new Button(ctx);
            d21.setText("Speed 100%");       
            d21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(100);
                }
            }));
            speedLayout.addView(d21);
			
			var d22 = new Button(ctx);
            d22.setText("Custom speed");        
            d22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
newspeed(); 

                }
            }));
            speedLayout.addView(d22);

function newspeed() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(ctx);
var vspee = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter custom speed");
Dialog.setContentView(Layer8);

Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer8.addView(vspee);
Layer8.addView(Exit);

vspee.setText("");
vspee.setHint("numbers here");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
nspee =vspee.getText();
Dialog.dismiss();
setspeed();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The set speed Dialog Is Malfunctioning:"+e);
}
}});
}

function setspeed(){
ModPE.setGameSpeed(nspee);
}

            speed = new PopupWindow(speedLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            if(default==true)speed.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default==false)speed.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
speedLayout1.setBackgroundDrawable(bg);
speedLayout1.setPadding(20,0,20,0);
            speed.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
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
		
		var button = new android.widget.Button(ctx);
            button.setText("Select coords");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Tsele();
tmenu.dismiss();
                }
            }));
            teleportLayout.addView(button);

var Uspawn = new Button(ctx);
            Uspawn.setText("Set home");       
            Uspawn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
        xhome=Player.getX();
        yhome=Player.getY()+1;
        zhome=Player.getZ(); 
        Server.getPort();
        if(Server.getPort()=="0")save();
clientMessage(client + "§7Home set to: " + Math.round(xhome) + ", " + Math.round(yhome) + ", " + Math.round(zhome) + ".");
                }
            }));
            teleportLayout.addView(Uspawn);

var Rspawn = new Button(ctx);
            Rspawn.setText("Return to home");       
            Rspawn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
        Server.getPort();
        if(Server.getPort()=="0")load();
clientMessage(client + "§7Returning to your saved home");
                }
            }));
            teleportLayout.addView(Rspawn);

var sspawn = new Button(ctx);
            sspawn.setText("Set spawn");       
            sspawn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
        Level.setSpawn(getPlayerX(), getPlayerY(), getPlayerZ())
clientMessage(client + "§7Spawn set to " + Math.round(getPlayerX()) + ", " + Math.round(getPlayerY()) + ", " + Math.round(getPlayerZ()) + ".");
                }
            }));
            teleportLayout.addView(sspawn);
			
			var randomtp = new Button(ctx);
            randomtp.setText("Random TP");       
            randomtp.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 setPosition(Player.getEntity(), (Math.floor(Math.random() * (5000 - 100 + 1)) + 100), 60, (Math.floor(Math.random() * (5000 - 100 + 1)) + 100));
clientMessage(client + "Woah!");
                }
            }));
            teleportLayout.addView(randomtp);
			
			var at = new android.widget.Button(ctx);
      at.setText("Tap teleport: "+(taptp?"on":"off"));
		at.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				taptp?taptp=false:taptp=true;
at.setText("Tap teleport: "+(taptp?"on":"off"));
if(taptp == true){
clientMessage(client + "Tap telelport enabled.")
}
if(taptp == false){
clientMessage(client + "Tap teleport disabled.");

taptp = false;
                }
			}
		});
		teleportLayout.addView(at);
			
			var et = new android.widget.TextView(ctx);
			et.setGravity(android.view.Gravity.CENTER);
		et.setText("You may crash while tping because blocks do not load correctly.");
       et.setTextColor(Color.RED);
		et.setTextSize(20);
		teleportLayout.addView(et);

            teleport = new PopupWindow(teleportLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            if(default==true)teleport.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default==false)teleport.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
teleportLayout1.setBackgroundDrawable(bg);
teleportLayout1.setPadding(20,0,20,0);
            teleport.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

function Tsele() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var X = new android.widget.EditText(ctx);
var Y = new android.widget.EditText(ctx);
var Z = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Type coords to teleport");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(X);
Layer.addView(Y);
Layer.addView(Z);
Layer.addView(Exit);

X.setText("");
X.setHint("X");
Y.setText("");
Y.setHint("Y");
Z.setText("");
Z.setHint("Z");
Exit.setText("Teleport");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
px=X.getText();
py=Y.getText();
pz=Z.getText();
Dialog.dismiss();
set();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Teleport Dialog Is Malfunctioning:"+e);
}
}});
}

function set() {
Server.getPort();
if(Server.getPort()=="0")setPosition(Player.getEntity(), px, py, pz);
Server.sendChat("/tp " + Player.getName(Player.getEntity()) + space + px + space + py + space + pz);
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
		
		var aa = new android.widget.Button(ctx);
            aa.setText("Only day: "+(onlyday?"on":"off"));
            aa.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                onlyday?onlyday=false:onlyday=true;
aa.setText("Only day: "+(onlyday?"on":"off"));
if(onlyday == true){
clientMessage(client + "§7Only day is on");
Server.sendChat("/time set 0");
Server.sendChat("/time stop");
onlyday = true;
}
if(onlyday == false){
clientMessage(client + "§7Only day is off");
Server.sendChat("/time start");
onlyday = false;
                }
                }
            }));
            timeLayout.addView(aa);

var aa2 = new android.widget.Button(ctx);
            aa2.setText("Only night: "+(onlynight?"on":"off"));
            aa2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
onlynight?onlynight=false:onlynight=true;
aa2.setText("Only night: "+(onlynight?"on":"off"));
if(onlynight == true){
clientMessage(client + "§7Only night is on");
Server.sendChat("/time set 15000");
Server.sendChat("/time stop");
onlynight = true;
}
if(onlynight == false){
clientMessage(client + "§7Only night is off");
Server.sendChat("/time start");
onlynight = false;
                }
                }
            }));
            timeLayout.addView(aa2);

var a1 = new Button(ctx);
            a1.setText("Time: 6:00am");
            a1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(0);
Server.sendChat("/time set 0");
                }
            }));
            timeLayout.addView(a1);

var a2 = new Button(ctx);
            a2.setText("Time: 7:00am");
            a2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(1000);
Server.sendChat("/time set 1000");
                }
            }));
            timeLayout.addView(a2);

var a3 = new Button(ctx);
            a3.setText("Time: 8:00am");
            a3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(2000);
Server.sendChat("/time set 2000");
                }
            }));
            timeLayout.addView(a3);

var a4 = new Button(ctx);
            a4.setText("Time: 9:00am");
            a4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(3000);
Server.sendChat("/time set 3000");
                }
            }));
            timeLayout.addView(a4);

var a5 = new Button(ctx);
            a5.setText("Time: 10:00am");
            a5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(4000);
Server.sendChat("/time set 4000");
                }
            }));
            timeLayout.addView(a5);

var a6 = new Button(ctx);
            a6.setText("Time: 11:00am");
            a6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(5000);
Server.sendChat("/time set 5000");
                }
            }));
            timeLayout.addView(a6);

var a7 = new Button(ctx);
            a7.setText("Time: 12:00pm");
            a7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(6000);
Server.sendChat("/time set 6000");
                }
            }));
            timeLayout.addView(a7);

var a8 = new Button(ctx);
            a8.setText("Time: 1:00pm");
            a8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(7000);
Server.sendChat("/time set 7000");
                }
            }));
            timeLayout.addView(a8);

var a9 = new Button(ctx);
            a9.setText("Time: 2:00pm");
            a9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(8000);
Server.sendChat("/time set 8000");
                }
            }));
            timeLayout.addView(a9);

var a10 = new Button(ctx);
            a10.setText("Time: 3:00pm");
            a10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(9000);
Server.sendChat("/time set 9000");
                }
            }));
            timeLayout.addView(a10);

var a11 = new Button(ctx);
            a11.setText("Time: 4:00pm");
            a11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(10000);
Server.sendChat("/time set 10000");
                }
            }));
            timeLayout.addView(a11);

var a12 = new Button(ctx);
            a12.setText("Time: 5:00pm");
            a12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(11000);
Server.sendChat("/time set 11000");
                }
            }));
            timeLayout.addView(a12);

var a13 = new Button(ctx);
            a13.setText("Time: 6:00pm");
            a13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(12000);
Server.sendChat("/time set 12000");
                }
            }));
            timeLayout.addView(a13);

var a14 = new Button(ctx);
            a14.setText("Time: 7:00pm");
            a14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(13000);
Server.sendChat("/time set 13000");
                }
            }));
            timeLayout.addView(a14);

var a15 = new Button(ctx);
            a15.setText("Time: 8:00pm");
            a15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(14000);
Server.sendChat("/time set 14000");
                }
            }));
            timeLayout.addView(a15);

var a16 = new Button(ctx);
            a16.setText("Time: 9:00pm");
            a16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(15000);
Server.sendChat("/time set 15000");
                }
            }));
            timeLayout.addView(a16);

var a17 = new Button(ctx);
            a17.setText("Time: 10:00pm");
            a17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(16000);
Server.sendChat("/time set 16000");
                }
            }));
            timeLayout.addView(a17);

var a18 = new Button(ctx);
            a18.setText("Time: 11:00pm");
            a18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(17000);
Server.sendChat("/time set 17000");
                }
            }));
            timeLayout.addView(a18);

var a19 = new Button(ctx);
            a19.setText("Time: 12:00am");
            
            a19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(18000);
Server.sendChat("/time set 18000");
                }
            }));
            timeLayout.addView(a19);

var a20 = new Button(ctx);
            a20.setText("Time: 1:00am");
            a20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(19000);
Server.sendChat("/time set 19000");
                }
            }));
            timeLayout.addView(a20);

var a21 = new Button(ctx);
            a21.setText("Time: 2:00am");
            a21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(20000);
Server.sendChat("/time set 20000");
                }
            }));
            timeLayout.addView(a21);

var a22 = new Button(ctx);
            a22.setText("Time: 3:00am");
            a22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(21000);
Server.sendChat("/time set 21000");
                }
            }));
            timeLayout.addView(a22);

var a23 = new Button(ctx);
            a23.setText("Time: 4:00am");
            a23.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(22000);
Server.sendChat("/time set 22000");
                }
            }));
            timeLayout.addView(a23);

var a24 = new Button(ctx);
            a24.setText("Time: 5:00am");          
            a24.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(23000);
Server.sendChat("/time set 23000");
                }
            }));
            timeLayout.addView(a24);

            time = new PopupWindow(timeLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            if(default==true)time.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default==false)time.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
timeLayout1.setBackgroundDrawable(bg);
timeLayout1.setPadding(20,0,20,0);
            time.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
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
             weather.dismiss();
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

            weather = new PopupWindow(weatherLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, ctx.getWindowManager().getDefaultDisplay().getHeight());
            if(default==true)weather.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default==false)weather.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
weatherLayout1.setBackgroundDrawable(bg);
weatherLayout1.setPadding(20,0,20,0);
            weather.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
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
            
            menu = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
           if(default==true)menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
		   if(default==false)menu.setBackgroundDrawable(new ColorDrawable(GUIColor));
		   var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
menuLayout1.setBackgroundDrawable(bg);
menuLayout1.setPadding(20,0,20,0);
            menu.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
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

function attackHook(attacker, victim) {
	if(instakilled) {
		Entity.setHealth(victim, 1);
	}
	if(firepunch) {
Entity.setFireTicks(victim, 5);
	}
if(saddle){
rideAnimal(attacker, victim);
}
if(horsehealth)Entity.setMaxHealth(victim, horseheart);
if(getage)clientMessage(client + "age: "+Entity.getAnimalAge(victim));
if(setage)Entity.setAnimalAge(victim, newage);
}

function instaDestroy(){
if(instabreak==true)
	for(i = 0; i < 256; i++){
		Block.setDestroyTime(i, 0.1);
	}
}
 
function defaultDestroy(){
if(instabreak==false)
	for(i = 0; i < 256; i++){
		Block.setDestroyTime(i, defaultDestroyTime[i]);
	}
}

function killing() {
    var mobs = Entity.getAll();
    for (var a = 0; a < mobs.length; a++) {
        var mobX = Entity.getX(mobs[a]) - getPlayerX();
        var mobY = Entity.getY(mobs[a]) - getPlayerY();
        var mobZ = Entity.getZ(mobs[a]) - getPlayerZ();
        if (mobX * mobX + mobY * mobY + mobZ * mobZ <= 20 * 20 && mobs[a] != getPlayerEnt()) {
            if (Entity.getEntityTypeId(mobs[a]) == 10) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 11) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 12) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 13) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 14) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 15) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 16) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 17) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 18) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 19) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 20) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 21) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 22) {
                Entity.setHealth(mobs[a], 0)
            }
			if (Entity.getEntityTypeId(mobs[a]) == 24) {
                Entity.setHealth(mobs[a], 0)
            }
			if (Entity.getEntityTypeId(mobs[a]) == 25) {
                Entity.setHealth(mobs[a], 0)
            }
			if (Entity.getEntityTypeId(mobs[a]) == 26) {
                Entity.setHealth(mobs[a], 0)
            }
			if (Entity.getEntityTypeId(mobs[a]) == 27) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 32) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 33) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 34) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 35) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 36) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 37) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 38) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 39) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 40) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 41) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 42) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 43) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 44) {
                Entity.setHealth(mobs[a], 0)
            }
            if (Entity.getEntityTypeId(mobs[a]) == 45) {
                Entity.setHealth(mobs[a], 0)
            }
			if (Entity.getEntityTypeId(mobs[a]) == 46) {
                Entity.setHealth(mobs[a], 0)
            }
			if (Entity.getEntityTypeId(mobs[a]) == 47) {
                Entity.setHealth(mobs[a], 0)
            }
			if (Entity.getEntityTypeId(mobs[a]) == 48) {
                Entity.setHealth(mobs[a], 0)
            }
			if (Entity.getEntityTypeId(mobs[a]) == 100) {
                Entity.setHealth(mobs[a], 0)
            }
        }
    }
}

function killingf() {
    var mobs = Entity.getAll();
	var immobile = true;
	if(killfaura==false)immobile=false;
    for (var b = 0; b < mobs.length; b++) {
    	var uuid=mobs[b];
        var mobX = Entity.getX(mobs[b]) - getPlayerX();
        var mobY = Entity.getY(mobs[b]) - getPlayerY();
        var mobZ = Entity.getZ(mobs[b]) - getPlayerZ();
        if (mobX * mobX + mobY * mobY + mobZ * mobZ <= 20 * 20 && mobs[b] != getPlayerEnt()) {
            if (Entity.getEntityTypeId(mobs[b]) == 10) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 11) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 12) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 13) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 14) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 15) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 16) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 17) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 18) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 19) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 20) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 21) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 22) {
                Entity.setImmobile(uuid,immobile)
            }
			if (Entity.getEntityTypeId(mobs[b]) == 24) {
                Entity.setImmobile(uuid,immobile)
            }
			if (Entity.getEntityTypeId(mobs[b]) == 25) {
                Entity.setImmobile(uuid,immobile)
            }
			if (Entity.getEntityTypeId(mobs[b]) == 26) {
                Entity.setImmobile(uuid,immobile)
            }
			if (Entity.getEntityTypeId(mobs[b]) == 27) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 32) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 33) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 34) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 35) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 36) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 37) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 38) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 39) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 40) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 41) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 42) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 43) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 44) {
                Entity.setImmobile(uuid,immobile)
            }
            if (Entity.getEntityTypeId(mobs[b]) == 45) {
                Entity.setImmobile(uuid,immobile)
            }
			if (Entity.getEntityTypeId(mobs[b]) == 46) {
                Entity.setImmobile(uuid,immobile)
            }
			if (Entity.getEntityTypeId(mobs[b]) == 47) {
                Entity.setImmobile(uuid,immobile)
            }
			if (Entity.getEntityTypeId(mobs[b]) == 48) {
                Entity.setImmobile(uuid,immobile)
            }
			if (Entity.getEntityTypeId(mobs[b]) == 100) {
                Entity.setImmobile(uuid,immobile)
            }
        }
    }
}

function killingd() {
    var mobs = Entity.getAll();
    for (var c = 0; c < mobs.length; c++) {
        var mobX = Entity.getX(mobs[c]) - getPlayerX();
        var mobY = Entity.getY(mobs[c]) - getPlayerY();
        var mobZ = Entity.getZ(mobs[c]) - getPlayerZ();
        if (mobX * mobX + mobY * mobY + mobZ * mobZ <= 20 * 20 && mobs[c] != getPlayerEnt()) {
            if (Entity.getEntityTypeId(mobs[c]) == 10) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 11) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 12) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 13) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 14) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 15) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 16) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 17) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 18) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 19) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 20) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 21) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 22) {
                Entity.setFireTicks(mobs[c],5)
            }
			if (Entity.getEntityTypeId(mobs[c]) == 24) {
                Entity.setFireTicks(mobs[c],5)
            }
			if (Entity.getEntityTypeId(mobs[c]) == 25) {
                Entity.setFireTicks(mobs[c],5)
            }
			if (Entity.getEntityTypeId(mobs[c]) == 26) {
                Entity.setFireTicks(mobs[c],5)
            }
			if (Entity.getEntityTypeId(mobs[c]) == 27) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 32) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 33) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 34) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 35) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 36) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 37) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 38) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 39) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 40) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 41) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 42) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 43) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 44) {
                Entity.setFireTicks(mobs[c],5)
            }
            if (Entity.getEntityTypeId(mobs[c]) == 45) {
                Entity.setFireTicks(mobs[c],5)
            }
			if (Entity.getEntityTypeId(mobs[c]) == 46) {
                Entity.setFireTicks(mobs[c],5)
            }
			if (Entity.getEntityTypeId(mobs[c]) == 47) {
                Entity.setFireTicks(mobs[c],5)
            }
			if (Entity.getEntityTypeId(mobs[c]) == 48) {
                Entity.setFireTicks(mobs[c],5)
            }
			if (Entity.getEntityTypeId(mobs[c]) == 100) {
                Entity.setFireTicks(mobs[c],5)
            }
        }
    }
}

function killingl() {
    var mobs = Entity.getAll();
    for (var d = 0; d < mobs.length; d++) {
        var mobX = Entity.getX(mobs[d]);
        var mobY = Entity.getY(mobs[d]);
        var mobZ = Entity.getZ(mobs[d]);
        if (mobX * mobX + mobY * mobY + mobZ * mobZ <= 20 * 20 && mobs[d] != getPlayerEnt()) {
            if (Entity.getEntityTypeId(mobs[d]) == 10) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 11) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 12) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 13) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 14) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 15) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 16) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 17) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 18) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 19) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 20) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 21) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 22) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
			if (Entity.getEntityTypeId(mobs[d]) == 24) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
			if (Entity.getEntityTypeId(mobs[d]) == 25) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
			if (Entity.getEntityTypeId(mobs[d]) == 26) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
			if (Entity.getEntityTypeId(mobs[d]) == 27) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 32) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 33) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 34) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 35) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 36) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 37) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 38) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 39) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 40) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 41) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 42) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 43) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 44) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
            if (Entity.getEntityTypeId(mobs[d]) == 45) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
			if (Entity.getEntityTypeId(mobs[d]) == 46) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
			if (Entity.getEntityTypeId(mobs[d]) == 47) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
			if (Entity.getEntityTypeId(mobs[d]) == 48) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
			if (Entity.getEntityTypeId(mobs[d]) == 100) {
                Level.spawnMob(Entity.getX(mobs[d]), Entity.getY(mobs[d]), Entity.getZ(mobs[d]), EntityType.LIGHTNING_BOLT);
            }
        }
    }
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
if(deadchat)if(blockId == 63 || blockId == 68){
	var notex = x;
	var notey = y;
	var notez = z;
	
	signEditor();
}

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
	Server.getPort();
        if(Server.getPort()=="0")setPosition(Player.getEntity(), x, y, z);
Server.sendChat("/tp " + Player.getName(Player.getEntity()) + space + x + space + y + space + z);

}
if(tapnuke)explode(x,y,z,5);
if(tapid)clientMessage(client + "Block ID: "+blockId+" Item ID: "+itemId+"\n"+" X: "+x+" Y: "+y+" Z: "+z);
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
if(lightningaura) {
	
	killingl();
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
			clientMessage(client + "You were at void!");
			Server.sendChat("/spawn");
			Server.getPort();
                	if(Server.getPort()=="0")setPosition(Player.getEntity(), getPlayerX(), 65, getPlayerZ()+5);
		}
	}
	if(glide){
if(Entity.getVelY(Player.getEntity()) <= 0){
setVelY(Player.getEntity(), -0.05)
}
}
if(coords)ModPE.showTipMessage(client + "x"+Math.round(getPlayerX())+", y"+Math.round(getPlayerY())+", z"+Math.round(getPlayerZ()));
if(armor)ModPE.showTipMessage(client + "\n\nHead: " + Entity.getArmorDamage(getPlayerEnt(), 0) + " Chest: " + Entity.getArmorDamage(getPlayerEnt(), 1) + " Legs: " + Entity.getArmorDamage(getPlayerEnt(), 2) + " Feet: " + Entity.getArmorDamage(getPlayerEnt(), 3));
if(autonuke)explode(getPlayerX(),getPlayerY(),getPlayerZ(),5);
if(grief)Level.setTile(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), vid, 0);
if(jump){
	if(Entity.getVelY(getPlayerEnt())< -0.1){
		setVelY(getPlayerEnt(),0.8);
		}
	}
if(getvel){
ModPE.showTipMessage("VelX: "+Math.round(Entity.getVelX(getPlayerEnt()))+" VelY "+Math.round(Entity.getVelY(getPlayerEnt()))+" VelZ "+Math.round(Entity.getVelZ(getPlayerEnt())));
}
if(yawpitch){
ModPE.showTipMessage("pitch: "+Math.round(getPitch(getPlayerEnt()))+" \nYaw: "+Math.round(getYaw(getPlayerEnt()))+" ");
}
if(airwalk){
if(Level.getTile(getPlayerX(), getPlayerY() -2, getPlayerZ())=="0"){
	Level.setTile(getPlayerX() +1, getPlayerY() -2, getPlayerZ(), 95, 0);
	 Level.setTile(getPlayerX() +2, getPlayerY() -2, getPlayerZ(), 95, 0);
	 Level.setTile(getPlayerX() +3, getPlayerY() -2, getPlayerZ(), 95, 0);
	 Level.setTile(getPlayerX() +4, getPlayerY() -2, getPlayerZ(), 95, 0);
	 Level.setTile(getPlayerX() -1, getPlayerY() -2, getPlayerZ(), 95, 0);
	 Level.setTile(getPlayerX() -2, getPlayerY() -2, getPlayerZ(), 95, 0);
	 Level.setTile(getPlayerX() -3, getPlayerY() -2, getPlayerZ(), 95, 0);
	 Level.setTile(getPlayerX() -4, getPlayerY() -2, getPlayerZ(), 95, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ(), 95, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ() +1, 95, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ() +2, 95, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ() +3, 95, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ() +4, 95, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ() -1, 95, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ() -2, 95, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ() -3, 95, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ() -4, 95, 0);
	}
}
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

function fov() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
fov = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var xy = new android.widget.EditText(ctx);
var fovs = new android.widget.SeekBar(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Slide to edit fov");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();

Layer.addView(fovs);
Layer.addView(Exit);

var fovsProgress = 0;
      fovs.setMax(10);
      fovs.setProgress(fovsProgress);
      fovs.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
      {
      onStopTrackingTouch: function(view)
      {
      fovsProgress=fovs.getProgress();
      if(fovsProgress==0)
      {
      ModPE.resetFov(); fovsProgress=0; (0/10)
      }
      if(fovsProgress==1)
      {
      ModPE.setFov(10); fovsProgress=1; (1/10)
      }
      if(fovsProgress==2)
      {
      ModPE.setFov(20); fovsProgress=2; (2/10)
      }
      if(fovsProgress==3)
      {
      ModPE.setFov(30); fovsProgress=3; (3/10)
      }
if(fovsProgress==4)
{
ModPE.setFov(40); fovsProgress=4; (4/10)
}
if(fovsProgress==5)
{
ModPE.setFov(50); fovsProgress=5; (5/10)
}
if(fovsProgress==6)
{
ModPE.setFov(60); fovsProgress=6; (6/10)
}
if(fovsProgress==7)
{
ModPE.setFov(70); fovsProgress=7; (7/10)
}
if(fovsProgress==8)
{
ModPE.setFov(80); fovsProgress=8; (8/10)
}
if(fovsProgress==9)
{
ModPE.setFov(90); fovsProgress=9; (9/10)
}
if(fovsProgress==3)
{
ModPE.setFov(100); fovsProgress=10; (10/10)
}
      }
      });
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){

Dialog.dismiss();
showMenuBtn();
}
});

fov.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
fov.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
fov.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The fov Dialog Is Malfunctioning:"+e);
}
}});
}

function signEditor() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var xy = new android.widget.EditText(ctx);
var xy2 = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter sign line & text");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(xy);
Layer.addView(xy2);
Layer.addView(Exit);

xy.setText("");
xy.setHint("Sign line: (0-3)");
xy2.setText("");
xy2.setHint("New sign text");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
text4 =xy.getText();
line4 =xy2.getText();
Level.setSignText(notex, notey, notez, text4, line4);
Dialog.dismiss();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The signer Dialog Is Malfunctioning:"+e);
}
}});
}

function save() {
        var file = new java.io.File( android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/AlphaHackPE/homes/", "home " + Level.getWorldDir() + ".txt/");
        var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/AlphaHackPE/homes/" ; 
        java.io.File(path).mkdirs(); 
        file.createNewFile();
        var write = new java.io.OutputStreamWriter(new java.io.FileOutputStream(file));
        var string="";
        write.append(xhome.toString());
        write.append(","+ yhome.toString());
        write.append(","+ zhome.toString()); 
        write.close();
         
    } 
 
function load(){
 var line, string = "";
    var file = new java.io.File( android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/AlphaHackPE/homes/", "home " + Level.getWorldDir() + ".txt/");
    var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/AlphaHackPE/homes/"; 
    if(!file.exists()){
    clientMessage(client + "The home doesn't exist"); 
  java.io.File(path).mkdirs(); 
    }
    else {
    var readfile = new java.io.BufferedReader(new java.io.FileReader(file));
    while((line = readfile.readLine()) != null) {
        var t1 = line + java.lang.System.getProperty("line.seperator");
        string += t1.substring(0, t1.length - 4);
        var t2 = line;
        if((line = readfile.readLine()) != null) string += "\n";
        line = t2;
    } 
    xhome=parseInt(string.split(",")[0]);    
    yhome= parseInt(string.split(",")[1]);
    zhome= parseInt(string.split(",")[2]);
    Entity.setPosition(Player.getEntity(),xhome,yhome,zhome);       
    }
}

function leaveGame() {
ModPE.setGameSpeed(20);
var liquidwalk = false;
var xray = false;
var ttot = false;
var antivoid = false;
var armor = false;
var coords = false;
var glide = false;
var tapspam = false;
var tapdestroy = false;
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
}

function getNearestEntity(maxrange) {
			var mobs = Entity.getAll();
			var players = Server.getAllPlayers();
			var small = maxrange;
			var ent = null;
			for (var i = 0; i < mobs.length; i++) {
				var x = Entity.getX(mobs[i]) - getPlayerX();
				var y = Entity.getY(mobs[i]) - getPlayerY();
				var z = Entity.getZ(mobs[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				if (dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1) {
					small = dist;
					ent = mobs[i];
				}
			}
			for (var i = 0; i < players.length; i++) {
				var x = Entity.getX(players[i]) - getPlayerX();
				var y = Entity.getY(players[i]) - getPlayerY();
				var z = Entity.getZ(players[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
					small = dist;
					ent = players[i];
				}
			}
			return ent;
		}

function crosshairAimAt(ent, pos) {
							if(ent != null) {
				var x = Entity.getX(ent) - getPlayerX();
				var y = Entity.getY(ent) - getPlayerY();
				var z = Entity.getZ(ent) - getPlayerZ();
				if(pos != null && pos instanceof Array) {

					x = Entity.getX(ent) - pos[0];
					y = Entity.getY(ent) - pos[1];
					z = Entity.getZ(ent) - pos[2];
				}
				if(Entity.getEntityTypeId(ent) != 63)
					y += 0.5;
				var a = 0.5 + Entity.getX(ent);
				var b = Entity.getY(ent);
				var c = 0.5 + Entity.getZ(ent);
				var len = Math.sqrt(x * x + y * y + z * z);
				var y = y / len;
				var pitch = Math.asin(y);
				pitch = pitch * 180.0 / Math.PI;
				pitch = -pitch;
				var yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
				if(pitch < 89 && pitch > -89) {
					Entity.setRot(Player.getEntity(), yaw, pitch);
				}
			}
  }

function rptask3() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function () {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function () {
                if(antispam){
                	offtime++
                        Server.sendChat(offtime+" "+text+" "+offtime);
                        Server.getPort();
                	if(Server.getPort()=="0")clientMessage(offtime+" "+text+" "+offtime);
                    }
                    nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask3())
                }
            }), seconds)
        }
    }))
}
rptask3()

function rptask2() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function () {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function () {
                if(chestesp){
                var x = getPlayerX();
 		var y = getPlayerY();
 		var z = getPlayerZ();
 		var newX;
 		var newY;
 		var newZ;
 		for(var blockX = - chestTracersRange; blockX <= chestTracersRange; blockX++) {
 			for(var blockY = - chestTracersRange; blockY <= chestTracersRange; blockY++) {
 				for(var blockZ = - chestTracersRange; blockZ <= chestTracersRange; blockZ++) {
 					newX = x + blockX;
  					newY = y + blockY;
  					newZ = z + blockZ;
  					if(getTile(newX, newY, newZ) == 54 || getTile(newX, newY, newZ) == 23) {
						AlphaHack.drawTracer(newX, newY, newZ, chestTracersGroundMode=="on"?true:false, chestTracersParticle);
  					}
  				}
  			}
 		}
                    }
                    if(playeresp){
                    	
                    }
                    nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask2())
                }
            }), 2000)
        }
    }))
}
rptask2()

                	

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
                    if(test2){
                    	ModPE.getMinecraftVersion();
                    	if(ModPE.getMinecraftVersion()=="0.10.0"){
                    		ModPE.leaveGame();
                    		print("OUTDATED MINECRAFT");
                    	}
                    }
                    if (autospam) {
                        Server.sendChat(text);
                        Server.getPort();
                	if(Server.getPort()=="0")clientMessage(text);
                    }
                    if(hackk){
                    	numhack++
                    	Server.sendChat("/login "+numhack);
                    	clientMessage(client + "Trying: "+numhack);
                    }
                    if (autodestroy) {
                        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), true);
                    }
                    if (extraj){
                    	Level.destroyBlock(Player.getPointedBlockX() +1, Player.getPointedBlockY(), Player.getPointedBlockZ() +1, vidd);
	Level.destroyBlock(Player.getPointedBlockX() +2, Player.getPointedBlockY(), Player.getPointedBlockZ() +2, vidd);
	Level.destroyBlock(Player.getPointedBlockX() +3, Player.getPointedBlockY(), Player.getPointedBlockZ() +3, vidd);
	Level.destroyBlock(Player.getPointedBlockX() +4, Player.getPointedBlockY(), Player.getPointedBlockZ() +4, vidd);
	
    Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), vidd);

	Level.destroyBlock(Player.getPointedBlockX() -1, Player.getPointedBlockY(), Player.getPointedBlockZ() -1, vidd);
	Level.destroyBlock(Player.getPointedBlockX() -2, Player.getPointedBlockY(), Player.getPointedBlockZ() -2, vidd);
	Level.destroyBlock(Player.getPointedBlockX() -3, Player.getPointedBlockY(), Player.getPointedBlockZ() -3, vidd);
	Level.destroyBlock(Player.getPointedBlockX() -4, Player.getPointedBlockY(), Player.getPointedBlockZ() -4, vidd);
                    }
                    if(aimbot) {
			var ent = getNearestEntity(7);
			if(ent != null) crosshairAimAt(ent);
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
