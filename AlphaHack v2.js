var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
/*
A͎̝͎͎̔͒̄ͯͤ́̍̚_͇̦̦̭ͥͪl̮̗̙̒̾_̣̭̠ͮͬp̥͚̯ͥ̉͒̆͋_̜͍̹̲̌̎͋̂ͭ̓ͥh̜̭̺ͪ͑_͔̗̮̼̺̰̰̳̄́̐͂ả̪̰̙̞͈̤̪͎͈͆_̳̱̘̗͙̪̖̖͐_̜̥͕̝̹̏ͪ͆̋̒̽̚ͅH͎̹̪̱͇̖̼͋̉_͉̯͇͖̜͈̖ͨ͆̔͊͛͑̀a̩͖̺͖̗̮̭͊ͮ͒̚_͇̲̀̈ͬ̆ͫ̊̒́c̙̹̼͚͒͋́͑ͧͪ̅ͩ_̫̮̮̤̺̯͉̠̠̽͊͊͛̇̀̾̐ḵ͕͖̉_̜̻̪͓̖͖ͩͯ̾̾̒̑̅̍ͪ_̣͕̤̓́̿̓͂͆̃̐P̰͕̾ͨE̬͎̪̹͎̖̠̋͒̓͑̅̀ͧͬͅ_̫̞̄͊_̙͕͎̱ͭͨ͑v̪͖̹͈̻̣͍͗̽̈̊̽̆̉͐2̬͔ͫͭͤ̓̈̔ͥ
</>--------------------</>
[AlphαHαck by: ArceusMαtt (c) 2016];
</>--------------------</>
[Free to use mod menu for MCPE under MIT license];
</>--------------------</>
[Pleαse contαct the developers of eαch code for permission to copy.];
</>--------------------</>
[contributors: Godsoft029, Johnmαcrocrαft, αJ170, Peαcestorm(αgαmeR), Firepro9978, αPRIC0CKS, Vertex client teαm];
</>--------------------</>
A͎̝͎͎̔͒̄ͯͤ́̍̚_͇̦̦̭ͥͪl̮̗̙̒̾_̣̭̠ͮͬp̥͚̯ͥ̉͒̆͋_̜͍̹̲̌̎͋̂ͭ̓ͥh̜̭̺ͪ͑_͔̗̮̼̺̰̰̳̄́̐͂ả̪̰̙̞͈̤̪͎͈͆_̳̱̘̗͙̪̖̖͐_̜̥͕̝̹̏ͪ͆̋̒̽̚ͅH͎̹̪̱͇̖̼͋̉_͉̯͇͖̜͈̖ͨ͆̔͊͛͑̀a̩͖̺͖̗̮̭͊ͮ͒̚_͇̲̀̈ͬ̆ͫ̊̒́c̙̹̼͚͒͋́͑ͧͪ̅ͩ_̫̮̮̤̺̯͉̠̠̽͊͊͛̇̀̾̐ḵ͕͖̉_̜̻̪͓̖͖ͩͯ̾̾̒̑̅̍ͪ_̣͕̤̓́̿̓͂͆̃̐P̰͕̾ͨE̬͎̪̹͎̖̠̋͒̓͑̅̀ͧͬͅ_̫̞̄͊_̙͕͎̱ͭͨ͑v̪͖̹͈̻̣͍͗̽̈̊̽̆̉͐2̬͔ͫͭͤ̓̈̔ͥ
*/

var MainActivity = ctx;

//Get language of client side minecraft
var getLanguage = ModPE.getLanguage();
/*Thanks to godsoft029 and many others for german translate*/
/*thanks to MasterProGame & TheNewHEROBRINE for italian translate*/
/*thanks to walpo for spanish translate*/

//get version of client side minecraft
var getVer = ModPE.getMinecraftVersion();

//GUI android ModPE lib;
//xml button
var Button = android.widget.Button;
//xml linearLayout
var LinearLayout = android.widget.LinearLayout;
//xml relative layout
var RelativeLayout = android.widget.RelativeLayout;
//xml popup window
var PopupWindow = android.widget.PopupWindow;
//xml scroll view
var ScrollView = android.widget.ScrollView;
//xml textview
var TextView = android.widget.TextView;
//xml checkbox
var CheckBox = android.widget.CheckBox;
//java toast
var Toast = android.widget.Toast;
//modpe android runnable
var Runnable = java.lang.Runnable;
//java view
var View = android.view.View;
//xml colorDrawable
var ColorDrawable = android.graphics.drawable.ColorDrawable;
//xml color
var Color = android.graphics.Color;
//xml gravity
var Gravity = android.view.Gravity;
//java intent
var Intent = android.content.Intent;
//java uri
var Uri = android.net.Uri;
//xml switch
var Switch = android.widget.Switch;
//xml edittext
var EditText = android.widget.EditText;
var Dialog = android.app.Dialog;
//xml webview
var WebView = android.webkit.WebView;
var Alert = android.app.AlertDialog.Builder;

//Defines
//define gui incase of error
var GUI;
//define menu incase of error
var menu;
//define active incase of error
var active;
var update;
var newUpdate;
//define counting variable
var num0 = 0;
//idek
var vidd = true;
//define mcpe text color variable
var viddd = "§9";
//define spam text name
var text = "AlphαHαck!";
//define an auto space variable
var space = " ";
//define version
var version = "0.8.4";
//if version is version change version to beta
if(version=="0.8.4")version = "Beta";
//tracer define length
var chestTracersRange = 10;
//tracer define mode
var chestTracersGroundMode = "on";
//tracer define particle
var chestTracersParticle = "on";
var playerTracersRange = 10;
var playerTracersGroundMode = "on";
var playerTracersParticle = "on";
var oreTracersRange = 10;
var oreTracersGroundMode = "on";
var oreTracersParticle = "on";
var offtime = 0;
//define an empty text variable
var horseheart = "";
var newage = "";
var vid = "11";
var seconds = "1000";
var numhack = 0;
//define client name for later use
var client = "§f<§9AlphαHαck§f> ";
//define copyright sign
var copyright = "©";
//define trademark for later use
var trademark = "AlphaHackPE ™";
var modpeFolder = ctx.getDir("ModPE", 0);
var modpeFile = new java.io.File(modpeFolder, "AlphaHack v2.js");
//define op perm
var perm = "*";
//define something
var notex;
var notey;
var notez;
var oreId = "";
var numhack2 = 0;
var TTick = 0;
var hide = false;
var newAction = "";

var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math["PI"] / 180;

var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;

//player check utils
var Utils = {
	
            Block: {
                 isLiquid: function (id) {
			if(id >= 8 && id <= 11) return true;
			return false;
		         }
            },
            Player: {
                isInWater: function () {
			if(Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) {
            return true;
            } else {
			return false;
			  m    }
		    },
                isOnGround: function () {
			var y = getPlayerY();
			while(y > 1) y -= 1;
			if((Math.round(y * 100) >= 61 && Math.round(y * 100) <= 63) && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) {
            return true;
            }
			if((Math.round(y * 100) >= 11 && Math.round(y * 100) <= 13) && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) {
            return true;
            } else {
			return false;
			  }
		    },
            isCollidedHorizontally: function() {
			var x = getPlayerX();
			var z = getPlayerZ();
			var blockX = Math.round(x - 0.5);
			var blockZ = Math.round(z - 0.5);
			while(x < 1) x += 1;
			while(z < 1) z += 1;
			while(x > 1) x -= 1;
			while(z > 1) z -= 1;

			if(Math.round(x * 100) == 31) x -= 0.01;
			if(Math.round(z * 100) == 31) z -= 0.01;
			if(Math.round(x * 100) == 69) x += 0.01;
			if(Math.round(z * 100) == 69) z += 0.01;
			if(Math.round(x * 100) == 30) blockX--;
			if(Math.round(z * 100) == 30) blockZ--;
			if(Math.round(x * 100) == 70) blockX++;
			if(Math.round(z * 100) == 70) blockZ++;
			//clientMessage(blockX+";"+blockZ);
			if(getTile(blockX, getPlayerY(), blockZ) == 0 && getTile(blockX, getPlayerY() - 1, blockZ) == 0) return false;

			if(Block.getDestroyTime(getTile(blockX, getPlayerY() - 1, blockZ)) <= 0.1 && Block.getDestroyTime(getTile(blockX, getPlayerY(), blockZ)) <= 0.1) return false;

			if(Math.round(x * 100) == 30 || Math.round(x * 100) == 70) return true;
			if(Math.round(z * 100) == 30 || Math.round(z * 100) == 70) return true;
			return false;
		}
	}
};

//define on or off variables
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
var oreEsp = false;
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
var changeSpeed = false;
var brightness = false;
var lowhealth = false;
var fasteat = false;
var oreEsp2 = false;
var hackk2 = false;
var spider = false;
var autowalk = false;
var jetpack = false;
var tapjump = false;
var betterJumps = false;
var morphEnhance = false;
var twerk = false;
var tpAura = false;
var hitBehind = false;
var hitJump = false;
var nametags = false;
var attackActions = false;
var keepHotbar = false;
var itemIndi = false;
var bhop = false;
var alphatext = false;
var binarytext = false;
var zalgotext = false;
var striketext = false;
var belowblock = false;
var preventsame = false;
var hitparticles = false;

var showActive = false;
var showActive2 = false;
var betaTestMenu = false;

var lightning = false;
var primedtnt = false;
var arrow = false;
var exporb = false;

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

//define mod menu color changes and sizes
var GUIColor = Color.TRANSPARENT;

var default1 = true;
var mcpetheme = false;

var btnPos = Gravity.RIGHT;
var activePos = Gravity.LEFT;

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

var GUIBtns = Color.BLUE;

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

var GUIStroke = Color.BLUE;

var GUIStroke1 = Color.BLUE;
var GUIStroke2 = Color.BLACK;
var GUIStroke3 = Color.WHITE;
var GUIStroke4 = Color.RED;
var GUIStroke5 = Color.BLUE;
var GUIStroke6 = Color.GRAY;
var GUIStroke7 = Color.LTGRAY;
var GUIStroke8 = Color.YELLOW;
var GUIStroke9 = Color.CYAN;
var GUIStroke10 = Color.DKGRAY;
var GUIStroke11 = Color.GREEN;
var GUIStroke12 = Color.MAGENTA;

var GUISize = "2";

//tracer draw function || variable
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
                /*var c = u.openConnection();
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
}*/
		        var u = new java.net.URL("https://raw.githubusercontent.com/ArceusMatt/AlphaHack-v2/master/Version.txt");
			var update = new java.lang.StringBuilder();
			var reader = new java.io.BufferedReader(new java.io.InputStreamReader(u.openStream()));
			var line = "";
		        while ((line = reader.readLine()) != null) {
				update.append(line);
					}
		        reader.close();
			newUpdate = update.toString().split("\n");
		        if(newUpdate!=version)clientMessage("New update test");
		        if(newUpdate==version)clientMessage("No update test");
                }catch(e){
                	
                clientMessage(e+"");
                
                clientMessage(e.lineNumber);
                
                }
                }});
                var th = new java.lang.Thread(r);
    th.start();
                }

//run mod message or other on world startup
function newLevel(){ 
clientMessage("§2≡≡=======»§a>§9 α §a<§2«======≡≡§f§r");
clientMessage(client + "\n§aKik§f: ArceusMatt" + "\n" + "§bTwitter§f: @ArceusMatt" + "\n" + "§cGoogle+§f: Arceus matt" + "\n" + "§fYou§4tube§f: Arceus Matt");
clientMessage("§2≡≡=======»§a>§9 α §a<§2«======≡≡§f§r\n\n");
getUpdate(function(info){});
}

//change mcpe color text with the remaining text
ModPE.langEdit("menu.copyright", "AlphαHαckPE");
ModPE.langEdit("menu.generatingLevel","§l§e" + "Loading...\nFiles, wifi, mods & chunks.");
ModPE.langEdit("menu.generatingTerrain","§l§e" + "Loading...\nFiles, wifi, mods & chunks.");
ModPE.langEdit("menu.loadingLevel","§l§e" + "Loading...\nFiles, wifi, mods & chunks.");
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
ModPE.langEdit("playscreen.new",viddd + ModPE.getI18n("playscreen.new"));
ModPE.langEdit("skins.restore.button",viddd + ModPE.getI18n("skins.restore.button"));
ModPE.langEdit("externalServerScreen.addServer",viddd + ModPE.getI18n("externalServerScreen.addServer"));
ModPE.langEdit("playscreen.quit",viddd + ModPE.getI18n("playscreen.quit"));
ModPE.langEdit("chatScreen.hide",viddd + ModPE.getI18n("chatScreen.hide"));
ModPE.langEdit("xbox.signin",viddd + ModPE.getI18n("xbox.signin"));
ModPE.langEdit("xbox.signout",viddd + ModPE.getI18n("xbox.signout"));
ModPE.langEdit("entity.generic.name",viddd + ModPE.getI18n("entity.generic.name"));
ModPE.langEdit("gui.back",viddd + ModPE.getI18n("gui.back"));
ModPE.langEdit("chestScreen.header.large",viddd + ModPE.getI18n("chestScreen.header.large"));
ModPE.langEdit("chestScreen.header.player",viddd + ModPE.getI18n("chestScreen.header.player"));
ModPE.langEdit("chestScreen.header.small",viddd + ModPE.getI18n("chestScreen.header.small"));
ModPE.langEdit("networkWorld.add_friend",viddd + ModPE.getI18n("networkWorld.add_friend"));
ModPE.langEdit("furnaceScreen.header",viddd + ModPE.getI18n("furnaceScreen.header"));
ModPE.langEdit("craftingScreen.header",viddd + ModPE.getI18n("craftingScreen.header"));
ModPE.langEdit("anvilScreen.header",viddd + ModPE.getI18n("anvilScreen.header"));
ModPE.langEdit("enchantingScreen.header",viddd + ModPE.getI18n("enchantingScreen.header"));
ModPE.langEdit("enchantingTableScreen.header",viddd + ModPE.getI18n("enchantingTableScreen.header"));
ModPE.langEdit("enchantScreen.header",viddd + ModPE.getI18n("enchantScreen.header"));
ModPE.langEdit("enchantTableScreen.header",viddd + ModPE.getI18n("enchantTableScreen.header"));
ModPE.langEdit("beaconScreen.header",viddd + ModPE.getI18n("beaconScreen.header"));
ModPE.langEdit("container.beacon",viddd + ModPE.getI18n("container.beacon"));
ModPE.langEdit("container.brewing",viddd + ModPE.getI18n("container.brewing"));
ModPE.langEdit("container.chest",viddd + ModPE.getI18n("container.chest"));
ModPE.langEdit("container.chestDouble",viddd + ModPE.getI18n("container.chestDouble"));
ModPE.langEdit("container.crafting",viddd + ModPE.getI18n("container.crafting"));
ModPE.langEdit("container.dispenser",viddd + ModPE.getI18n("container.dispenser"));
ModPE.langEdit("container.dropper",viddd + ModPE.getI18n("container.dropper"));
ModPE.langEdit("container.enchant",viddd + ModPE.getI18n("container.enchant"));
ModPE.langEdit("container.furnace",viddd + ModPE.getI18n("container.furnace"));
ModPE.langEdit("container.hopper",viddd + ModPE.getI18n("container.hopper"));
ModPE.langEdit("container.inventory",viddd + ModPE.getI18n("container.inventory"));
ModPE.langEdit("container.minecart",viddd + ModPE.getI18n("container.minecart"));
ModPE.langEdit("container.stonecutter",viddd + ModPE.getI18n("container.stonecutter"));
ModPE.langEdit("container.anvil",viddd + ModPE.getI18n("container.anvil"));
ModPE.langEdit("container.enchantingTable",viddd + ModPE.getI18n("container.enchantingTable"));
ModPE.langEdit("container.enchantmentTable",viddd + ModPE.getI18n("container.enchantmentTable"));
ModPE.langEdit("selectWorld.create",viddd + ModPE.getI18n("selectWorld.create"));
ModPE.langEdit("tile.enchanting_table.name",viddd + ModPE.getI18n("tile.enchanting_table.name"));
ModPE.langEdit("tile.anvil.name",viddd + ModPE.getI18n("tile.anvil.name"));
ModPE.langEdit("container.enderchest",viddd + ModPE.getI18n("container.enderchest"));
ModPE.langEdit("cauldronScreen.header",viddd + ModPE.getI18n("cauldronScreen.header"));
ModPE.langEdit("externalServerScreen.header",viddd + ModPE.getI18n("externalServerScreen.header"));
ModPE.langEdit("gui.achievements",viddd + ModPE.getI18n("gui.achievements"));
ModPE.langEdit("gui.done",viddd + ModPE.getI18n("gui.done"));
ModPE.langEdit("skins.picker.title",viddd + ModPE.getI18n("skins.picker.title"));
ModPE.langEdit("skins.picker.accept.button",viddd + ModPE.getI18n("skins.picker.accept.button"));
ModPE.langEdit("options.title",viddd + ModPE.getI18n("options.title"));
ModPE.langEdit("death.attack.mob",viddd + ModPE.getI18n("death.attack.mob"));
ModPE.langEdit("death.attack.fall",viddd + ModPE.getI18n("death.attack.fall"));
ModPE.langEdit("death.attack.explosion",viddd + ModPE.getI18n("death.attack.explosion"));
ModPE.langEdit("death.attack.arrow",viddd + ModPE.getI18n("death.attack.arrow"));
ModPE.langEdit("death.attack.drown",viddd + ModPE.getI18n("death.attack.drown"));
ModPE.langEdit("death.fell.accident.generic",viddd + ModPE.getI18n("death.fell.accident.generic"));
ModPE.langEdit("death.attack.outOfWorld",viddd + ModPE.getI18n("death.attack.outOfWorld"));
ModPE.langEdit("death.attack.onFire",viddd + ModPE.getI18n("death.attack.onFire"));
ModPE.langEdit("death.attack.magic",viddd + ModPE.getI18n("death.attack.magic"));
ModPE.langEdit("death.attack.inWall",viddd + ModPE.getI18n("death.attack.inWall"));
ModPE.langEdit("death.attack.lava",viddd + ModPE.getI18n("death.attack.lava"));
ModPE.langEdit("death.attack.inFire",viddd + ModPE.getI18n("death.attack.inFire"));
ModPE.langEdit("death.attack.cactus",viddd + ModPE.getI18n("death.attack.cactus"));
ModPE.langEdit("death.attack.anvil",viddd + ModPE.getI18n("death.attack.anvil"));
ModPE.langEdit("death.attack.fireball",viddd + ModPE.getI18n("death.attack.fireball"));
ModPE.langEdit("death.attack.generic",viddd + ModPE.getI18n("death.attack.generic"));
ModPE.langEdit("death.attack.lightningBolt",viddd + ModPE.getI18n("death.attack.lightningBolt"));
ModPE.langEdit("death.attack.player",viddd + ModPE.getI18n("death.attack.player"));
ModPE.langEdit("death.attack.starve",viddd + ModPE.getI18n("death.attack.starve"));
ModPE.langEdit("death.attack.thorns",viddd + ModPE.getI18n("death.attack.thorns"));
ModPE.langEdit("death.attack.wither",viddd + ModPE.getI18n("death.attack.wither"));

//new block destroy time
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

//layout dip2px
function dip2px(dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

/*var bg64 = "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";
*/

//base64 icon
var bg64 = "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";

//base64 mcpe button
var buttonBg = "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";

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

//dismissable or showable function
function showMenuBtn(){
	//main button
MainActivity.runOnUiThread(new Runnable({ run: function(){
    try{
        var layout = new LinearLayout(MainActivity);
        layout.setOrientation(1);
        var menuBtn = new Button(MainActivity);
        menuBtn.setTextSize(26);
        if(hide==false)menuBtn.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(bg64, 0) , 0, android.util.Base64.decode(bg64, 0).length)));
        if(hide==true)menuBtn.setText("α");
        menuBtn.setOnClickListener(new View.OnClickListener({
            onClick: function(viewarg){
        active.dismiss();
mainMenu();
GUI.dismiss();
if(getLanguage=="en_US")Toast.makeText(MainActivity, "Scroll down", 1).show();
 if(getLanguage=="de_DE")Toast.makeText(MainActivity, "Scroll nach unten", 1).show();
if(getLanguage=="es_MX")Toast.makeText(MainActivity, "Baja abajo", 1).show();
            }
        }));
        layout.addView(menuBtn);
 
        GUI = new PopupWindow(layout, dip2px(45), dip2px(45)); 

        if(hide==true)menuBtn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
	GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        GUI.showAtLocation(MainActivity.getWindow().getDecorView(), btnPos | Gravity.TOP, 0, 120);
        }catch(err){
            Toast.makeText(MainActivity, "An error occured: " + err, 1).show();
        }
    }}));
}
showMenuBtn();
activeView();

//layout to show active variables

function activeView(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var activeLayout = new LinearLayout(MainActivity);
            
            var activeScroll = new ScrollView(MainActivity);
            
            var activeLayout1 = new LinearLayout(MainActivity);
            activeLayout.setOrientation(1);
            activeLayout1.setOrientation(1);
            
            activeScroll.addView(activeLayout);
            activeLayout1.addView(activeScroll);
			
	    var a1 = new TextView(MainActivity);
            a1.setTextSize(10);
            if(aimaura==true)a1.setText("AimAura");
            if(aimaura==false)a1.setText("");
	    if(aimaura==false)a1.setTextColor(Color.RED);
            if(aimaura==true)a1.setTextColor(Color.GREEN);
			a1.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             a1.setTextColor(Color.RED);
aimbot = false;
aimed = false;
aimaura = false;
			}
		});
		activeLayout.addView(a1);
		
		var a2 = new TextView(MainActivity);
            a2.setTextSize(10);
            if(liquidwalk==true)a2.setText("LiquidWalk");
            if(liquidwalk==false)a2.setText("");
	    if(liquidwalk==false)a2.setTextColor(Color.RED);
            if(liquidwalk==true)a2.setTextColor(Color.GREEN);
			a2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             a2.setTextColor(Color.RED);
			 liquidwalk = false;
			}
		});
		activeLayout.addView(a2);
		
		var a3 = new TextView(MainActivity);
            a3.setTextSize(10);
            if(xray==true)a3.setText("X-ray");
            if(xray==false)a3.setText("");
	    if(xray==false)a3.setTextColor(Color.RED);
            if(xray==true)a3.setTextColor(Color.GREEN);
			a3.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             a3.setTextColor(Color.RED);
			 xray = false;
			}
		});
		activeLayout.addView(a3);
		
		var a4 = new TextView(MainActivity);
            a4.setTextSize(10);
            if(glide==true)a4.setText("Glide");
            if(glide==false)a4.setText("");
	    if(glide==false)a4.setTextColor(Color.RED);
            if(glide==true)a4.setTextColor(Color.GREEN);
			a4.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             a4.setTextColor(Color.RED);
			 glide = false;
			}
		});
		activeLayout.addView(a4);
		
		var a5 = new TextView(MainActivity);
            a5.setTextSize(10);
            if(autospam==true)a5.setText("AutoSpam");
            if(autospam==false)a5.setText("");
	    if(autospam==false)a5.setTextColor(Color.RED);
            if(autospam==true)a5.setTextColor(Color.GREEN);
			a5.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             a5.setTextColor(Color.RED);
			 autospam = false;
			 autospam2 = false;
			}
		});
		activeLayout.addView(a5);
		
		var a6 = new TextView(MainActivity);
            a6.setTextSize(10);
            if(autospam==true)a6.setText("AutoDestroy");
            if(extraj==true)a6.setText("AutoDestroy 2");
            if(autospam==false)a6.setText("");
	    if(autospam==false)a6.setTextColor(Color.RED);
            if(autospam==true)a6.setTextColor(Color.GREEN);
			a6.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             a6.setTextColor(Color.RED);
			 autodestroy = false;
			 autodestroy2 = false;
			 extraj = false;
			}
		});
		activeLayout.addView(a6);
		
		var a7 = new TextView(MainActivity);
            a7.setTextSize(10);
            if(coords==true)a7.setText("XYZ");
            if(coords==false)a7.setText("");
	    if(coords==false)a7.setTextColor(Color.RED);
            if(coords==true)a7.setTextColor(Color.GREEN);
			a7.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             a7.setTextColor(Color.RED);
			 coords = false;
			}
		});
		activeLayout.addView(a7);
		
		var a8 = new TextView(MainActivity);
            a8.setTextSize(10);
            if(chestesp==true)a8.setText("ChestESP");
            if(chestesp==false)a8.setText("");
	    if(chestesp==false)a8.setTextColor(Color.RED);
            if(chestesp==true)a8.setTextColor(Color.GREEN);
			a8.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             a8.setTextColor(Color.RED);
			 chestesp = false;
			}
		});
		activeLayout.addView(a8);
		
		var a9 = new TextView(MainActivity);
            a9.setTextSize(10);
            if(tapjump==true)a9.setText("TapJump");
            if(tapjump==false)a9.setText("");
	    if(tapjump==false)a9.setTextColor(Color.RED);
            if(tapjump==true)a9.setTextColor(Color.GREEN);
			a9.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             a9.setTextColor(Color.RED);
			 tapjump = false;
			}
		});
		activeLayout.addView(a9);
		
		var a10 = new TextView(MainActivity);
            a10.setTextSize(10);
            if(spider==true)a10.setText("Spider");
            if(spider==false)a10.setText("");
	    if(spider==false)a10.setTextColor(Color.RED);
            if(spider==true)a10.setTextColor(Color.GREEN);
			a10.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             a10.setTextColor(Color.RED);
			 spider = false;
			}
		});
		activeLayout.addView(a10);
		
		var a11 = new TextView(MainActivity);
            a11.setTextSize(10);
            if(autowalk==true)a11.setText("AutoWalk");
            if(autowalk==false)a11.setText("");
	    if(autowalk==false)a11.setTextColor(Color.RED);
            if(autowalk==true)a11.setTextColor(Color.GREEN);
			a11.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             a11.setTextColor(Color.RED);
			 autowalk = false;
			}
		});
		activeLayout.addView(a11);

active = new PopupWindow(activeLayout1, dip2px(46), dip2px(46));

active = new PopupWindow(activeLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/13, MainActivity.getWindowManager().getDefaultDisplay().getHeight()/3.5);
active.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
            active.showAtLocation(MainActivity.getWindow().getDecorView(), activePos | Gravity.TOP, 0, 120);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}

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
            
            var title = new TextView(MainActivity);
            title.setTextSize(20);
            title.setText(" AlphαHαck v2 ("+version+")");
            title.setGravity(Gravity.CENTER);
            title.setTextColor(GUIName);
            menuLayout.addView(title);

            var title2 = new TextView(MainActivity);
            title2.setTextSize(20);
            title2.setText("Made by: ArceusMαtt");
            title2.setGravity(Gravity.CENTER);
            title2.setTextColor(GUIName);
            menuLayout.addView(title2);
            
            var exit = new Button(MainActivity);
            exit.setText("Exit AlphαHαck");
            if(mcpetheme==true)exit.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
            exit.setTextColor(Color.RED);
            exit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
        activeView();
menu.dismiss(); 
showMenuBtn(); 
if(getLanguage=="en_US")Toast.makeText(MainActivity, "Closed successfully", 1).show();
 if(getLanguage=="de_DE")Toast.makeText(MainActivity, "Erfolgreich geschlossen", 1).show();
                }
            }));
            menuLayout.addView(exit);
            
        var line0 = new android.widget.LinearLayout(MainActivity);
	    line0.setOrientation(0);
        
        function betaMenu(){
        
        }
        if(betaTestMenu==true)betaMenu();

        menuLayout.addView(line0);

           var title3 = new TextView(MainActivity);
            title3.setTextSize(15);
            title3.setText("hugecraftpe.ml 19130");
            title3.setGravity(Gravity.CENTER);
            title3.setTextColor(GUIName);
            menuLayout.addView(title3);
		
	   var title4 = new TextView(MainActivity);
            title4.setTextSize(15);
            title4.setText("play.castlegames.eu 19132");
            title4.setGravity(Gravity.CENTER);
            title4.setTextColor(GUIName);
            menuLayout.addView(title4);
	    
var group = new Button(MainActivity);
group.setText("Community");
group.setTextColor(GUIBtns);
if(mcpetheme==true)group.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
group.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             var urls4 = new Intent(MainActivity);
	  urls4.setAction(Intent.ACTION_VIEW);
                    urls4.setData(Uri.parse("https://plus.google.com/communities/103695355587842948163"));
                    MainActivity.startActivity(urls4);
			}
		});
		menuLayout.addView(group);

var settings = new Button(MainActivity);
settings.setText("Settings");
	    if(getLanguage=="it_IT")settings.setText("Impostazioni");
	    if(getLanguage=="es_MX")settings.setText("Configuracion");
settings.setTextColor(GUIBtns);
if(mcpetheme==true)settings.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
settings.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             settings_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(settings);
	
		function settings_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var settingsLayout = new LinearLayout(MainActivity);
            var settingsScroll = new ScrollView(MainActivity);
            var settingsLayout1 = new LinearLayout(MainActivity);
            settingsLayout.setOrientation(1);
            settingsLayout1.setOrientation(1);
            settingsScroll.addView(settingsLayout);
            settingsLayout1.addView(settingsScroll);
            
                var exit = new Button(MainActivity);
		exit.setText("Exit");
		exit.setOnClickListener(new View.OnClickListener() {
			onClick: function(v){
             settings.dismiss();
             showMenuBtn();
			}
		});
		settingsLayout.addView(exit);
		
	    var link = new Button(MainActivity);
            link.setText("Download link");       
            link.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
var urls3 = new Intent(MainActivity);
	  urls3.setAction(Intent.ACTION_VIEW);
                    urls3.setData(Uri.parse("https://arceusmatt.github.io/AlphaHack"));
                    MainActivity.startActivity(urls3);
                }
            }));
            settingsLayout.addView(link);
	
	
            var hideAH = new Button(MainActivity);
            hideAH.setText("Hide AlphaHack");  
	    if(hide==true)hideAH.setText("Unhide AlphaHack"); 
            hideAH.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
hide?hide=false:hide=true;
if(hide == true){
hideAH.setText("Unhide AlphaHack");
hide = true;
}
if(hide == false){
hideAH.setText("Hide AlphaHack");
hide = false;
}
                }
            }));
            settingsLayout.addView(hideAH);
			
			var posright = new Button(MainActivity);
            posright.setText("Button right");       
            posright.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
btnPos = Gravity.RIGHT;
activePos = Gravity.LEFT;
                }
            }));
            settingsLayout.addView(posright);

            var posleft = new Button(MainActivity);
            posleft.setText("Button left");       
            posleft.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
btnPos = Gravity.LEFT;
activePos = Gravity.RIGHT;
                }
            }));
            settingsLayout.addView(posleft);
	
            var mcpe = new Button(MainActivity);
            mcpe.setText("MCPE menu theme");       
            mcpe.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
mcpetheme = true;
GUIName = Color.BLACK;
GUIBtns = Color.BLACK;
                }
            }));
            settingsLayout.addView(mcpe);
		
		var g1 = new Button(MainActivity);
            g1.setText("Menu center");       
            g1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIPos = Gravity.CENTER;
GUIPos2 = Gravity.CENTER;
GUIPos3 = Gravity.CENTER;
                }
            }));
            settingsLayout.addView(g1);

var g2 = new Button(MainActivity);
            g2.setText("Menu right");       
            g2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIPos = Gravity.RIGHT;
GUIPos2 = Gravity.RIGHT;
GUIPos3 = Gravity.RIGHT;
                }
            }));
            settingsLayout.addView(g2);

var g3 = new Button(MainActivity);
            g3.setText("Menu left");       
            g3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIPos = Gravity.LEFT;
GUIPos2 = Gravity.LEFT;
GUIPos3 = Gravity.LEFT;
                }
            }));
            settingsLayout.addView(g3);
			
			var gs0 = new Button(MainActivity);
            gs0.setText("Menu Size 1");       
            gs0.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUISize = 4;
                }
            }));
            settingsLayout.addView(gs0);

var gs1 = new Button(MainActivity);
            gs1.setText("Menu Size 2");       
            gs1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUISize = 3;
                }
            }));
            settingsLayout.addView(gs1);

var gs2 = new Button(MainActivity);
            gs2.setText("Menu Size normal");       
            gs2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUISize = 2;
                }
            }));
            settingsLayout.addView(gs2);

var gs3 = new Button(MainActivity);
            gs3.setText("Menu Size 3");       
            gs3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUISize = 1;
                }
            }));
            settingsLayout.addView(gs3);
            
var l1 = new Button(MainActivity);
            l1.setText("Default Menu");       
            l1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor1
var GUIBtns = Color.WHITE;
default1 = true;
                }
            }));
            settingsLayout.addView(l1);
            
            var l2 = new Button(MainActivity);
            l2.setText("Black Menu");       
            l2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor2
 var GUIBtns = Color.BLACK;
 if(default1==true)default1 = false;
                }
            }));
            settingsLayout.addView(l2);

var l3 = new Button(MainActivity);
            l3.setText("White Menu");       
            l3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor3
var GUIBtns = Color.BLACK
if(default1==true)default1 = false;
                }
            }));
            settingsLayout.addView(l3);

var l4 = new Button(MainActivity);
            l4.setText("Red Menu");       
            l4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor4
if(default1==true)default1 = false;
                }
            }));
            settingsLayout.addView(l4);

var l5 = new Button(MainActivity);
            l5.setText("Blue Menu");       
            l5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor5
if(default1==true)default1 = false;
                }
            }));
            settingsLayout.addView(l5);

var l6 = new Button(MainActivity);
            l6.setText("Gray Menu");       
            l6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor6
var GUIBtns = Color.WHITE;
if(default1==true)default1 = false;
                }
            }));
            settingsLayout.addView(l6);

var l7 = new Button(MainActivity);
            l7.setText("Light gray Menu");       
            l7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor7
var GUIBtns = Color.BLACK;
if(default1==true)default1 = false;
                }
            }));
            settingsLayout.addView(l7);

var l8 = new Button(MainActivity);
            l8.setText("Yellow Menu");       
            l8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor8
var GUIBtns = Color.BLACK;
if(default1==true)default1 = false;
                }
            }));
            settingsLayout.addView(l8);

var l9 = new Button(MainActivity);
            l9.setText("Cyan Menu");       
            l9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor9
var GUIBtns = Color.BLACK;
if(default1==true)default1 = false;
                }
            }));
            settingsLayout.addView(l9);

var l10 = new Button(MainActivity);
            l10.setText("Dark gray Menu");       
            l10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor10
var GUIBtns = Color.WHITE
if(default1==true)default1 = false;
                }
            }));
            settingsLayout.addView(l10);

var l11 = new Button(MainActivity);
            l11.setText("Green Menu");       
            l11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor11
if(default1==true)default1 = false;
                }
            }));
            settingsLayout.addView(l11);

var l12 = new Button(MainActivity);
            l12.setText("Magenta Menu");       
            l12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor12
if(default1==true)default1 = false;
                }
            }));
            settingsLayout.addView(l12);
            
        var b2 = new Button(MainActivity);
            b2.setText("Black button text");       
            b2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns2
                }
            }));
            settingsLayout.addView(b2);

var b3 = new Button(MainActivity);
            b3.setText("White button text");       
            b3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns3
                }
            }));
            settingsLayout.addView(b3);

var b4 = new Button(MainActivity);
            b4.setText("Red button text");       
            b4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns4
                }
            }));
            settingsLayout.addView(b4);

var b5 = new Button(MainActivity);
            b5.setText("Blue button text");       
            b5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns5
                }
            }));
            settingsLayout.addView(b5);

var b6 = new Button(MainActivity);
            b6.setText("Gray button text");       
            b6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns6
                }
            }));
            settingsLayout.addView(b6);

var b7 = new Button(MainActivity);
            b7.setText("Lightgray button text");       
            b7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns7
                }
            }));
            settingsLayout.addView(b7);

var b8 = new Button(MainActivity);
            b8.setText("Yellow button text");       
            b8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns8
                }
            }));
            settingsLayout.addView(b8);

var b9 = new Button(MainActivity);
            b9.setText("Cyan button text");       
            b9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns9
                }
            }));
            settingsLayout.addView(b9);

var b10 = new Button(MainActivity);
            b10.setText("Darkgray button text");       
            b10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns10
                }
            }));
            settingsLayout.addView(b10);

var b11 = new Button(MainActivity);
            b11.setText("Green button text");       
            b11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns11
                }
            }));
            settingsLayout.addView(b11);

var b12 = new Button(MainActivity);
            b12.setText("Magenta button text");       
            b12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns12
                }
            }));
            settingsLayout.addView(b12);
            
            var b1 = new Button(MainActivity);
            b1.setText("Default outline");       
            b1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke1
                }
            }));
            settingsLayout.addView(b1);

var b2 = new Button(MainActivity);
            b2.setText("Black Outline");       
            b2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke2
                }
            }));
            settingsLayout.addView(b2);

var b3 = new Button(MainActivity);
            b3.setText("White Outline");       
            b3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke3
                }
            }));
            settingsLayout.addView(b3);

var b4 = new Button(MainActivity);
            b4.setText("Red Outline");       
            b4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke4
                }
            }));
            settingsLayout.addView(b4);

var b5 = new Button(MainActivity);
            b5.setText("Blue Outline");       
            b5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke5
                }
            }));
            settingsLayout.addView(b5);

var b6 = new Button(MainActivity);
            b6.setText("Gray Outline");       
            b6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke6
                }
            }));
            settingsLayout.addView(b6);

var b7 = new Button(MainActivity);
            b7.setText("Light gray Outline");       
            b7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke7
                }
            }));
            settingsLayout.addView(b7);

var b8 = new Button(MainActivity);
            b8.setText("Yellow Outline");       
            b8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke8
                }
            }));
            settingsLayout.addView(b8);

var b9 = new Button(MainActivity);
            b9.setText("Cyan Outline");       
            b9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke9
                }
            }));
            settingsLayout.addView(b9);

var b10 = new Button(MainActivity);
            b10.setText("Dark gray Outline");       
            b10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke10
                }
            }));
            settingsLayout.addView(b10);

var b11 = new Button(MainActivity);
            b11.setText("Green Outline");       
            b11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke11
                }
            }));
            settingsLayout.addView(b11);

var b12 = new Button(MainActivity);
            b12.setText("Magenta Outline");       
            b12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke12
                }
            }));
            settingsLayout.addView(b12);

            settings = new PopupWindow(settingsLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)settings.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default1==false)settings.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
settingsLayout1.setBackgroundDrawable(bg);
settingsLayout1.setPadding(20,0,20,0);
            settings.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}

var misc = new Button(MainActivity);
misc.setText("Misc");
misc.setTextColor(GUIBtns);
if(mcpetheme==true)misc.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
misc.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             misc_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(misc);
		
		function misc_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var miscLayout = new LinearLayout(MainActivity);
            var miscScroll = new ScrollView(MainActivity);
            var miscLayout1 = new LinearLayout(MainActivity);
            miscLayout.setOrientation(1);
            miscLayout1.setOrientation(1);
            miscScroll.addView(miscLayout);
            miscLayout1.addView(miscScroll);
            
            var exit = new Button(MainActivity);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             misc.dismiss();
             showMenuBtn();
			}
		});
		miscLayout.addView(exit);
		
		var credits = new Button(MainActivity);
		credits.setText("Credits");
		credits.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             misc.dismiss();
             credit_menu();
			}
		});
		miscLayout.addView(credits);
		
		function credit_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var creditLayout = new LinearLayout(MainActivity);
            var creditScroll = new ScrollView(MainActivity);
            var creditLayout1 = new LinearLayout(MainActivity);
            creditLayout.setOrientation(1);
            creditLayout1.setOrientation(1);
            creditScroll.addView(creditLayout);
            creditLayout1.addView(creditScroll);

			var exit = new Button(MainActivity);
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
			
credit = new PopupWindow(creditLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/1, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            credit.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
creditLayout1.setBackgroundDrawable(bg);
creditLayout1.setPadding(20,0,20,0);
            credit.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}

var pass = new Button(MainActivity);
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
		
		var pass2 = new Button(MainActivity);
		pass2.setText("SQL Inject (Numbers)");
		pass2.setTextColor(Color.RED);
if(hackk2==true)pass2.setTextColor(Color.GREEN);
		pass2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             hackk2?hackk2=false:hackk2=true;
pass2.setText("SQL Inject (Numbers)");
if(hackk2 == true){
pass2.setTextColor(Color.GREEN);
hackk2 = true;
}
if(hackk2 == false){
pass2.setTextColor(Color.RED);

hackk2 = false;
}
			}
		});
		miscLayout.addView(pass2);
		
		var ht1 = new Button(MainActivity);
		ht1.setText("How to bypass ban");
		ht1.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(MainActivity); 
/*alert.setTitle(""); */

var scroll = new android.widget.ScrollView(MainActivity); 
var layout = new android.widget.LinearLayout(MainActivity); 
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

var ht2 = new Button(MainActivity);
		ht2.setText("How to bypass ip ban");
		ht2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(MainActivity); 
/*alert.setTitle(""); */

var scroll = new android.widget.ScrollView(MainActivity); 
var layout = new android.widget.LinearLayout(MainActivity); 
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

var ht3 = new Button(MainActivity);
		ht3.setText("How to bypass CID/devban");
		ht3.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(MainActivity); 
/*alert.setTitle(""); */

var scroll = new android.widget.ScrollView(MainActivity); 
var layout = new android.widget.LinearLayout(MainActivity); 
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
		
		var ht4 = new Button(MainActivity);
		ht4.setText("How to bypass Alias");
		ht4.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(MainActivity); 
/*alert.setTitle(""); */

var scroll = new android.widget.ScrollView(MainActivity); 
var layout = new android.widget.LinearLayout(MainActivity); 
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

var ht5 = new Button(MainActivity);
		ht5.setText("How to delete pg chests");
		ht5.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(MainActivity); 
/*alert.setTitle(""); */

var scroll = new android.widget.ScrollView(MainActivity); 
var layout = new android.widget.LinearLayout(MainActivity); 
layout.setOrientation(1);

alert.setTitle("How to delete pg chests");
 alert.setMessage("To delete chests that are locked with /pg command\nPlace water on the block the chest is placed on,\nThen the chest will disappear along with the items inside of the chest.\nThere is no possible way to take the items.-ArceusMatt\n(This may get patched soon last checked was 9/10/2016)");

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
		miscLayout.addView(ht5);
		
var ht6 = new Button(MainActivity);
		ht6.setText("How to clear players items");
		ht6.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(MainActivity); 
/*alert.setTitle(""); */

var scroll = new android.widget.ScrollView(MainActivity); 
var layout = new android.widget.LinearLayout(MainActivity); 
layout.setOrientation(1);

alert.setTitle("How to clear players items");
 alert.setMessage("To clear the inventory of a player you'll need AlphaHack\ngo on the server with the players username\nOpen AlphaHack and select 'clear inventory'\nThen when you log off all the items will drop or disappear.-ArceusMatt\n(This may get patched soon last checked was 9/10/2016)");

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
		miscLayout.addView(ht6);

var cidban = new Button(MainActivity);
            cidban.setText("CID/dev pardon"); 
            cidban.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                	for(var hk = 0; hk < 4; hk++){
                		if(hk==3)devpardon();
                	}
Toast.makeText(MainActivity, "You will crash & be unbanned!", 1).show();
                }
            }));
            miscLayout.addView(cidban);
            
            var sit = new Button(MainActivity);
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
      var urls2 = new Intent(MainActivity);
	  urls2.setAction(Intent.ACTION_VIEW);
                    urls2.setData(Uri.parse("http://www.tineye.com"));
                    MainActivity.startActivity(urls2);
      }

var sid = new Button(MainActivity);
		sid.setText("View website code");
		sid.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             misc.dismiss();
             scc();
			}
		});
		miscLayout.addView(sid);
      
      var aniview = new Button(MainActivity);
		aniview.setText("Watch anime on MCPE");
		aniview.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             misc.dismiss();
             animeView();
Toast.makeText(MainActivity, "Please avoid ads & adjust your zoom", 1).show();
			}
		});
		miscLayout.addView(aniview);
		
	var activeMods = new Button(MainActivity);
activeMods.setText("Active mods dialog");
activeMods.setTextColor(Color.RED);
if(showActive==true)activeMods.setTextColor(Color.GREEN);
            activeMods.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             showActive?showActive=false:showActive=true;
activeMods.setText("Active mods dialog");
if(showActive == true){
activeMods.setTextColor(Color.GREEN);
showActive2 = true;
showActive = true;
activeView();
}
if(showActive == false){
activeMods.setTextColor(Color.RED);
showActive2 = false;
showActive = false;
}
                }
            }));
            miscLayout.addView(activeMods);
		
		function animeView(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var animeLayout = new LinearLayout(MainActivity);
            
            var animeScroll = new ScrollView(MainActivity);
            
            var animeLayout1 = new LinearLayout(MainActivity);
            animeLayout.setOrientation(1);
            animeLayout1.setOrientation(1);
            
            animeScroll.addView(animeLayout);
            animeLayout1.addView(animeScroll);

var exit = new Button(MainActivity);
            exit.setText("Exit");
exit.setTextColor(Color.RED);
            exit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){

                    anime.dismiss();

showMenuBtn();
                }
            }));
            animeLayout.addView(exit);
            
            var webs = new android.webkit.WebView(MainActivity);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      /*webset.setUserAgentString(userAgent);*/
      	webset.setSupportZoom(true);
      	webset.setBuiltInZoomControls(true);
      	webset.setDisplayZoomControls(false);
      webs.loadUrl('https://watch-anime.net');
      animeLayout.addView(webs);

anime = new PopupWindow(animeLayout1, dip2px(500), dip2px(500));

anime = new PopupWindow(animeLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/1.4, MainActivity.getWindowManager().getDefaultDisplay().getHeight()/1.3);
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
animeLayout1.setBackgroundDrawable(bg);
animeLayout1.setPadding(20,0,20,0);
anime.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
            anime.showAtLocation(MainActivity.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}

var ip0 = new Button(ctx);
            ip0.setText("IP lookup");
            ip0.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
misc.dismiss();
iplu();
                }
            }));
            miscLayout.addView(ip0);
      
      var ip1 = new Button(ctx);
            ip1.setText("Players list");
            ip1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
misc.dismiss();
pip();
                }
            }));
            miscLayout.addView(ip1);

            misc = new PopupWindow(miscLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)misc.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default1==false)misc.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
miscLayout1.setBackgroundDrawable(bg);
miscLayout1.setPadding(20,0,20,0);
            misc.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}
	    
var cheats = new Button(MainActivity);
cheats.setText("Online & offline mods");
cheats.setTextColor(GUIBtns);
if(mcpetheme==true)cheats.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
cheats.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             cheat_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(cheats);
		
		function cheat_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var cheatLayout = new LinearLayout(MainActivity);
            var cheatScroll = new ScrollView(MainActivity);
            var cheatLayout1 = new LinearLayout(MainActivity);
            cheatLayout.setOrientation(1);
            cheatLayout1.setOrientation(1);
            cheatScroll.addView(cheatLayout);
            cheatLayout1.addView(cheatScroll);
            
            var exit = new Button(MainActivity);
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

var info = new Button(MainActivity);
            info.setText("Game info");
            info.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    infoView();
                    
		    cheat.dismiss();
		    
		    Toast.makeText(MainActivity, "Scroll down", 1).show();
                }
            }));
            cheatLayout.addView(info);

function infoView(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var infoLayout = new LinearLayout(MainActivity);
            
            var infoScroll = new ScrollView(MainActivity);
            
            var infoLayout1 = new LinearLayout(MainActivity);
            infoLayout.setOrientation(1);
            infoLayout1.setOrientation(1);
            
            infoScroll.addView(infoLayout);
            infoLayout1.addView(infoScroll);

var exit = new Button(MainActivity);
            exit.setText("Exit");
exit.setTextColor(Color.RED);
            exit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){

                info.dismiss();

		showMenuBtn();
                }
            }));
            infoLayout.addView(exit);
			
            var refresh = new Button(MainActivity);
            refresh.setText("Refresh");
            refresh.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                info.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)infoView();
		}
                }
            }));
            infoLayout.addView(refresh);
			
	    var username = new TextView(MainActivity);
            username.setTextSize(15);
	    username.setText("Username: "+Player.getName(Player.getEntity()));
            username.setTextColor(Color.WHITE);
            infoLayout.addView(username);
			
	    var dimension = new TextView(MainActivity);
            dimension.setTextSize(15);
            dimension.setText("Dimension: "+Player.getDimension());
            dimension.setTextColor(Color.WHITE);
            infoLayout.addView(dimension);
			
	    var world = new TextView(MainActivity);
            world.setTextSize(15);
            world.setText("World: "+Level.getWorldName());
            world.setTextColor(Color.WHITE);
            infoLayout.addView(world);
			
	    var biome = new TextView(MainActivity);
            biome.setTextSize(15);
            biome.setText("Biome: "+Level.getBiomeName());
            biome.setTextColor(Color.WHITE);
            infoLayout.addView(biome);
			
			Level.getRainLevel();
	    var rain = new TextView(MainActivity);
            rain.setTextSize(15);
	    rain.setText("Weather: "+Math.round(Level.getRainLevel()));
            rain.setTextColor(Color.WHITE);
            infoLayout.addView(rain);
			
	    var time = new TextView(MainActivity);
            time.setTextSize(15);
	    time.setText("Time: "+Level.getTime());
            time.setTextColor(Color.WHITE);
            infoLayout.addView(time);
			
	    var difficulty = new TextView(MainActivity);
            difficulty.setTextSize(15);
	    difficulty.setText("Difficulty: "+Level.getDifficulty());
            difficulty.setTextColor(Color.WHITE);
            infoLayout.addView(difficulty);
            
            var maxHearts = new TextView(MainActivity);
            maxHearts.setTextSize(15);
	    maxHearts.setText("Max hearts: "+Entity.getMaxHealth(getPlayerEnt()));
            maxHearts.setTextColor(Color.WHITE);
            infoLayout.addView(maxHearts);

info = new PopupWindow(infoLayout1, dip2px(500), dip2px(500));

info = new PopupWindow(infoLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/2, MainActivity.getWindowManager().getDefaultDisplay().getHeight()/1);
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
infoLayout1.setBackgroundDrawable(bg);
infoLayout1.setPadding(20,0,20,0);
info.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
            info.showAtLocation(MainActivity.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}
	    
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
clientMessage(client + "You may crash!\nchange on/off fancy graphics for better view.\nAlso try relogging from the world.");

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
            
            var speedup = new Button(MainActivity);
speedup.setText("Block speed up");
speedup.setTextColor(Color.RED);
if(changeSpeed==true)speedup.setTextColor(Color.GREEN);
            speedup.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             changeSpeed?changeSpeed=false:changeSpeed=true;
speedup.setText("Block speed up");
if(changeSpeed == true){
speedup.setTextColor(Color.GREEN);
clientMessage(client + "Block speed up on,\nThis mod speeds up your game when you are on ice, soul sand etc");

changeSpeed = true;
}
if(changeSpeed == false){
speedup.setTextColor(Color.RED);
clientMessage(client + "Block speed up off");
Block.setShape(30, 0, 0, 0, 1, null, 1);
changeSpeed = false;
}
                }
            }));
            cheatLayout.addView(speedup);
            
            var svr = new Button(MainActivity);
            svr.setText("Server IP:Port");
            svr.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage(client + "§lIP:§r " + Server.getAddress() + " §lPort:§r " + Server.getPort());
if(Server.getAddress()=="null" || Server.getPort()=="0")clientMessage(client + "You are not on a server!");
                }
            }));
            cheatLayout.addView(svr);
	
	var butfuon1 = new Button(MainActivity);
butfuon1.setText("Item indicator");
butfuon1.setTextColor(Color.RED);
if(itemIndi==true)butfuon1.setTextColor(Color.GREEN);
            butfuon1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             itemIndi?itemIndi=false:itemIndi=true;
butfuon1.setText("Item indicator");
if(itemIndi== true){
butfuon1.setTextColor(Color.GREEN);
clientMessage(client+"Item info on");
itemIndi= true;
}
if(itemIndi== false){
butfuon1.setTextColor(Color.RED);
clientMessage(client+"Item info off");
itemIndi= false;
}
                }
            }));
            cheatLayout.addView(butfuon1);
	    
	    var button4 = new Button(MainActivity);
button4.setText("Armor indicator");
button4.setTextColor(Color.RED);
if(armor==true)button4.setTextColor(Color.GREEN);
            button4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             armor?armor=false:armor=true;
button4.setText("Armor indicator");
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
seevel.setText("Velocity indicator");
seevel.setTextColor(Color.RED);
if(getvel==true)seevel.setTextColor(Color.GREEN);
            seevel.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             getvel?getvel=false:getvel=true;
seevel.setText("Velocity indicator");
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
button9.setTextColor(Color.RED);
autospam = false;
autospam2 = false;
tapspam = false;
}
                }
            }));
            cheatLayout.addView(button9);
            
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
button11.setText("Storage ESP");
button11.setTextColor(Color.RED);
if(chestesp==true)button11.setTextColor(Color.GREEN);
            button11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             chestesp?chestesp=false:chestesp=true;
button11.setText("Storage ESP");
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
if(autospam2==true){
button12.setTextColor(Color.GREEN);
spa();
autospam2= true;
}
if(autospam2==false){
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
if(autodestroy2==true)button13.setTextColor(Color.GREEN);
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
autodestroy = false;
extraj = false;
autodestroy2 = false;
}
                }
            }));
            cheatLayout.addView(button13);
            
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

tapid = false;
}
                }
            }));
            cheatLayout.addView(taptoid);
            
            var kjump = new Button(MainActivity);
            kjump.setText("Infinite jump: "+(jump?"on":"off"));
            kjump.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
jump?jump=false:jump=true;
kjump.setText("Infinite jump: "+(jump?"on":"off"));
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
            
            var nowall = new Button(MainActivity);
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
            
            var light = new Button(MainActivity);
light.setText("Brightness");
light.setTextColor(Color.RED);
if(brightness==true)light.setTextColor(Color.GREEN);
            light.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             brightness?brightness=false:brightness=true;
light.setText("Brightness");
if(brightness == true){
light.setTextColor(Color.GREEN);

brightness = true;
}
if(brightness == false){
light.setTextColor(Color.RED);

brightness = false;
}
                }
            }));
            cheatLayout.addView(light);
			
var fe1 = new Button(MainActivity);
fe1.setText("Fast eat");
fe1.setTextColor(Color.RED);
if(fasteat==true)fe1.setTextColor(Color.GREEN);
            fe1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             fasteat?fasteat=false:fasteat=true;
fe1.setText("Fast eat");
if(fasteat == true){
fe1.setTextColor(Color.GREEN);

fasteat = true;
}
if(fasteat == false){
fe1.setTextColor(Color.RED);

fasteat = false;
}
                }
            }));
            cheatLayout.addView(fe1);
			
var afkspawn = new Button(MainActivity);
afkspawn.setText("Spawn if low health");
afkspawn.setTextColor(Color.RED);
if(lowhealth==true)afkspawn.setTextColor(Color.GREEN);
            afkspawn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             lowhealth?lowhealth=false:lowhealth=true;
afkspawn.setText("Spawn if low health");
if(lowhealth == true){
afkspawn.setTextColor(Color.GREEN);

lowhealth = true;
}
if(lowhealth == false){
afkspawn.setTextColor(Color.RED);

afkspawn = false;
}
                }
            }));
            cheatLayout.addView(afkspawn);
            
            var ecd = new Button(MainActivity);
            ecd.setText("Easy commands");       
            ecd.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
             cmd_menu();
             cheat.dismiss();
                }
            }));
            cheatLayout.addView(ecd);
            
            function cmd_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var cmdLayout = new LinearLayout(MainActivity);
            var cmdScroll = new ScrollView(MainActivity);
            var cmdLayout1 = new LinearLayout(MainActivity);
            cmdLayout.setOrientation(1);
            cmdLayout1.setOrientation(1);
            cmdScroll.addView(cmdLayout);
            cmdLayout1.addView(cmdScroll);
            
            var exit = new Button(MainActivity);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             cmd.dismiss();
             showMenuBtn();
			}
		});
		cmdLayout.addView(exit);
		
		var cmd1 = new Button(MainActivity);
		cmd1.setText("Creative");
		cmd1.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				Server.sendChat("/gamemode 1");
				Server.sendChat("/gamemode creative");
				Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
		});
		cmdLayout.addView(cmd1);
		
		var cmd2 = new Button(MainActivity);
		cmd2.setText("Survival");
		cmd2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				Server.sendChat("/gamemode 0");
				Server.sendChat("/gamemode survival");
				Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
		});
		cmdLayout.addView(cmd2);
		
		var cmd3 = new Button(MainActivity);
		cmd3.setText("Adventure");
		cmd3.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				Server.sendChat("/gamemode 2");
				Server.sendChat("/gamemode adventure");
				Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
		});
		cmdLayout.addView(cmd3);
		
		var cmd4 = new Button(MainActivity);
		cmd4.setText("Spectator");
		cmd4.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				Server.sendChat("/gamemode 3");
				Server.sendChat("/gamemode spectator");
				Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
		});
		cmdLayout.addView(cmd4);
		
		var cmd5 = new Button(MainActivity);
		cmd5.setText("List");
		cmd5.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				Server.sendChat("/list");
				Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
		});
		cmdLayout.addView(cmd5);
		
	    var opp = new Button(MainActivity);
            opp.setText("OP perm (Not hack)");        
            opp.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
Server.sendChat("/setuperm " + Player.getName(Player.getEntity()) + space + perm);
Server.sendChat("/setuperm " + Player.getName(Player.getEntity()) + space + perm);
Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			clientMessage(client + "gives you permanent op if you were op before, if server closes you can op yourself instead of losing it after server closes.");
                }
            }));
            cmdLayout.addView(opp);
            
            var a1 = new Button(MainActivity);
            a1.setText("Time: 6:00am");
            a1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 0");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a1);

var a2 = new Button(MainActivity);
            a2.setText("Time: 7:00am");
            a2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 1000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a2);

var a3 = new Button(MainActivity);
            a3.setText("Time: 8:00am");
            a3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 2000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a3);

var a4 = new Button(MainActivity);
            a4.setText("Time: 9:00am");
            a4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 3000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a4);

var a5 = new Button(MainActivity);
            a5.setText("Time: 10:00am");
            a5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 4000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a5);

var a6 = new Button(MainActivity);
            a6.setText("Time: 11:00am");
            a6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 5000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a6);

var a7 = new Button(MainActivity);
            a7.setText("Time: 12:00pm");
            a7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 6000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a7);

var a8 = new Button(MainActivity);
            a8.setText("Time: 1:00pm");
            a8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 7000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a8);

var a9 = new Button(MainActivity);
            a9.setText("Time: 2:00pm");
            a9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 8000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a9);

var a10 = new Button(MainActivity);
            a10.setText("Time: 3:00pm");
            a10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 9000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a10);

var a11 = new Button(MainActivity);
            a11.setText("Time: 4:00pm");
            a11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 10000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a11);

var a12 = new Button(MainActivity);
            a12.setText("Time: 5:00pm");
            a12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 11000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a12);

var a13 = new Button(MainActivity);
            a13.setText("Time: 6:00pm");
            a13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 12000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a13);

var a14 = new Button(MainActivity);
            a14.setText("Time: 7:00pm");
            a14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 13000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a14);

var a15 = new Button(MainActivity);
            a15.setText("Time: 8:00pm");
            a15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 14000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a15);

var a16 = new Button(MainActivity);
            a16.setText("Time: 9:00pm");
            a16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 15000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a16);

var a17 = new Button(MainActivity);
            a17.setText("Time: 10:00pm");
            a17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 16000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a17);

var a18 = new Button(MainActivity);
            a18.setText("Time: 11:00pm");
            a18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 17000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a18);

var a19 = new Button(MainActivity);
            a19.setText("Time: 12:00am");
            
            a19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 18000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a19);

var a20 = new Button(MainActivity);
            a20.setText("Time: 1:00am");
            a20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 19000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a20);

var a21 = new Button(MainActivity);
            a21.setText("Time: 2:00am");
            a21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 20000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a21);

var a22 = new Button(MainActivity);
            a22.setText("Time: 3:00am");
            a22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 21000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a22);

var a23 = new Button(MainActivity);
            a23.setText("Time: 4:00am");
            a23.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 22000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a23);

var a24 = new Button(MainActivity);
            a24.setText("Time: 5:00am");          
            a24.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Server.sendChat("/time set 23000");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a24);

var rainy = new Button(MainActivity);
            rainy.setText("Weather rain");
            rainy.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Server.sendChat("/weather rain");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(rainy);
			
var clearain = new Button(MainActivity);
            clearain.setText("Weather clear");
            clearain.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Server.sendChat("/weather clear");
			Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(clearain);
            
            cmd = new PopupWindow(cmdLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            cmd.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
cmdLayout1.setBackgroundDrawable(bg);
cmdLayout1.setPadding(20,0,20,0);
            cmd.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}

var oreTrace = new Button(MainActivity);
oreTrace.setText("Ore ESP");
oreTrace.setTextColor(Color.RED);
if(oreEsp2==true)oreTrace.setTextColor(Color.GREEN);
            oreTrace.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             oreEsp2?oreEsp2=false:oreEsp2=true;
oreTrace.setText("Ore ESP");
if(oreEsp2 == true){
oreTrace.setTextColor(Color.GREEN);
clientMessage(client + "Ore ESP on");
oreDialog();
oreEsp2 = true;
}
if(oreEsp2 == false){
oreTrace.setTextColor(Color.RED);
clientMessage(client + "Ore ESP off");
oreEsp = false;
oreEsp2 = false;
}
                }
            }));
            cheatLayout.addView(oreTrace);
			
var playerTracer = new Button(MainActivity);
playerTracer.setText("Player ESP");
playerTracer.setTextColor(Color.RED);
if(playeresp==true)playerTracer.setTextColor(Color.GREEN);
            playerTracer.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             playeresp?playeresp=false:playeresp=true;
playerTracer.setText("Player ESP");
if(playeresp == true){
playerTracer.setTextColor(Color.GREEN);
clientMessage(client + "Player esp on");

playeresp = true;
}
if(playeresp == false){
playerTracer.setTextColor(Color.RED);
clientMessage(client + "Player esp off");

playeresp = false;
}
                }
            }));
            cheatLayout.addView(playerTracer);
            
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
            cheatLayout.addView(anti2void);
			
var zmmm = new Button(MainActivity);
      zmmm.setText("Instant break");
zmmm.setTextColor(Color.RED);
if(instabreak==true)zmmm.setTextColor(Color.GREEN);
		zmmm.setOnClickListener(new android.view.View.OnClickListener() {
		 onClick: function(v){
 instabreak?instabreak=false:instabreak=true;
zmmm.setText("Instant break");
if(instabreak == true){
zmmm.setTextColor(Color.GREEN);
instaDestroy();
clientMessage(client + "§7Instant break is on");
}
if(instabreak == false){
zmmm.setTextColor(Color.RED);
clientMessage(client + "§7Instant break is off");
defaultDestroy();
                }
			}
		});
		cheatLayout.addView(zmmm);
		
		var tju = new Button(MainActivity);
tju.setText("Tap jump");
tju.setTextColor(Color.RED);
if(tapjump==true)tju.setTextColor(Color.GREEN);
            tju.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tapjump?tapjump=false:tapjump=true;
tju.setText("Tap jump");
if(tapjump == true){
tju.setTextColor(Color.GREEN);
clientMessage(client + "Tap jump on\nTap ground to jump!");

tapjump = true;
}
if(tapjump == false){
tju.setTextColor(Color.RED);
clientMessage(client + "Tap jump is off");

tapjump = false;
}
                }
            }));
            cheatLayout.addView(tju);
            
            var spiderman = new Button(MainActivity);
spiderman.setText("Spider");
spiderman.setTextColor(Color.RED);
if(spider==true)spiderman.setTextColor(Color.GREEN);
            spiderman.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             spider?spider=false:spider=true;
spiderman.setText("Spider");
if(spider == true){
spiderman.setTextColor(Color.GREEN);
clientMessage(client + "Spider on");
Toast.makeText(MainActivity, "Credit: Firepro9978 from VoidClient!", 1).show();
Utils.Player.isCollidedHorizontally();
spider = true;
}
if(spider == false){
spiderman.setTextColor(Color.RED);
clientMessage(client + "Spider off");

spider = false;
}
                }
            }));
            cheatLayout.addView(spiderman);
            
            var jumps = new Button(MainActivity);
jumps.setText("Higher jumps");
jumps.setTextColor(Color.RED);
if(jump==true)jumps.setTextColor(Color.GREEN);
            jumps.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             jump?jump=false:jump=true;
jumps.setText("Higher jumps");
if(jump == true){
jumps.setTextColor(Color.GREEN);
clientMessage(client + "Higher jumps on");

jump = true;
}
if(jump == false){
jumps.setTextColor(Color.RED);
clientMessage(client + "Higher jumps off");

jump = false;
}
                }
            }));
            cheatLayout.addView(jumps);
            
            var autow = new Button(MainActivity);
autow.setText("Auto walk");
autow.setTextColor(Color.RED);
if(autowalk==true)autow.setTextColor(Color.GREEN);
            autow.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             autowalk?autowalk=false:autowalk=true;
autow.setText("Auto walk");
if(autowalk == true){
autow.setTextColor(Color.GREEN);
clientMessage(client + "Auto walk on");

autowalk = true;
}
if(autowalk == false){
autow.setTextColor(Color.RED);
clientMessage(client + "Auto walk off");

autowalk = false;
}
                }
            }));
            cheatLayout.addView(autow);
            
            var xz = new Button(MainActivity);
            xz.setText("Other XYZ");
            xz.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    XYZView();
                    
		    cheat.dismiss();
		    
		    Toast.makeText(MainActivity, "Scroll down", 1).show();
                }
            }));
            cheatLayout.addView(xz);
            
            function XYZView(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var XYZLayout = new LinearLayout(MainActivity);
            
            var XYZScroll = new ScrollView(MainActivity);
            
            var XYZLayout1 = new LinearLayout(MainActivity);
            XYZLayout.setOrientation(1);
            XYZLayout1.setOrientation(1);
            
            XYZScroll.addView(XYZLayout);
            XYZLayout1.addView(XYZScroll);

var exit = new Button(MainActivity);
            exit.setText("Exit");
exit.setTextColor(Color.RED);
            exit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){

                XYZ.dismiss();

		showMenuBtn();
                }
            }));
            XYZLayout.addView(exit);
			
            var refresh = new Button(MainActivity);
            refresh.setText("Refresh");
            refresh.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                XYZ.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)XYZView();
		}
                }
            }));
            XYZLayout.addView(refresh);
			
			var xyZ_title = new TextView(MainActivity);
            xyZ_title.setTextSize(15);
	    xyZ_title.setText("Showing 5 players XYZ:");
            xyZ_title.setTextColor(Color.WHITE);
            XYZLayout.addView(xyZ_title);
			
			var players = Server.getAllPlayers();
			var names = Server.getAllPlayerNames();
			var x0 = Entity.getX(players[0]) - getPlayerX();
			var y0 = Entity.getY(players[0]) - getPlayerY();
			var z0 = Entity.getZ(players[0]) - getPlayerZ();
			var x1 = Entity.getX(players[1]) - getPlayerX();
			var y1 = Entity.getY(players[1]) - getPlayerY();
			var z1 = Entity.getZ(players[1]) - getPlayerZ();
			var x2 = Entity.getX(players[2]) - getPlayerX();
			var y2 = Entity.getY(players[2]) - getPlayerY();
			var z2 = Entity.getZ(players[2]) - getPlayerZ();
			var x3 = Entity.getX(players[3]) - getPlayerX();
			var y3 = Entity.getY(players[3]) - getPlayerY();
			var z3 = Entity.getZ(players[3]) - getPlayerZ();
			var x4 = Entity.getX(players[4]) - getPlayerX();
			var y4 = Entity.getY(players[4]) - getPlayerY();
			var z4 = Entity.getZ(players[4]) - getPlayerZ();
			var x5 = Entity.getX(players[5]) - getPlayerX();
			var y5 = Entity.getY(players[5]) - getPlayerY();
			var z5 = Entity.getZ(players[5]) - getPlayerZ();
	    var xyZ_show = new TextView(MainActivity);
            xyZ_show.setTextSize(15);
	    xyZ_show.setText(names[0]+"\n"+Math.round(x0)+" "+Math.round(y0)+" "+Math.round(z0)+"\n"+names[1]+"\n"+Math.round(x1)+" "+Math.round(y1)+" "+Math.round(z1)+"\n"+names[2]+"\n"+Math.round(x2)+" "+Math.round(y2)+" "+Math.round(z2)+"\n"+names[3]+"\n"+Math.round(x3)+" "+Math.round(y3)+" "+Math.round(z3)+"\n"+names[4]+"\n"+Math.round(x4)+" "+Math.round(y4)+" "+Math.round(z4)+"\n"+names[5]+"\n"+Math.round(x5)+" "+Math.round(y5)+" "+Math.round(z5)+"\n");
            xyZ_show.setTextColor(Color.YELLOW);
            XYZLayout.addView(xyZ_show);
			
XYZ = new PopupWindow(XYZLayout1, dip2px(500), dip2px(500));

XYZ = new PopupWindow(XYZLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/2, MainActivity.getWindowManager().getDefaultDisplay().getHeight()/1);
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
XYZLayout1.setBackgroundDrawable(bg);
XYZLayout1.setPadding(20,0,20,0);
XYZ.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
            XYZ.showAtLocation(MainActivity.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}

var twek = new Button(MainActivity);
twek.setText("Twerk");
twek.setTextColor(Color.RED);
if(twerk==true)twek.setTextColor(Color.GREEN);
            twek.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             twerk?twerk=false:twerk=true;
twek.setText("Twerk");
if(twerk == true){
twek.setTextColor(Color.GREEN);
clientMessage(client + "Auto twerk on");

twerk = true;
}
if(twerk == false){
twek.setTextColor(Color.RED);
clientMessage(client + "Auto twerk off");

twerk = false;
}
                }
            }));
            cheatLayout.addView(twek);

var taura = new Button(MainActivity);
taura.setText("TP Aura");
taura.setTextColor(Color.RED);
if(tpAura==true)taura.setTextColor(Color.GREEN);
            taura.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tpAura?tpAura=false:tpAura=true;
taura.setText("TP Aura");
if(tpAura == true){
taura.setTextColor(Color.GREEN);
clientMessage(client + "TP Aura on");
Toast.makeText(MainActivity, "Credit: Apric0cks for the idea!", 1).show();

tpAura = true;
}
if(tpAura == false){
taura.setTextColor(Color.RED);
clientMessage(client + "TP Aura off");

tpAura = false;
}
                }
            }));
            cheatLayout.addView(taura);

var hitme = new Button(MainActivity);
hitme.setText("Hit behind");
hitme.setTextColor(Color.RED);
if(hitBehind==true)hitme.setTextColor(Color.GREEN);
            hitme.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             hitBehind?hitBehind=false:hitBehind=true;
hitme.setText("Hit behind");
if(hitBehind == true){
hitme.setTextColor(Color.GREEN);
clientMessage(client + "Hit behind on");

hitBehind = true;
}
if(hitBehind == false){
hitme.setTextColor(Color.RED);
clientMessage(client + "Hit behind off");

hitBehind = false;
}
                }
            }));
            cheatLayout.addView(hitme);

var jhit = new Button(MainActivity);
jhit.setText("Hit'n'jump");
jhit.setTextColor(Color.RED);
if(hitJump==true)jhit.setTextColor(Color.GREEN);
            jhit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             hitJump?hitJump=false:hitJump=true;
jhit.setText("Hit'n'jump");
if(hitJump == true){
jhit.setTextColor(Color.GREEN);
clientMessage(client + "Hit'n'jump on");

hitJump = true;
}
if(hitJump == false){
jhit.setTextColor(Color.RED);
clientMessage(client + "Hit'n'jump off");

hitJump = false;
}
                }
            }));
            cheatLayout.addView(jhit);

var nameit = new Button(MainActivity);
nameit.setText("Mob nametags");
nameit.setTextColor(Color.RED);
if(nametags==true)nameit.setTextColor(Color.GREEN);
            nameit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             nametags?nametags=false:nametags=true;
nameit.setText("Mob nametags");
if(nametags == true){
nameit.setTextColor(Color.GREEN);
clientMessage(client + "Mob nametags on");

nametags = true;
}
if(nametags == false){
nameit.setTextColor(Color.RED);
clientMessage(client + "Mob nametags off");

nametags = false;
}
                }
            }));
            cheatLayout.addView(nameit);

var keeps = new Button(MainActivity);
keeps.setText("Keep hotbar");
keeps.setTextColor(Color.RED);
if(keepHotbar==true)keeps.setTextColor(Color.GREEN);
            keeps.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             keepHotbar?keepHotbar=false:keepHotbar=true;
keeps.setText("Keep hotbar");
if(keepHotbar == true){
keeps.setTextColor(Color.GREEN);
clientMessage(client + "Keep hotbar on");

keepHotbar = true;
}
if(keepHotbar == false){
keeps.setTextColor(Color.RED);
clientMessage(client + "Keep hotbar off");

keepHotbar = false;
}
                }
            }));
            cheatLayout.addView(keeps);

var atkact = new Button(MainActivity);
atkact.setText("Attack action");
atkact.setTextColor(Color.RED);
if(attackActions==true)atkact.setTextColor(Color.GREEN);
            atkact.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             attackActions?attackActions=false:attackActions=true;
atkact.setText("Attack action");
if(attackActions == true){
atkact.setTextColor(Color.GREEN);
clientMessage(client + "Attack action on");
atact();
attackActions = true;
}
if(attackActions == false){
atkact.setTextColor(Color.RED);
clientMessage(client + "Attack action off");

attackActions = false;
}
                }
            }));
            cheatLayout.addView(atkact);

var butfuon2 = new Button(MainActivity);
butfuon2.setText("Bunny hop");
butfuon2.setTextColor(Color.RED);
if(bhop==true)butfuon2.setTextColor(Color.GREEN);
            butfuon2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             bhop?bhop=false:bhop=true;
butfuon2.setText("Bunny hop");
if(bhop== true){
butfuon2.setTextColor(Color.GREEN);
clientMessage(client+"Bunny hop on");
	Toast.makeText(MainActivity, "Credit: Apric0cks from maximus mod!", 1).show();
bhop= true;
}
if(bhop== false){
butfuon2.setTextColor(Color.RED);
clientMessage(client+"Bunny hop off");
bhop= false;
}
                }
            }));
            cheatLayout.addView(butfuon2);

var butfuon3 = new Button(MainActivity);
butfuon3.setText("Alpha Text");
butfuon3.setTextColor(Color.RED);
if(alphatext==true)butfuon3.setTextColor(Color.GREEN);
            butfuon3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             alphatext?alphatext=false:alphatext=true;
butfuon3.setText("Alpha Text");
if(alphatext== true){
butfuon3.setTextColor(Color.GREEN);
clientMessage(client+"AlphaText on, send a message in chat!");
alphatext= true;
}
if(alphatext== false){
butfuon3.setTextColor(Color.RED);
clientMessage(client+"AlphaText off");
alphatext= false;
}
                }
            }));
            cheatLayout.addView(butfuon3);

var butfuon4 = new Button(MainActivity);
butfuon4.setText("Binary text");
butfuon4.setTextColor(Color.RED);
if(binarytext==true)butfuon4.setTextColor(Color.GREEN);
            butfuon4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             binarytext?binarytext=false:binarytext=true;
butfuon4.setText("Binary text");
if(binarytext == true){
butfuon4.setTextColor(Color.GREEN);
clientMessage(client+"Binary text on");
binarytext = true;
}
if(binarytext == false){
butfuon4.setTextColor(Color.RED);
clientMessage(client+"Binary text off");
binarytext = false;
}
                }
            }));
            cheatLayout.addView(butfuon4);

var butfuon5 = new Button(MainActivity);
butfuon5.setText("Zalgo text");
butfuon5.setTextColor(Color.RED);
if(zalgotext==true)butfuon5.setTextColor(Color.GREEN);
            butfuon5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             zalgotext?zalgotext=false:zalgotext=true;
butfuon5.setText("Zalgo text");
if(zalgotext == true){
butfuon5.setTextColor(Color.GREEN);
clientMessage(client+"Zalgo text on");
zalgotext = true;
}
if(zalgotext == false){
butfuon5.setTextColor(Color.RED);
clientMessage(client+"Zalgo text off");
zalgotext = false;
}
                }
            }));
            cheatLayout.addView(butfuon5);

var butfuon6 = new Button(MainActivity);
butfuon6.setText("Strike text");
butfuon6.setTextColor(Color.RED);
if(striketext==true)butfuon6.setTextColor(Color.GREEN);
            butfuon6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             striketext?striketext=false:striketext=true;
butfuon6.setText("Strike text");
if(striketext == true){
butfuon6.setTextColor(Color.GREEN);
clientMessage(client+"Strike text on");
striketext = true;
}
if(striketext == false){
butfuon6.setTextColor(Color.RED);
clientMessage(client+"Strike text off");
striketext = false;
}
                }
            }));
            cheatLayout.addView(butfuon6);



var butfuon8 = new Button(MainActivity);
butfuon8.setText("Prevent same message");
butfuon8.setTextColor(Color.RED);
if(preventsame==true)butfuon8.setTextColor(Color.GREEN);
            butfuon8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             preventsame?preventsame=false:preventsame=true;
butfuon8.setText("Prevent same message");
if(preventsame == true){
butfuon8.setTextColor(Color.GREEN);
clientMessage(client+"Prevent same message on,\nyou can now bypass ChatDefender");
preventsame = true;
}
if(preventsame == false){
butfuon8.setTextColor(Color.RED);
clientMessage(client+"Prevent same message off");
preventsame = false;
}
                }
            }));       
            cheatLayout.addView(butfuon8);
 
var exit2 = new Button(MainActivity);
		exit2.setText("Exit");
		exit2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             cheat.dismiss();
             showMenuBtn();
			}
		});
		cheatLayout.addView(exit2);
            
            cheat = new PopupWindow(cheatLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)cheat.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default1==false)cheat.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
cheatLayout1.setBackgroundDrawable(bg);
cheatLayout1.setPadding(20,0,20,0);
            cheat.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}
            
var mods = new Button(MainActivity);
mods.setText("Single player mods");
mods.setTextColor(GUIBtns);
if(mcpetheme==true)mods.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
mods.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             mod_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(mods);
		
		function mod_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var modLayout = new LinearLayout(MainActivity);
            var modScroll = new ScrollView(MainActivity);
            var modLayout1 = new LinearLayout(MainActivity);
            modLayout.setOrientation(1);
            modLayout1.setOrientation(1);
            modScroll.addView(modLayout);
            modLayout1.addView(modScroll);
            
            var exit = new Button(MainActivity);
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

var df = new Button(MainActivity);
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

var es = new Button(MainActivity);
            es.setText("Entity spawner");        
            es.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    new3(); 
                }
            }));
            modLayout.addView(es);

var cc = new Button(MainActivity);
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

var rr = new Button(MainActivity);
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

var cs = new Button(MainActivity);
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

var killme = new Button(MainActivity);
            killme.setText("Kill yourself");        
            killme.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
Player.setHealth(0);
Player.setHealth(0);
Server.sendChat("/kill");
                }
            }));
            modLayout.addView(killme);

var hea = new Button(MainActivity);
      hea.setText("Heal hearts");
		hea.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             Player.setHealth(20);
             clientMessage(client + "§7Health healed");
			}
		});
		modLayout.addView(hea);

var hun = new Button(MainActivity);
      hun.setText("Heal hunger");
		hun.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             Player.setHunger(25);
             clientMessage(client + "§7Hunger healed");
			}
		});
		modLayout.addView(hun);

var mm = new Button(MainActivity);
      mm.setText("Anti health: "+(stackheart?"on":"off"));
		mm.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         stackheart?stackheart=false:stackheart=true;
mm.setText("Anti health: "+(stackheart?"on":"off"));
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

var mm2 = new Button(MainActivity);
mm2.setText("Anti hunger: "+(infhun?"on":"off"));
mm2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
infhun?infhun=false:infhun=true;
mm2.setText("Anti hunger: "+(infhun?"on":"off"));
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

var zm = new Button(MainActivity);
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

var zmm = new Button(MainActivity);
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

var f = new Button(MainActivity);
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

var g = new Button(MainActivity);
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

var kl = new Button(MainActivity);
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

var kl2 = new Button(MainActivity);
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

var ui = new Button(MainActivity);
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

var attd = new Button(MainActivity);
            attd.setText("Set difficulty");        
            attd.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
named(); 

                }
            }));
            modLayout.addView(attd);

var fovy = new Button(MainActivity);
            fovy.setText("Fov editor");        
            fovy.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 

fov(); 

zmenu.dismiss();
                }
            }));
            modLayout.addView(fovy);

var att = new Button(MainActivity);
            att.setText("Set nametag");        
            att.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
nameMe(); 

                }
            }));
            modLayout.addView(att);

var fp = new Button(MainActivity);
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

var sbn = new Button(MainActivity);
            sbn.setText("Set block brightness");        
            sbn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
block1(); 

                }
            }));
            modLayout.addView(sbn);

var sbr = new Button(MainActivity);
            sbr.setText("Set block Resistance");        
            sbr.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
block2(); 

                }
            }));
            modLayout.addView(sbr);

var saysome = new Button(MainActivity);
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

var nh = new Button(MainActivity);
            nh.setText("Add more hearts");        
            nh.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
newhealth(); 

                }
            }));
            modLayout.addView(nh);

var horse = new Button(MainActivity);
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

var gage = new Button(MainActivity);
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
		
		var sage = new Button(MainActivity);
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

            mod = new PopupWindow(modLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)mod.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default1==false)mod.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
modLayout1.setBackgroundDrawable(bg);
modLayout1.setPadding(20,0,20,0);
            mod.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}

var effect = new Button(MainActivity);
effect.setText("Effect menu");
if(getLanguage=="it_IT")effect.setText("Menu effetti");
if(getLanguage=="es_MX")effect.setText("Menu de efectos");
effect.setTextColor(GUIBtns);
if(mcpetheme==true)effect.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
effect.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             effect_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(effect);
		
		function effect_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var effectLayout = new LinearLayout(MainActivity);
            var effectScroll = new ScrollView(MainActivity);
            var effectLayout1 = new LinearLayout(MainActivity);
            effectLayout.setOrientation(1);
            effectLayout1.setOrientation(1);
            effectScroll.addView(effectLayout);
            effectLayout1.addView(effectScroll);
            
            var exit = new Button(MainActivity);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             effect.dismiss();
             showMenuBtn();
			}
		});
		effectLayout.addView(exit);
		
		var mov = new Button(MainActivity);
            mov.setText("Remove all effect");
            mov.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                 //Entity.removeAllEffects(player);
Entity.removeAllEffects(getPlayerEnt());
                }
            }));
            effectLayout.addView(mov);

var e1 = new Button(MainActivity);
            e1.setText("saturation");
            e1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ea();
                }
            }));
            effectLayout.addView(e1);

function ea() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn1() {
Entity.addEffect(getPlayerEnt(), MobEffect.saturation, s*l, 0, false, true);
}
            
            var e2 = new Button(MainActivity);
            e2.setText("Absorption");
            e2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eb();
                }
            }));
            effectLayout.addView(e2);

function eb() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn2() {
Entity.addEffect(getPlayerEnt(), MobEffect.absorption, s*l, 0, false, true);
}

var e3 = new Button(MainActivity);
            e3.setText("Health boost");
            e3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
  ec();
                }
            }));
            effectLayout.addView(e3);

function ec() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn3() {
Entity.addEffect(getPlayerEnt(), MobEffect.healthBoost, s*l, 0, false, true);
}

var e4 = new Button(MainActivity);
            e4.setText("Wither");
            e4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ed();
                }
            }));
            effectLayout.addView(e4);

function ed() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn4() {
Entity.addEffect(getPlayerEnt(), MobEffect.wither, s*l, 0, false, true);
}
            
            var e5 = new Button(MainActivity);
            e5.setText("Poison");
            e5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ee();
                }
            }));
            effectLayout.addView(e5);

function ee() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn5() {
Entity.addEffect(getPlayerEnt(), MobEffect.poison, s*l, 0, false, true);
}

var e6 = new Button(MainActivity);
            e6.setText("Weakness");
            e6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    ef();
                }
            }));
            effectLayout.addView(e6);

function ef() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn6() {
Entity.addEffect(getPlayerEnt(), MobEffect.weakness, s*l, 0, false, true);
}

var e7 = new Button(MainActivity);
            e7.setText("Hunger");
            e7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eg()
                }
            }));
            effectLayout.addView(e7);

function eg() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn7() {
Entity.addEffect(getPlayerEnt(), MobEffect.hunger, s*l, 0, false, true);
}

var e8 = new Button(MainActivity);
            e8.setText("Night vision");
            e8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eh();
                }
            }));
            effectLayout.addView(e8);

function eh() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn8() {
Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, s*l, 0, false, true);
}

var e9 = new Button(MainActivity);
            e9.setText("Blindness");
            e9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ei();
                }
            }));
            effectLayout.addView(e9);

function ei() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn9() {
Entity.addEffect(getPlayerEnt(), MobEffect.blindness, s*l, 0, false, true);
}

var e10 = new Button(MainActivity);
            e10.setText("Invisibility");
            e10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 ej();
                }
            }));
            effectLayout.addView(e10);

function ej() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn10() {
Entity.addEffect(getPlayerEnt(), MobEffect.invisibility, s*l, 0, false, true);
}

var e11 = new Button(MainActivity);
            e11.setText("Water breathing");
            e11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ek();
                }
            }));
            effectLayout.addView(e11);

function ek() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn11() {
Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, s*l, 0, false, true);
}

var e12 = new Button(MainActivity);
            e12.setText("Fire resistance");
            e12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
el();
                }
            }));
            effectLayout.addView(e12);

function el() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn12() {
Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, s*l, 0, false, true);
}

var e13 = new Button(MainActivity);
            e13.setText("Resistance");
            e13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
em();
                }
            }));
            effectLayout.addView(e13);

function em() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn13() {
Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, s*l, 0, false, true);
}

var e14 = new Button(MainActivity);
            e14.setText("Regeneration");
            e14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en();
                }
            }));
            effectLayout.addView(e14);

function en() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn14() {
Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, s*l, 0, false, true);
}

var e15 = new Button(MainActivity);
            e15.setText("Nausea");
            e15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 eo();
                }
            }));
            effectLayout.addView(e15);

function eo() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn15() {
Entity.addEffect(getPlayerEnt(), MobEffect.confusion, s*l, 0, false, true);
}

var e16 = new Button(MainActivity);
            e16.setText("Jump boost");
            e16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 ep();
                }
            }));
            effectLayout.addView(e16);

function ep() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn16() {
Entity.addEffect(getPlayerEnt(), MobEffect.jump, s*l, 0, false, true);
}

var e17 = new Button(MainActivity);
            e17.setText("harm");
            e17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eq();
                }
            }));
            effectLayout.addView(e17);

function eq() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn17() {
Entity.addEffect(getPlayerEnt(), MobEffect.harm, s*l, 0, false, true);
}

var e18 = new Button(MainActivity);
            e18.setText("heal");
            e18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
er();
                }
            }));
            effectLayout.addView(e18);

function er() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn18() {
Entity.addEffect(getPlayerEnt(), MobEffect.heal, s*l, 0, false, true);
}

var e19 = new Button(MainActivity);
            e19.setText("Strength");
            e19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
es();
                }
            }));
            effectLayout.addView(e19);

function es() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn19() {
Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, s*l, 0, false, true);
}

var e20 = new Button(MainActivity);
            e20.setText("Mining fatigue");
            e20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
et();
                }
            }));
            effectLayout.addView(e20);

function et() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn20() {
Entity.addEffect(getPlayerEnt(), MobEffect.digSlowdown, s*l, 0, false, true);
}

var e21 = new Button(MainActivity);
            e21.setText("Haste");
            e21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eu();
                }
            }));
            effectLayout.addView(e21);

function eu() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn21() {
Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, s*l, 0, false, true);
}

var e22 = new Button(MainActivity);
            e22.setText("Slowness");
            e22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ev();
                }
            }));
            effectLayout.addView(e22);

function ev() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn22() {
Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, s*l, 0, false, true);
}

var e23 = new Button(MainActivity);
            e23.setText("Speed boost");
            e23.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ew();
                }
            }));
            effectLayout.addView(e23);

function ew() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new android.widget.EditText(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn23() {
Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, s*l, 0, false, true);
}

            effect = new PopupWindow(effectLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)effect.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default1==false)effect.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
effectLayout1.setBackgroundDrawable(bg);
effectLayout1.setPadding(20,0,20,0);
            effect.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var enchant = new Button(MainActivity);
enchant.setText("Enchant menu");
if(getLanguage=="it_IT")enchant.setText("Menu incantamenti");
if(getLanguage=="es_MX")enchant.setText("Menu de experiencia");
enchant.setTextColor(GUIBtns);
if(getLanguage=="de_DE")enchant.setText("Verzauberungs menu");
if(mcpetheme==true)enchant.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
enchant.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             enchant_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(enchant);
		
		function enchant_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var enchantLayout = new LinearLayout(MainActivity);
            var enchantScroll = new ScrollView(MainActivity);
            var enchantLayout1 = new LinearLayout(MainActivity);
            enchantLayout.setOrientation(1);
            enchantLayout1.setOrientation(1);
            enchantScroll.addView(enchantLayout);
            enchantLayout1.addView(enchantScroll);
            
            var exit = new Button(MainActivity);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             enchant.dismiss();
             showMenuBtn();
			}
		});
		enchantLayout.addView(exit);
		
		var button = new Button(MainActivity);
            button.setText("Add experience");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
XGive();
enchant.dismiss();
                }
            }));
            enchantLayout.addView(button);

var god1 = new Button(MainActivity);
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
		    Player.setLevel(Math.round(tysplvl));
		    Player.setItemCustomName(Player.getSelectedSlotId(), "God sword");
            }
            
        var god2 = new Button(MainActivity);
            god2.setText("God pickaxe");
            god2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                godpickaxe()	
                }
            }));
            enchantLayout.addView(god2);
            
            function godpickaxe(){
            	var tysplvl = "29000";
		var fortuneLvl = "80";
Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE,fortuneLvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING,tysplvl);
		    Player.setLevel(Math.round(tysplvl));
		    Player.setItemCustomName(Player.getSelectedSlotId(), "God pickaxe");
            }
			
var god3 = new Button(MainActivity);
            god3.setText("God armor");
            god3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                godarmor()	
                }
            }));
            enchantLayout.addView(god3);
            
            function godarmor(){
            	var tysplvl = "29000";
Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING,tysplvl);
		    Player.setLevel(Math.round(tysplvl));
		    Player.setItemCustomName(Player.getSelectedSlotId(), "God armor");
            }

var ena = new Button(MainActivity);
            ena.setText("Aqua Affinity");
            ena.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en1();
                }
            }));
            enchantLayout.addView(ena);

function en1() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add1() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.AQUA_AFFINITY,ll);
}

var enb = new Button(MainActivity);
            enb.setText("Bane Of Athropods");
            enb.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en2();
                }
            }));
            enchantLayout.addView(enb);

function en2() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add2() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.BANE_OF_ARTHROPODS,ll);
}

var enc = new Button(MainActivity);
            enc.setText("Blast Protection");
            enc.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en3();
                }
            }));
            enchantLayout.addView(enc);

function en3() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add3() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.BLAST_PROTECTION,ll);
}

var enf = new Button(MainActivity);
            enf.setText("Depth Strider");
            enf.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en5();
                }
            }));
            enchantLayout.addView(enf);

function en5() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add5() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.DEPTH_STRIDER,ll);
}

var ene = new Button(MainActivity);
            ene.setText("Efficiency");
            ene.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en6();
                }
            }));
            enchantLayout.addView(ene);

function en6() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add6() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY,ll);
}

var eng = new Button(MainActivity);
            eng.setText("Feather Falling");
            eng.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en7();
                }
            }));
            enchantLayout.addView(eng);

function en7() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add7() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.FEATHER_FALLING,ll);
}

var enh = new Button(MainActivity);
            enh.setText("Fire Aspect");
            enh.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en8();
                }
            }));
            enchantLayout.addView(enh);

function en8() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add8() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT,ll);
}

var eni = new Button(MainActivity);
            eni.setText("Fire Protection");
            eni.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en9();
                }
            }));
            enchantLayout.addView(eni);

function en9() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add9() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_PROTECTION,ll);
}

var enj = new Button(MainActivity);
            enj.setText("Flame");
            enj.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en10();
                }
            }));
            enchantLayout.addView(enj);

function en10() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add10() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME,ll);
}

var enk = new Button(MainActivity);
            enk.setText("Fortune");
            enk.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en11();
                }
            }));
            enchantLayout.addView(enk);

function en11() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add11() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE,ll);
}

var enl = new Button(MainActivity);
            enl.setText("Infinity");
            enl.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en12();
                }
            }));
            enchantLayout.addView(enl);

function en12() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add12() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY,ll);
}

var enm = new Button(MainActivity);
            enm.setText("Knockback");
            enm.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en13();
                }
            }));
            enchantLayout.addView(enm);

function en13() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add13() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK,ll);
}

var enn = new Button(MainActivity);
            enn.setText("Looting");
            enn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en14();
                }
            }));
            enchantLayout.addView(enn);

function en14() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add14() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING,ll);
}

var eno = new Button(MainActivity);
            eno.setText("Luck of the sea");
            eno.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en15();
                }
            }));
            enchantLayout.addView(eno);

function en15() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add15() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.LUCK_OF_THE_SEA,ll);
}

var enp = new Button(MainActivity);
            enp.setText("Lure");
            enp.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en16();
                }
            }));
            enchantLayout.addView(enp);

function en16() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add16() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.LURE,ll);
}

var enq = new Button(MainActivity);
            enq.setText("Power");
            enq.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en17();
                }
            }));
            enchantLayout.addView(enq);

function en17() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add17() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.POWER,ll);
}

var enr = new Button(MainActivity);
            enr.setText("Projectile protection");
            enr.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en18();
                }
            }));
            enchantLayout.addView(enr);

function en18() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add18() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.PROJECTILE_PROTECTION,ll);
}

var ens = new Button(MainActivity);
            ens.setText("Protection");
            ens.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en19();
                }
            }));
            enchantLayout.addView(ens);

function en19() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add19() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION,ll);
}

var ent = new Button(MainActivity);
            ent.setText("Punch");
            ent.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en20();
                }
            }));
            enchantLayout.addView(ent);

function en20() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add20() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH,ll);
}

var enu = new Button(MainActivity);
            enu.setText("Respiration");
            enu.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en21();
                }
            }));
            enchantLayout.addView(enu);

function en21() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add21() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.RESPIRATION,ll);
}

var env = new Button(MainActivity);
            env.setText("Sharpness");
            env.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en22();
                }
            }));
            enchantLayout.addView(env);

function en22() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add22() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS,ll);
}

var enw = new Button(MainActivity);
            enw.setText("Silk touch");
            enw.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en23();
                }
            }));
            enchantLayout.addView(enw);

function en23() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add23() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.SILK_TOUCH,ll);
}

var enx = new Button(MainActivity);
            enx.setText("Smite");
            enx.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en24();
                }
            }));
            enchantLayout.addView(enx);

function en24() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add24() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.SMITE,ll);
}

var eny = new Button(MainActivity);
            eny.setText("Thorns");
            eny.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en25();
                }
            }));
            enchantLayout.addView(eny);

function en25() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog Is Malfunctioning:"+e);
}
}});
}

function add25() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS,ll);
}

var enz = new Button(MainActivity);
            enz.setText("Unbreaking");
            enz.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en26();
                }
            }));
            enchantLayout.addView(enz);

function en26() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var lvl = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
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

            enchant = new PopupWindow(enchantLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)enchant.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default1==false)enchant.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
enchantLayout1.setBackgroundDrawable(bg);
enchantLayout1.setPadding(20,0,20,0);
            enchant.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var give = new Button(MainActivity);
give.setText("Give menu");
if(getLanguage=="it_IT")give.setText("Menu give");
if(getLanguage=="es_MX")give.setText("Menu de dar");
give.setTextColor(GUIBtns);
if(getLanguage=="de_DE")give.setText("Geben menu");
if(mcpetheme==true)give.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
give.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             give_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(give);
		
		function give_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var giveLayout = new LinearLayout(MainActivity);
            var giveScroll = new ScrollView(MainActivity);
            var giveLayout1 = new LinearLayout(MainActivity);
            giveLayout.setOrientation(1);
            giveLayout1.setOrientation(1);
            giveScroll.addView(giveLayout);
            giveLayout1.addView(giveScroll);
            
            var exit = new Button(MainActivity);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             give.dismiss();
             showMenuBtn();
			}
		});
		giveLayout.addView(exit);
		
		var button = new Button(MainActivity);
            button.setText("Custom Give");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Give();
give.dismiss();
                }
            }));
            giveLayout.addView(button);

var button90 = new Button(MainActivity);
            button90.setText("Item ID list");
            button90.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
idList(); 
                }
            }));
            giveLayout.addView(button90);

function idList()
      {
      MainActivity.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(MainActivity);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('https://arceusmatt.github.io/minecraftid.html');
/*Site URL*/
      new android.app.AlertDialog.Builder(MainActivity).setView(webs).show();
      }}));
      }

var butto = new Button(MainActivity);
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

var clear = new Button(MainActivity);
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

var k1 = new Button(MainActivity);
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

var k2 = new Button(MainActivity);
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

var k3 = new Button(MainActivity);
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

var k4 = new Button(MainActivity);
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

var k5 = new Button(MainActivity);
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

            give = new PopupWindow(giveLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)give.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default1==false)give.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
giveLayout1.setBackgroundDrawable(bg);
giveLayout1.setPadding(20,0,20,0);
            give.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var morph = new Button(MainActivity);
morph.setText("Morph menu");
if(getLanguage=="it_IT")morph.setText("Menu trasformazioni");
if(getLanguage=="es_MX")morph.setText("Menu de morph");
morph.setTextColor(GUIBtns);
if(getLanguage=="de_DE")morph.setText("Verwandelungs menu");
if(mcpetheme==true)morph.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
morph.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             morph_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(morph);
		
		function morph_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var morphLayout = new LinearLayout(MainActivity);
            var morphScroll = new ScrollView(MainActivity);
            var morphLayout1 = new LinearLayout(MainActivity);
            morphLayout.setOrientation(1);
            morphLayout1.setOrientation(1);
            morphScroll.addView(morphLayout);
            morphLayout1.addView(morphScroll);
            
            var exit = new Button(MainActivity);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             morph.dismiss();
             showMenuBtn();
			}
		});
		morphLayout.addView(exit);
		
		var mne = new Button(MainActivity);
mne.setText("Morph enhance");
mne.setTextColor(Color.RED);
if(morphEnhance==true)mne.setTextColor(Color.GREEN);
            mne.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             morphEnhance?morphEnhance=false:morphEnhance=true;
mne.setText("Morph enhance");
if(morphEnhance == true){
mne.setTextColor(Color.GREEN);
clientMessage(client + "Morph enhance adds effects and more to what mob you morph into!");

morphEnhance = true;
}
if(morphEnhance == false){
mne.setTextColor(Color.RED);
clientMessage(client + "Morph enhance off");

morphEnhance = false;
}
                }
            }));
            morphLayout.addView(mne);
		
		var mm1 = new Button(MainActivity);
            mm1.setText("Player");
            mm1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
	Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
}
Entity.setRenderType(Player.getEntity(), 27);
/*Entity.setMobSkin(Player.getEntity(),"assets/mob/char.png");*/
                }
            }));
            morphLayout.addView(mm1);

var mm = new Button(MainActivity);
            mm.setText("Bat");
            mm.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
	Entity.setCollisionSize(Player.getEntity(), 0.2, 0.2, 0.2);
}
Entity.setRenderType(Player.getEntity(), 10);
/*Entity.setMobSkin(Player.getEntity(),"mob/bat.png");*/
                }
            }));
            morphLayout.addView(mm);

var mm0 = new Button(MainActivity);
            mm0.setText("Blaze");
            mm0.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
	Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
	Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 18);
/*Entity.setMobSkin(Player.getEntity(),"mob/blaze.png");*/
                }
            }));
            morphLayout.addView(mm0);

var mm2 = new Button(MainActivity);
            mm2.setText("Chicken");
            mm2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
	Entity.setCollisionSize(Player.getEntity(), 0.4, 0.4, 0.4);
}
Entity.setRenderType(Player.getEntity(), 5);
/*Entity.setMobSkin(Player.getEntity(),"mob/chicken.png");*/
                }
            }));
            morphLayout.addView(mm2);

var mm3 = new Button(MainActivity);
            mm3.setText("Cow");
            mm3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.8, 1.7, 0.8);
}
Entity.setRenderType(Player.getEntity(), 6);
/*Entity.setMobSkin(Player.getEntity(),"mob/cow.png");*/
                }
            }));
            morphLayout.addView(mm3);

var mm4 = new Button(MainActivity);
            mm4.setText("Creeper");
            mm4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
}
Entity.setRenderType(Player.getEntity(), 22);
/*Entity.setMobSkin(Player.getEntity(),"mob/creeper.png");*/
                }
            }));
            morphLayout.addView(mm4);

var mm5 = new Button(MainActivity);
            mm5.setText("Enderman");
            mm5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.7, 3, 0.7);
}
Entity.setRenderType(Player.getEntity(), 24);
/*Entity.setMobSkin(Player.getEntity(),"mob/enderman.tga");*/
                }
            }));
            morphLayout.addView(mm5);

var mm6 = new Button(MainActivity);
            mm6.setText("Ghast");
            mm6.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 4, 4, 4);
Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 17);
/*Entity.setMobSkin(Player.getEntity(),"mob/ghast.png");*/
                }
            }));
            morphLayout.addView(mm6);
            
        var mmH = new Button(MainActivity);
            mmH.setText("Horse");
            mmH.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
	Entity.addEffect(getPlayerEnt(), MobEffect.jump, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 48);
/*Entity.setMobSkin(Player.getEntity(),"mob/horse.png");*/
                }
            }));
            morphLayout.addView(mmH);
            
        var mmH2 = new Button(MainActivity);
            mmH2.setText("Husk");
            mmH2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
	Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25*10, 0, false, true);
	Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25*10, 0, false, true);
}
	Entity.setRenderType(Player.getEntity(), 54);
/*Entity.setMobSkin(Player.getEntity(),"mob/husk.png");*/
                }
            }));
            morphLayout.addView(mmH2);

var mm7 = new Button(MainActivity);
            mm7.setText("Iron golem");
            mm7.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 1, 3, 1);
}
Entity.setRenderType(Player.getEntity(), 42);
/*Entity.setMobSkin(Player.getEntity(),"mob/iron_golem.png");*/
                }
            }));
            morphLayout.addView(mm7);

var mm8 = new Button(MainActivity);
            mm8.setText("Magma cube");
            mm8.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 2, 2, 2);
Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 25*10, 0, false, true);
Entity.addEffect(getPlayerEnt(), MobEffect.jump, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 16);
/*Entity.setMobSkin(Player.getEntity(),"mob/magmacube.png");*/
                }
            }));
            morphLayout.addView(mm8);

var mm9 = new Button(MainActivity);
            mm9.setText("Ocelot");
            mm9.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.5, 0.5, 0.5);
Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 43);
/*Entity.setMobSkin(Player.getEntity(),"mob/cat/ocelot.png");*/
                }
            }));
            morphLayout.addView(mm9);

var mm10 = new Button(MainActivity);
            mm10.setText("Pig");
            mm10.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.8, 1, 0.8);
}
Entity.setRenderType(Player.getEntity(), 8);
/*Entity.setMobSkin(Player.getEntity(),"mob/pig.png");*/
                }
            }));
            morphLayout.addView(mm10);
            
            var mmR = new Button(MainActivity);
            mmR.setText("Rabbit");
            mmR.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
        if(morphEnhance==true){
        Entity.addEffect(getPlayerEnt(), MobEffect.jump, 25*10, 0, false, true);
        }
Entity.setRenderType(Player.getEntity(), 46);
/*Entity.setMobSkin(Player.getEntity(),"mob/rabbit.png");*/
                }
            }));
            morphLayout.addView(mmR);

var mm11 = new Button(MainActivity);
            mm11.setText("Sheep");
            mm11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.8, 1.7, 0.8);
}
Entity.setRenderType(Player.getEntity(), 9);
/*Entity.setMobSkin(Player.getEntity(),"mob/sheep.tga");*/
                }
            }));
            morphLayout.addView(mm11);

var mm12 = new Button(MainActivity);
            mm12.setText("Silverfish");
            mm12.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.3, 0.4, 0.3);
Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 21);
/*Entity.setMobSkin(Player.getEntity(),"mob/silverfish.png");*/
                }
            }));
            morphLayout.addView(mm12);

var mm13 = new Button(MainActivity);
            mm13.setText("Skeleton");
            mm13.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25*10, 0, false, true);
Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 19);
/*Entity.setMobSkin(Player.getEntity(),"mob/skeleton.png");*/
                }
            }));
            morphLayout.addView(mm13);

var mm14 = new Button(MainActivity);
            mm14.setText("Slime");
            mm14.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 2, 2, 2);
Entity.addEffect(getPlayerEnt(), MobEffect.jump, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 23);
/*Entity.setMobSkin(Player.getEntity(),"mob/slime.png");*/
                }
            }));
            morphLayout.addView(mm14);

var mm15 = new Button(MainActivity);
            mm15.setText("Snow golem");
            mm15.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.7, 2, 0.7);
}
Entity.setRenderType(Player.getEntity(), 44);
/*Entity.setMobSkin(Player.getEntity(),"mob/snow_golem.png");*/
                }
            }));
            morphLayout.addView(mm15);
            
        var mmS = new Button(MainActivity);
            mmS.setText("Stray");
            mmS.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                	if(morphEnhance==true){
        Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25*10, 0, false, true);
	Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25*10, 0, false, true);
                	}
Entity.setRenderType(Player.getEntity(), 55);
/*Entity.setMobSkin(Player.getEntity(),"mob/stray.png");*/
                }
            }));
            morphLayout.addView(mmS);

var mm16 = new Button(MainActivity);
            mm16.setText("Spider");
            mm16.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 1, 0.4, 1);
}
Entity.setRenderType(Player.getEntity(), 20);
/*Entity.setMobSkin(Player.getEntity(),"mob/spider.tga");*/
                }
            }));
            morphLayout.addView(mm16);

var mm17 = new Button(MainActivity);
            mm17.setText("Squid");
            mm17.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.5, 0.5, 0.5);
Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 36);
/*Entity.setMobSkin(Player.getEntity(),"mob/squid.png");*/
                }
            }));
            morphLayout.addView(mm17);

var mm18 = new Button(MainActivity);
            mm18.setText("Villager");
            mm18.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
}
Entity.setRenderType(Player.getEntity(), 12);
/*Entity.setMobSkin(Player.getEntity(),"mob/villager/villager.png");*/
                }
            }));
            morphLayout.addView(mm18);

var mm19 = new Button(MainActivity);
            mm19.setText("Villager zombie");
            mm19.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25*10, 0, false, true);
Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 39);
/*Entity.setMobSkin(Player.getEntity(),"mob/zombieVillager.png");*/
                }
            }));
            morphLayout.addView(mm19);
            
        var mmW = new Button(MainActivity);
            mmW.setText("Witch");
            mmW.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setRenderType(Player.getEntity(), 47);
/*Entity.setMobSkin(Player.getEntity(),"mob/witch.png");*/
                }
            }));
            morphLayout.addView(mmW);

var mm20 = new Button(MainActivity);
            mm20.setText("Wolf");
            mm20.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.8, 0.7, 0.8);
}
Entity.setRenderType(Player.getEntity(), 11);
/*Entity.setMobSkin(Player.getEntity(),"mob/wolf.png");*/
                }
            }));
            morphLayout.addView(mm20);
            
        var mmW2 = new Button(MainActivity);
            mmW2.setText("Wither skeleton");
            mmW2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                	if(morphEnhance==true){
                	Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 25*10, 0, false, true);
                	Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25*10, 0, false, true);
	                Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25*10, 0, false, true);
                	}
Entity.setRenderType(Player.getEntity(), 19);
/*Entity.setMobSkin(Player.getEntity(),"mob/witherSkeleton.tga");*/
                }
            }));
            morphLayout.addView(mmW2);

var mm21 = new Button(MainActivity);
            mm21.setText("Zombie");
            mm21.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25*10, 0, false, true);
Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 14);
/*Entity.setMobSkin(Player.getEntity(),"mob/zombie.png");*/
                }
            }));
            morphLayout.addView(mm21);

var mm22 = new Button(MainActivity);
            mm22.setText("Zombie pigman");
            mm22.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 15);
/*Entity.setMobSkin(Player.getEntity(),"mob/pigzombie.png*/
                }
            }));
            morphLayout.addView(mm22);

            morph = new PopupWindow(morphLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)morph.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
			if(default1==false)morph.setBackgroundDrawable(new ColorDrawable(GUIColor));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
morphLayout1.setBackgroundDrawable(bg);
morphLayout1.setPadding(20,0,20,0);
            morph.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var nuke = new Button(MainActivity);
nuke.setText("Nuke menu");
if(getLanguage=="it_IT")nuke.setText("Menu esplosioni");
if(getLanguage=="es_MX")nuke.setText("Menu de bomba nuclear");
nuke.setTextColor(GUIBtns);
if(getLanguage=="de_DE")nuke.setText("Vernichtungs menu");
if(mcpetheme==true)nuke.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
nuke.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             nuke_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(nuke);
		
		function nuke_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var nukeLayout = new LinearLayout(MainActivity);
            var nukeScroll = new ScrollView(MainActivity);
            var nukeLayout1 = new LinearLayout(MainActivity);
            nukeLayout.setOrientation(1);
            nukeLayout1.setOrientation(1);
            nukeScroll.addView(nukeLayout);
            nukeLayout1.addView(nukeScroll);
            
            var exit = new Button(MainActivity);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             nuke.dismiss();
             showMenuBtn();
			}
		});
		nukeLayout.addView(exit);
		
            var tn = new Button(MainActivity);
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
            
            var an = new Button(MainActivity);
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
		
		var n1 = new Button(MainActivity);
            n1.setText("Nuke 1%");  
            n1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),1);
                }
            }));
            nukeLayout.addView(n1);

     var n2 = new Button(MainActivity);
            n2.setText("Nuke 5%");
            n2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),5);
                }
            }));
            nukeLayout.addView(n2);

var n3 = new Button(MainActivity);
            n3.setText("Nuke 10%");
            n3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),10);
                }
            }));
            nukeLayout.addView(n3);

var n4 = new Button(MainActivity);
            n4.setText("Nuke 15%");
            n4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),15);
                }
            }));
            nukeLayout.addView(n4);

var n5 = new Button(MainActivity);
            n5.setText("Nuke 20%");
            n5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),20);
                }
            }));
            nukeLayout.addView(n5);

var n6 = new Button(MainActivity);
            n6.setText("Nuke 25%");
            n6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),25);
                }
            }));
            nukeLayout.addView(n6);

var n7 = new Button(MainActivity);
            n7.setText("Nuke 30%");
            n7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),30);
                }
            }));
            nukeLayout.addView(n7);

var n8 = new Button(MainActivity);
            n8.setText("Nuke 35%");
            n8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),35);
                }
            }));
            nukeLayout.addView(n8);

var n9 = new Button(MainActivity);
            n9.setText("Nuke 40%");
            n9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),40);
                }
            }));
            nukeLayout.addView(n9);

var n10 = new Button(MainActivity);
            n10.setText("Nuke 45%");
            n10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),45);
                }
            }));
            nukeLayout.addView(n10);

var n11 = new Button(MainActivity);
            n11.setText("Nuke 50%");
            n11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),50);
                }
            }));
            nukeLayout.addView(n11);
	
	var cn = new Button(MainActivity);
            cn.setText("Custom nuke");
            cn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                nuke.dismiss();
                newn();
                }
            }));
            nukeLayout.addView(cn);

            nuke = new PopupWindow(nukeLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)nuke.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default1==false)nuke.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
nukeLayout1.setBackgroundDrawable(bg);
nukeLayout1.setPadding(20,0,20,0);
            nuke.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var particle = new Button(MainActivity);
particle.setText("Particle menu");
if(getLanguage=="it_IT")particle.setText("Menu particelle");
if(getLanguage=="es_MX")particle.setText("Menu de partícula");
particle.setTextColor(GUIBtns);
if(getLanguage=="de_DE")particle.setText("Partikel menu");
if(mcpetheme==true)particle.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
particle.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             particle_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(particle);
		
		function particle_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var particleLayout = new LinearLayout(MainActivity);
            var particleScroll = new ScrollView(MainActivity);
            var particleLayout1 = new LinearLayout(MainActivity);
            particleLayout.setOrientation(1);
            particleLayout1.setOrientation(1);
            particleScroll.addView(particleLayout);
            particleLayout1.addView(particleScroll);
            
            var exit = new Button(MainActivity);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             particle.dismiss();
             showMenuBtn();
			}
		});
		particleLayout.addView(exit);
		
var p1 = new Button(MainActivity);
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

var p2 = new Button(MainActivity);
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

var p3 = new Button(MainActivity);
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

var p4 = new Button(MainActivity);
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

var p5 = new Button(MainActivity);
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

var p6 = new Button(MainActivity);
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

var p7 = new Button(MainActivity);
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

var p8 = new Button(MainActivity);
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

var p9 = new Button(MainActivity);
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

var p10 = new Button(MainActivity);
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

var p11 = new Button(MainActivity);
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

var p12 = new Button(MainActivity);
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

var p13 = new Button(MainActivity);
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

var p14 = new Button(MainActivity);
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

var p15 = new Button(MainActivity);
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

var p16 = new Button(MainActivity);
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

var p17 = new Button(MainActivity);
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

var p18 = new Button(MainActivity);
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

var p19 = new Button(MainActivity);
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

var p20 = new Button(MainActivity);
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

var p21 = new Button(MainActivity);
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

var p22 = new Button(MainActivity);
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

var p23 = new Button(MainActivity);
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

var p24 = new Button(MainActivity);
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

var p25 = new Button(MainActivity);
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

var p26 = new Button(MainActivity);
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

var p27 = new Button(MainActivity);
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

var p28 = new Button(MainActivity);
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

var p29 = new Button(MainActivity);
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

var p30 = new Button(MainActivity);
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

var p31 = new Button(MainActivity);
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

var p32 = new Button(MainActivity);
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

            particle = new PopupWindow(particleLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)particle.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default1==false)particle.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
particleLayout1.setBackgroundDrawable(bg);
particleLayout1.setPadding(20,0,20,0);
            particle.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var spawn = new Button(MainActivity);
spawn.setText("Spawn menu");
if(getLanguage=="it_IT")spawn.setText("Menu spawner");
if(getLanguage=="es_MX")spawn.setText("Menu de spawn");
spawn.setTextColor(GUIBtns);
if(getLanguage=="de_DE")spawn.setText("Erschaffungs menu");
if(mcpetheme==true)spawn.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
spawn.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             spawn_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(spawn);
		
		function spawn_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var spawnLayout = new LinearLayout(MainActivity);
            var spawnScroll = new ScrollView(MainActivity);
            var spawnLayout1 = new LinearLayout(MainActivity);
            spawnLayout.setOrientation(1);
            spawnLayout1.setOrientation(1);
            spawnScroll.addView(spawnLayout);
            spawnLayout1.addView(spawnScroll);
            
            var exit = new Button(MainActivity);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             spawn.dismiss();
             showMenuBtn();
			}
		});
		spawnLayout.addView(exit);
		
		var spawn10 = new Button(MainActivity);
            spawn10.setText("Spawn Chicken");      
            spawn10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 10);
                }
            }));
            spawnLayout.addView(spawn10);

var spawn11 = new Button(MainActivity);
            spawn11.setText("Spawn Cow");
            spawn11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 11);
                }
            }));
            spawnLayout.addView(spawn11);
            
            var spawn12 = new Button(MainActivity);
            spawn12.setText("Spawn Pig");
            spawn12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 12);
                }
            }));
            spawnLayout.addView(spawn12);
            
            var spawn13 = new Button(MainActivity);
            spawn13.setText("Spawn Sheep");
            spawn13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 13);
                }
            }));
            spawnLayout.addView(spawn13);
            
            var spawn14 = new Button(MainActivity);
            spawn14.setText("Spawn Wolf");
            spawn14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 14);
                }
            }));
            spawnLayout.addView(spawn14);
            
            var spawn15 = new Button(MainActivity);
            spawn15.setText("Spawn Villager");
            spawn15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 15);
                }
            }));
            spawnLayout.addView(spawn15);
            
            var spawn16 = new Button(MainActivity);
            spawn16.setText("Spawn Mushrom cow");
            spawn16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 16);
                }
            }));
            spawnLayout.addView(spawn16);
            
            var spawn17 = new Button(MainActivity);
            spawn17.setText("Spawn Squid");
            spawn17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 17);
                }
            }));
            spawnLayout.addView(spawn17);
            
            var spawn18 = new Button(MainActivity);
            spawn18.setText("Spawn Rabbit");
            spawn18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 18);
                }
            }));
            spawnLayout.addView(spawn18);
            
            var spawn19 = new Button(MainActivity);
            spawn19.setText("Spawn Bat");
            spawn19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 19);
                }
            }));
            spawnLayout.addView(spawn19);
            
            var spawn20 = new Button(MainActivity);
            spawn20.setText("Spawn Iron golem");
            spawn20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 20);
                }
            }));
            spawnLayout.addView(spawn20);
            
            var spawn21 = new Button(MainActivity);
            spawn21.setText("Spawn Snow golem");
            spawn21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 21);
                }
            }));
            spawnLayout.addView(spawn21);
            
            var spawn22 = new Button(MainActivity);
            spawn22.setText("Spawn Ocelot");
            spawn22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 22);
                }
            }));
            spawnLayout.addView(spawn22);

var spawn32 = new Button(MainActivity);
            spawn32.setText("Spawn Zombie");
            spawn32.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 32);
                }
            }));
            spawnLayout.addView(spawn32);

var spawn33 = new Button(MainActivity);
            spawn33.setText("Spawn Creeper");
            spawn33.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 33);
                }
            }));
            spawnLayout.addView(spawn33);

var spawn34 = new Button(MainActivity);
            spawn34.setText("Spawn Skeleton");
            spawn34.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 34);
                }
            }));
            spawnLayout.addView(spawn34);
            
            var spawn35 = new Button(MainActivity);
            spawn35.setText("Spawn Spider");
            spawn35.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 35);
                }
            }));
            spawnLayout.addView(spawn35);
            
            var spawn36 = new Button(MainActivity);
            spawn36.setText("Spawn Zombie pigman");
            spawn36.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 36);
                }
            }));
            spawnLayout.addView(spawn36);
            
            var spawn37 = new Button(MainActivity);
            spawn37.setText("Spawn Slime");
            spawn37.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 37);
                }
            }));
            spawnLayout.addView(spawn37);
            
            var spawn38 = new Button(MainActivity);
            spawn38.setText("Spawn Enderman");     
            spawn38.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 38);
                }
            }));
            spawnLayout.addView(spawn38);
            
            var spawn39 = new Button(MainActivity);
            spawn39.setText("Spawn Silverfish");
            spawn39.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 39);
                }
            }));
            spawnLayout.addView(spawn39);

var spawn40 = new Button(MainActivity);
            spawn40.setText("Spawn Cave spider"); 
            spawn40.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 40);
                }
            }));
            spawnLayout.addView(spawn40);

var spawn41 = new Button(MainActivity);
            spawn41.setText("Spawn Ghast");      
            spawn41.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 41);
                }
            }));
            spawnLayout.addView(spawn41);

var spawn42 = new Button(MainActivity);
            spawn42.setText("Spawn Magma cube");
            spawn42.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 42);
                }
            }));
            spawnLayout.addView(spawn42);

var spawn43 = new Button(MainActivity);
            spawn43.setText("Spawn Blaze");       
            spawn43.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 43);
                }
            }));
            spawnLayout.addView(spawn43);

var spawn44 = new Button(MainActivity);
            spawn44.setText("Spawn Zombie villager");
            spawn44.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 44);
                }
            }));
            spawnLayout.addView(spawn44);

var spawn66 = new Button(MainActivity);
            spawn66.setText("Spawn Witch");            
            spawn66.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 45);
                }
            }));
            spawnLayout.addView(spawn66);
			
			var spawn68 = new Button(MainActivity);
            spawn68.setText("Spawn Guardian");            
            spawn68.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 49);
                }
            }));
            spawnLayout.addView(spawn68);
			
var spawn70 = new Button(MainActivity);
            spawn70.setText("Spawn Horse");            
            spawn70.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 23);
                }
            }));
            spawnLayout.addView(spawn70);
			
			var spawn71 = new Button(MainActivity);
            spawn71.setText("Spawn Donkey");            
            spawn71.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 24);
                }
            }));
            spawnLayout.addView(spawn71);
			
			var spawn72 = new Button(MainActivity);
            spawn72.setText("Spawn Mule");            
            spawn72.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 25);
                }
            }));
            spawnLayout.addView(spawn72);
			
			var spawn73 = new Button(MainActivity);
            spawn73.setText("Spawn Skeleton Horse");            
            spawn73.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 26);
                }
            }));
            spawnLayout.addView(spawn73);
			
			var spawn74 = new Button(MainActivity);
            spawn74.setText("Spawn Zombie Horse");            
            spawn74.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 27);
                }
            }));
            spawnLayout.addView(spawn74);
			
			var spawn75 = new Button(MainActivity);
            spawn75.setText("Spawn Wither skeleton");            
            spawn75.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 48);
                }
            }));
            spawnLayout.addView(spawn75);
			
			var spawn76 = new Button(MainActivity);
            spawn76.setText("Spawn Stray");            
            spawn76.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 46);
                }
            }));
            spawnLayout.addView(spawn76);
			
	    var spawn77 = new Button(MainActivity);
            spawn77.setText("Spawn Husk");            
            spawn77.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 47);
                }
            }));
            spawnLayout.addView(spawn77);
            
            var spawn78 = new Button(MainActivity);
            spawn78.setText("Spawn Elder guardian");            
            spawn78.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 50);
                }
            }));
            spawnLayout.addView(spawn78);
            
            var spawn79 = new Button(MainActivity);
            spawn79.setText("Spawn Wither");            
            spawn79.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 52);
                }
            }));
            spawnLayout.addView(spawn79);
            
            var spawn80 = new Button(MainActivity);
            spawn80.setText("Spawn NPC");            
            spawn80.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 51);
                }
            }));
            spawnLayout.addView(spawn80);
	
	var spawnP = new Button(MainActivity);
            spawnP.setText("Spawn Player");            
            spawnP.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 63);
                }
            }));
            spawnLayout.addView(spawnP);
	
	var spawnT = new Button(MainActivity);
            spawnT.setText("Spawn Item");            
            spawnT.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 64);
                }
            }));
            spawnLayout.addView(spawnT);

            spawn = new PopupWindow(spawnLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)spawn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default1==false)spawn.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
spawnLayout1.setBackgroundDrawable(bg);
spawnLayout1.setPadding(20,0,20,0);
            spawn.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var speed = new Button(MainActivity);
speed.setText("Speed menu");
if(getLanguage=="it_IT")speed.setText("Menu velocita");
if(getLanguage=="es_MX")speed.setText("Menu de velocidad");
speed.setTextColor(GUIBtns);
if(getLanguage=="de_DE")speed.setText("Schnelligkeits menu");
if(mcpetheme==true)speed.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
speed.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             speed_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(speed);
		
		function speed_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var speedLayout = new LinearLayout(MainActivity);
            var speedScroll = new ScrollView(MainActivity);
            var speedLayout1 = new LinearLayout(MainActivity);
            speedLayout.setOrientation(1);
            speedLayout1.setOrientation(1);
            speedScroll.addView(speedLayout);
            speedLayout1.addView(speedScroll);
            
            var exit = new Button(MainActivity);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             speed.dismiss();
             showMenuBtn();
			}
		});
		speedLayout.addView(exit);
		
		var d1 = new Button(MainActivity);
            d1.setText("Normal speed");       
            d1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(20);
                }
            }));
            speedLayout.addView(d1);
			
			var d0 = new Button(MainActivity);
            d0.setText("Speed 0%");       
            d0.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(0);
                }
            }));
            speedLayout.addView(d0);
            
            var d2 = new Button(MainActivity);
            d2.setText("Speed 5%");       
            d2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(5);
                }
            }));
            speedLayout.addView(d2);
            
            var d3 = new Button(MainActivity);
            d3.setText("Speed 10%");       
            d3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(10);
                }
            }));
            speedLayout.addView(d3);
            
            var d4 = new Button(MainActivity);
            d4.setText("Speed 15%");       
            d4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(15);
                }
            }));
            speedLayout.addView(d4);
            
            var d5 = new Button(MainActivity);
            d5.setText("Speed 20%");       
            d5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(20);
                }
            }));
            speedLayout.addView(d5);
            
            var d6 = new Button(MainActivity);
            d6.setText("Speed 25%");       
            d6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(25);
                }
            }));
            speedLayout.addView(d6);
            
            var d7 = new Button(MainActivity);
            d7.setText("Speed 30%");       
            d7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(30);
                }
            }));
            speedLayout.addView(d7);
            
            var d8 = new Button(MainActivity);
            d8.setText("Speed 35%");       
            d8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(35);
                }
            }));
            speedLayout.addView(d8);
            
            var d9 = new Button(MainActivity);
            d9.setText("Speed 40%");       
            d9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(40);
                }
            }));
            speedLayout.addView(d9);

var d10 = new Button(MainActivity);
            d10.setText("Speed 45%");       
            d10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(45);
                }
            }));
            speedLayout.addView(d10);

var d11 = new Button(MainActivity);
            d11.setText("Speed 50%");       
            d11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(50);
                }
            }));
            speedLayout.addView(d11);

var d12 = new Button(MainActivity);
            d12.setText("Speed 55%");       
            d12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(55);
                }
            }));
            speedLayout.addView(d12);

var d13 = new Button(MainActivity);
            d13.setText("Speed 60%");       
            d13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(60);
                }
            }));
            speedLayout.addView(d13);

var d14 = new Button(MainActivity);
            d14.setText("Speed 65%");       
            d14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(65);
                }
            }));
            speedLayout.addView(d14);

var d15 = new Button(MainActivity);
            d15.setText("Speed 70%");       
            d15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(70);
                }
            }));
            speedLayout.addView(d15);

var d16 = new Button(MainActivity);
            d16.setText("Speed 75%");       
            d16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(75);
                }
            }));
            speedLayout.addView(d16);

var d17 = new Button(MainActivity);
            d17.setText("Speed 80%");       
            d17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(80);
                }
            }));
            speedLayout.addView(d17);

var d18 = new Button(MainActivity);
            d18.setText("Speed 85%");       
            d18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(85);
                }
            }));
            speedLayout.addView(d18);

var d19 = new Button(MainActivity);
            d19.setText("Speed 90%");       
            d19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(90);
                }
            }));
            speedLayout.addView(d19);

var d20 = new Button(MainActivity);
            d20.setText("Speed 95%");       
            d20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(95);
                }
            }));
            speedLayout.addView(d20);

var d21 = new Button(MainActivity);
            d21.setText("Speed 100%");       
            d21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(100);
                }
            }));
            speedLayout.addView(d21);
			
			var d22 = new Button(MainActivity);
            d22.setText("Custom speed");        
            d22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
newspeed(); 

                }
            }));
            speedLayout.addView(d22);

            speed = new PopupWindow(speedLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)speed.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default1==false)speed.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
speedLayout1.setBackgroundDrawable(bg);
speedLayout1.setPadding(20,0,20,0);
            speed.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var teleport = new Button(MainActivity);
teleport.setText("Teleport menu");
if(getLanguage=="it_IT")teleport.setText("Menu teletrasporto");
if(getLanguage=="es_MX")teleport.setText("Menu de teletransportacion");
teleport.setTextColor(GUIBtns);
if(getLanguage=="de_DE")teleport.setText("Teleportierungs menu");
if(mcpetheme==true)teleport.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
teleport.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             teleport_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(teleport);
		
		function teleport_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var teleportLayout = new LinearLayout(MainActivity);
            var teleportScroll = new ScrollView(MainActivity);
            var teleportLayout1 = new LinearLayout(MainActivity);
            teleportLayout.setOrientation(1);
            teleportLayout1.setOrientation(1);
            teleportScroll.addView(teleportLayout);
            teleportLayout1.addView(teleportScroll);
            
            var exit = new Button(MainActivity);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             teleport.dismiss();
             showMenuBtn();
			}
		});
		teleportLayout.addView(exit);
		
		var button = new Button(MainActivity);
            button.setText("Select coords");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Tsele();
teleport.dismiss();
                }
            }));
            teleportLayout.addView(button);

var Uspawn = new Button(MainActivity);
            Uspawn.setText("Set home");       
            Uspawn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
        xhome=Player.getX();
        yhome=Player.getY()+1;
        zhome=Player.getZ(); 
save();
clientMessage(client + "§7Home set to: " + Math.round(xhome) + ", " + Math.round(yhome) + ", " + Math.round(zhome) + ".");
                }
            }));
            teleportLayout.addView(Uspawn);

var Rspawn = new Button(MainActivity);
            Rspawn.setText("Return to home");       
            Rspawn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
load();
clientMessage(client + "§7Returning to your saved home file");
                }
            }));
            teleportLayout.addView(Rspawn);

var sspawn = new Button(MainActivity);
            sspawn.setText("Set spawn");       
            sspawn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
        Level.setSpawn(getPlayerX(), getPlayerY(), getPlayerZ())
clientMessage(client + "§7Spawn set to " + Math.round(getPlayerX()) + ", " + Math.round(getPlayerY()) + ", " + Math.round(getPlayerZ()) + ".");
                }
            }));
            teleportLayout.addView(sspawn);
			
			var randomtp = new Button(MainActivity);
            randomtp.setText("Random TP");       
            randomtp.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 Entity.setPosition(Player.getEntity(), (Math.floor(Math.random() * (5000 - 100 + 1)) + 100), 70, (Math.floor(Math.random() * (5000 - 100 + 1)) + 100));
clientMessage(client + "Woah!\n"+"Teleported to: "+getPlayerX()+" "+getPlayerY()+" "+getPlayerZ());
                }
            }));
            teleportLayout.addView(randomtp);
			
			var at = new Button(MainActivity);
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
			
			var et = new android.widget.TextView(MainActivity);
			et.setGravity(android.view.Gravity.CENTER);
		et.setText("You may crash while tping because blocks do not load correctly.");
       et.setTextColor(Color.RED);
		et.setTextSize(20);
		teleportLayout.addView(et);

            teleport = new PopupWindow(teleportLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)teleport.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default1==false)teleport.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
teleportLayout1.setBackgroundDrawable(bg);
teleportLayout1.setPadding(20,0,20,0);
            teleport.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var time = new Button(MainActivity);
time.setText("Time menu");
if(getLanguage=="it_IT")time.setText("Menu tempo");
if(getLanguage=="es_MX")time.setText("Menu de momento");
time.setTextColor(GUIBtns);
if(getLanguage=="de_DE")time.setText("Zeit menu");
if(mcpetheme==true)time.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
time.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             time_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(time);
		
		function time_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var timeLayout = new LinearLayout(MainActivity);
            var timeScroll = new ScrollView(MainActivity);
            var timeLayout1 = new LinearLayout(MainActivity);
            timeLayout.setOrientation(1);
            timeLayout1.setOrientation(1);
            timeScroll.addView(timeLayout);
            timeLayout1.addView(timeScroll);
            
            var exit = new Button(MainActivity);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             time.dismiss();
             showMenuBtn();
			}
		});
		timeLayout.addView(exit);
		
		var aa = new Button(MainActivity);
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

var aa2 = new Button(MainActivity);
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

var a1 = new Button(MainActivity);
            a1.setText("Time: 6:00am");
            a1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(0);
                }
            }));
            timeLayout.addView(a1);

var a2 = new Button(MainActivity);
            a2.setText("Time: 7:00am");
            a2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(1000);
                }
            }));
            timeLayout.addView(a2);

var a3 = new Button(MainActivity);
            a3.setText("Time: 8:00am");
            a3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(2000);
                }
            }));
            timeLayout.addView(a3);

var a4 = new Button(MainActivity);
            a4.setText("Time: 9:00am");
            a4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(3000);
                }
            }));
            timeLayout.addView(a4);

var a5 = new Button(MainActivity);
            a5.setText("Time: 10:00am");
            a5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(4000);
                }
            }));
            timeLayout.addView(a5);

var a6 = new Button(MainActivity);
            a6.setText("Time: 11:00am");
            a6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(5000);
                }
            }));
            timeLayout.addView(a6);

var a7 = new Button(MainActivity);
            a7.setText("Time: 12:00pm");
            a7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(6000);
                }
            }));
            timeLayout.addView(a7);

var a8 = new Button(MainActivity);
            a8.setText("Time: 1:00pm");
            a8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(7000);
                }
            }));
            timeLayout.addView(a8);

var a9 = new Button(MainActivity);
            a9.setText("Time: 2:00pm");
            a9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(8000);
                }
            }));
            timeLayout.addView(a9);

var a10 = new Button(MainActivity);
            a10.setText("Time: 3:00pm");
            a10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(9000);
                }
            }));
            timeLayout.addView(a10);

var a11 = new Button(MainActivity);
            a11.setText("Time: 4:00pm");
            a11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(10000);
                }
            }));
            timeLayout.addView(a11);

var a12 = new Button(MainActivity);
            a12.setText("Time: 5:00pm");
            a12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(11000);
                }
            }));
            timeLayout.addView(a12);

var a13 = new Button(MainActivity);
            a13.setText("Time: 6:00pm");
            a13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(12000);
                }
            }));
            timeLayout.addView(a13);

var a14 = new Button(MainActivity);
            a14.setText("Time: 7:00pm");
            a14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(13000);
                }
            }));
            timeLayout.addView(a14);

var a15 = new Button(MainActivity);
            a15.setText("Time: 8:00pm");
            a15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(14000);
                }
            }));
            timeLayout.addView(a15);

var a16 = new Button(MainActivity);
            a16.setText("Time: 9:00pm");
            a16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(15000);
                }
            }));
            timeLayout.addView(a16);

var a17 = new Button(MainActivity);
            a17.setText("Time: 10:00pm");
            a17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(16000);
                }
            }));
            timeLayout.addView(a17);

var a18 = new Button(MainActivity);
            a18.setText("Time: 11:00pm");
            a18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(17000);
                }
            }));
            timeLayout.addView(a18);

var a19 = new Button(MainActivity);
            a19.setText("Time: 12:00am");
            
            a19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(18000);
                }
            }));
            timeLayout.addView(a19);

var a20 = new Button(MainActivity);
            a20.setText("Time: 1:00am");
            a20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(19000);
                }
            }));
            timeLayout.addView(a20);

var a21 = new Button(MainActivity);
            a21.setText("Time: 2:00am");
            a21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(20000);
                }
            }));
            timeLayout.addView(a21);

var a22 = new Button(MainActivity);
            a22.setText("Time: 3:00am");
            a22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(21000);
                }
            }));
            timeLayout.addView(a22);

var a23 = new Button(MainActivity);
            a23.setText("Time: 4:00am");
            a23.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(22000);
                }
            }));
            timeLayout.addView(a23);

var a24 = new Button(MainActivity);
            a24.setText("Time: 5:00am");          
            a24.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(23000);
                }
            }));
            timeLayout.addView(a24);

            time = new PopupWindow(timeLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)time.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default1==false)time.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
timeLayout1.setBackgroundDrawable(bg);
timeLayout1.setPadding(20,0,20,0);
            time.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}
		
var weather = new Button(MainActivity);
weather.setText("Weather menu");
if(getLanguage=="it_IT")weather.setText("Menu del tempo");
if(getLanguage=="es_MX")weather.setText("Menu de tiempo");
weather.setTextColor(GUIBtns);
if(getLanguage=="de_DE")weather.setText("Wetter menu");
if(mcpetheme==true)weather.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
weather.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             weather_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(weather);
		
		function weather_menu(){
MainActivity.runOnUiThread(new Runnable({ run: function(){
        try{
            var weatherLayout = new LinearLayout(MainActivity);
            var weatherScroll = new ScrollView(MainActivity);
            var weatherLayout1 = new LinearLayout(MainActivity);
            weatherLayout.setOrientation(1);
            weatherLayout1.setOrientation(1);
            weatherScroll.addView(weatherLayout);
            weatherLayout1.addView(weatherScroll);
            
            var exit = new Button(MainActivity);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             weather.dismiss();
             showMenuBtn();
			}
		});
		weatherLayout.addView(exit);
		
		var button = new Button(MainActivity);
            button.setText("Custom weather");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
			setDialogW();
			weather.dismiss();
                }
            }));
            weatherLayout.addView(button);
			
	    var button3 = new Button(MainActivity);
            button3.setText("Rain");
            button3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setRainLevel(1);
                }
            }));
            weatherLayout.addView(button3);
			
var button4 = new Button(MainActivity);
            button4.setText("Lightning");
            button4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setLightningLevel(1);
                }
            }));
            weatherLayout.addView(button4);

var button2 = new Button(MainActivity);
            button2.setText("Clear weather");
            button2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setRainLevel(0);
Level.setLightningLevel(0);
                }
            }));
            weatherLayout.addView(button2);

            weather = new PopupWindow(weatherLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)weather.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
      if(default1==false)weather.setBackgroundDrawable(new ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
weatherLayout1.setBackgroundDrawable(bg);
weatherLayout1.setPadding(20,0,20,0);
            weather.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(MainActivity, "An error occured: " + error, 1).show();
            }
    }}));
}
            
            menu = new PopupWindow(menuLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
           if(default1==true)menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
           if(mcpetheme==true)menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#94857f")));
		   if(default1==false)menu.setBackgroundDrawable(new ColorDrawable(GUIColor));
		   var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
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
	if(hitBehind){
		var x = Entity.getX(victim) - getPlayerX();
		var y = Entity.getY(victim) - getPlayerY();
		var z = Entity.getZ(victim) - getPlayerZ();
		Entity.setPosition(Player.getEntity(), x -1, y + 3, z -1);
		Entity.setPosition(Player.getEntity(), x +1, y + 3, z +1);
	}
	if(hitJump){
		if(victim)setVelY(getPlayerEnt(),0.5);
	}
	if(attackActions){
		if(victim)Server.sendChat(newAction);
	}
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

function namedem() {
    var mobs = Entity.getAll();
	var players = Server.getAllPlayers();
	var names = Server.getAllPlayerNames();
    for (var n = 0; n < mobs.length; n++) {
        var mobX = Entity.getX(mobs[n]) - getPlayerX();
        var mobY = Entity.getY(mobs[n]) - getPlayerY();
        var mobZ = Entity.getZ(mobs[n]) - getPlayerZ();
        if (mobX * mobX + mobY * mobY + mobZ * mobZ <= 20 * 20 && mobs[n] != getPlayerEnt()) {
		            if (Entity.getEntityTypeId(mobs[n]) == 10) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Chicken "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n])); 
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 11) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Cow "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 12) {if(Entity.getNameTag(mobs[n]) != ""){Entity.setNameTag(mobs[n], " "+Entity.getNameTag(mobs[n])+" "+Entity.getHealth(mobs[n])+" / "+Entity.getMaxHealth(mobs[n]));
			}
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Pig "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 13) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Sheep "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 14) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Wolf "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 15) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Villager "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 16) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Mushroom cow "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 17) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Squid "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 18) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Rabbit "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 19) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Bat "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 20) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Iron golem "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 21) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Snow golem "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 22) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Ocelot "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
			if (Entity.getEntityTypeId(mobs[n]) == 23) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Horse "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
			if (Entity.getEntityTypeId(mobs[n]) == 24) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Donkey "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
			if (Entity.getEntityTypeId(mobs[n]) == 25) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Mule "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
			if (Entity.getEntityTypeId(mobs[n]) == 26) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Skeleton horse "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
			if (Entity.getEntityTypeId(mobs[n]) == 27) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Zombie horse "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 32) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Zombie "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 33) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Creeper "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 34) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Skeleton "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 35) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Spider "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 36) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Zombie pigman "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 37) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Slime "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 38) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Enderman "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 39) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Silver fish "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 40) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Cave spider "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 41) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Ghast "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 42) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Magma cube "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 43) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Blaze "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 44) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Zombie villager "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
            if (Entity.getEntityTypeId(mobs[n]) == 45) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Witch "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
			if (Entity.getEntityTypeId(mobs[n]) == 46) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Stray "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
			if (Entity.getEntityTypeId(mobs[n]) == 47) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Husk "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
			if (Entity.getEntityTypeId(mobs[n]) == 48) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Wither skeleton "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
			if (Entity.getEntityTypeId(mobs[n]) == 49) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Guardian "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
			if (Entity.getEntityTypeId(mobs[n]) == 50) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Elder guardian "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
			if (Entity.getEntityTypeId(mobs[n]) == 51) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " NPC "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
			if (Entity.getEntityTypeId(mobs[n]) == 52) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Wither "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
		
	   }
    }
	/*for (var p = 0; p < players.length; p++) {
        var mobX2 = Entity.getX(players[p]) - getPlayerX();
        var mobY2 = Entity.getY(players[p]) - getPlayerY();
        var mobZ2 = Entity.getZ(players[p]) - getPlayerZ();
        if (mobX2 * mobX2 + mobY2 * mobY2 + mobZ2 * mobZ2 <= 20 * 20 && players[p] != getPlayerEnt()) {
if(Entity.getEntityTypeId(players[p]) == 63){
	if(Entity.getNameTag(players[p])!="undefined"){
                Entity.setNameTag(players[p], ""+Entity.getNameTag(players[p])+" "+Entity.getHealth(players[p])+"/"+Entity.getMaxHealth(players[p]));
	}
	}
	  }
	}*/
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
Entity.setPosition(Player.getEntity(), x, y + 3, z);
Server.sendChat("/tp " + Player.getName(Player.getEntity()) + space + x + space + y + space + z);
}
if(tapnuke)explode(x,y,z,5);
if(tapid)clientMessage(client + "Block ID: "+blockId+" Item ID: "+itemId+"\n"+" X: "+x+" Y: "+y+" Z: "+z);
if(tapjump)setVelY(getPlayerEnt(),0.5);
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
if(nametags) {
	
	namedem();
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
			Entity.setPosition(Player.getEntity(), getPlayerX(), 65, getPlayerZ()+5);
		}
	}
	if(glide){
if(Entity.getVelY(Player.getEntity()) <= 0){
setVelY(Player.getEntity(), -0.05)
}
}
if(coords)ModPE.showTipMessage(client + "\nX "+Math.round(getPlayerX())+", Y "+Math.round(getPlayerY())+", Z "+Math.round(getPlayerZ()));
if(armor)ModPE.showTipMessage(client + "\nHead: " + Entity.getArmorDamage(getPlayerEnt(), 0) + " Chest: " + Entity.getArmorDamage(getPlayerEnt(), 1) + " Legs: " + Entity.getArmorDamage(getPlayerEnt(), 2) + " Feet: " + Entity.getArmorDamage(getPlayerEnt(), 3));
if(autonuke)explode(getPlayerX(),getPlayerY(),getPlayerZ(),5);
if(grief)Level.setTile(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), vid, 0);
if(getvel)ModPE.showTipMessage("VelX: "+Math.round(Entity.getVelX(getPlayerEnt()))+" VelY "+Math.round(Entity.getVelY(getPlayerEnt()))+" VelZ "+Math.round(Entity.getVelZ(getPlayerEnt())));
if(yawpitch)ModPE.showTipMessage("pitch: "+Math.round(getPitch(getPlayerEnt()))+" \nYaw: "+Math.round(getYaw(getPlayerEnt()))+" ");
if(airwalk){
if(Level.getTile(getPlayerX(), getPlayerY() -2, getPlayerZ())=="0" || Level.getTile(getPlayerX(), getPlayerY() -2, getPlayerZ())=="95"){
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
if(changeSpeed==true)changeSpeedOnBlock();
if(brightness==true)bright();
if(lowhealth==true)spawnIfLowHealth();
if(fasteat==true)fastEat();
if(xray==true)xrayRepeat();
if (spider && Utils.Player.isCollidedHorizontally()) {
		if(getTile(Player.getX()+1, Player.getY(), Player.getZ())> 0 || getTile(Player.getX()-1, Player.getY(), Player.getZ())> 0 || getTile(Player.getX(), Player.getY(), Player.getZ()+1)> 0 || getTile(Player.getX(), Player.getY(), Player.getZ()-1)> 0) {
        setVelY(Player.getEntity(), 0.6);
              }
	    }
	    if(jump) {
		if(Entity.getVelY(getPlayerEnt())< -0.1) {
			setVelY(getPlayerEnt(),-0.5);
		}
		if(Entity.getVelY(getPlayerEnt())< 0.35 && Entity.getVelY(getPlayerEnt())> 0.2 && can==1 && canGetHP==1) {
			setVelY(getPlayerEnt(), 0.6);
			can = 2;
			HP = Entity.getHealth(getPlayerEnt());
			canGetHP = 0;
		}
		if(Entity.getVelY(getPlayerEnt())>gravity && can==2) {
			Player.setHealth(HP);
			canGetHP = 1;
			can = 0;
		}
		if(Entity.getVelY(getPlayerEnt())==gravity && can==0) {
			Player.setHealth(HP);
			canGetHP = 1;
			can = 1;
		}
	}
	    if(autowalk) {
    toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
    setVelX(getPlayerEnt(), 0.22 * playerDir[0]);
    setVelZ(getPlayerEnt(), 0.22 * playerDir[2]);
}
	if(tpAura){
		var players = Server.getAllPlayers();
		var names = Server.getAllPlayerNames();
		for(var i = 0; i < 4; i++){
			var x = Entity.getX(players[i]) - getPlayerX();
			var y = Entity.getY(players[i]) - getPlayerY();
			var z = Entity.getZ(players[i]) - getPlayerZ();
			if(names[i]!="undefined"){
			if(x!=0 || z!=0)Entity.setPosition(Player.getEntity(), x, y + 3, z);
			}
		}
	}
	if(keepHotbar)keepSlot();
	if(itemIndi)ModPE.showTipMessage(client+"\nHeld: "+Player.getCarriedItem()+":"+Player.getCarriedItemData()+", Amount: "+Player.getCarriedItemCount());
	if(bhop){
		if(Entity.getVelX(Player.getEntity())>0.1){
			if(getTile(Player.getX(), Player.getY()-2, Player.getZ())>0){
				Entity.setVelY(Player.getEntity(), 0.5)
			}
		}
		if(Entity.getVelX(Player.getEntity())<-0.1){
			if(getTile(Player.getX(), Player.getY()-2, Player.getZ())>0){
				Entity.setVelY(Player.getEntity(), 0.5)
			}
		}
		if(Entity.getVelZ(Player.getEntity())>0.1){
			if(getTile(Player.getX(), Player.getY()-2, Player.getZ())>0){
				Entity.setVelY(Player.getEntity(), 0.5)
			}
		}
		if(Entity.getVelX(Player.getEntity())<-0.1){
			if(getTile(Player.getX(), Player.getY()-2, Player.getZ())>0){
				Entity.setVelY(Player.getEntity(), 0.5)
			}
		}
	}
}

function toDirectionalVector(dir, a, b) {
    dir[0] = Math["cos"](a) * Math["cos"](b);
    dir[1] = Math["sin"](b);
    dir[2] = Math["sin"](a) * Math["cos"](b);
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

function scc() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
scc = new android.widget.PopupWindow();
var Layer5 = new android.widget.LinearLayout(MainActivity);
var sc1 = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new Button(MainActivity);

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
scc.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The scc Dialog Is Malfunctioning:"+e);
}
}});
}

      function sc3()
      {
      MainActivity.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(MainActivity);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('view-source:' + sc2);
/*Site URL*/
      new android.app.AlertDialog.Builder(MainActivity).setView(webs).show();
      }}));
      }

function iplu() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
iplu = new android.widget.PopupWindow();
var Layer4 = new android.widget.LinearLayout(ctx);
var ip1 = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new Button(ctx);

Dialog.setTitle("Enter IP to trace");
Dialog.setContentView(Layer4);

Layer4.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer4.addView(ip1);
Layer4.addView(Exit);

ip1.setText("");
ip1.setHint("IP address, domain, blank for your IP");
Exit.setText("Trace");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ip =ip1.getText();
Dialog.dismiss();
ip2();
print("Loading web page");
showMenuBtn();
}
});

iplu.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
iplu.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
iplu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The IPLU Dialog Is Malfunctioning:"+e);
}
}});
}

      function ip2()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('http://ip-api.com/json/' + ip);
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

function pip() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
pip = new android.widget.PopupWindow();
var Layer4 = new android.widget.LinearLayout(ctx);
var ddip = new android.widget.EditText(ctx);
var ddip2 = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new Button(ctx);

Dialog.setTitle("Enter server");
Dialog.setContentView(Layer4);

Layer4.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer4.addView(ddip);
Layer4.addView(ddip2);
Layer4.addView(Exit);

ddip.setText("");
ddip.setHint("IP");
ddip2.setText("");
ddip2.setHint("Port");
Exit.setText("View players");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ply =ddip.getText();
poy =ddip2.getText();
Dialog.dismiss();
goto();
Toast.makeText(ctx, "AlphaHack: Loading web page", 1).show();
showMenuBtn();
}
});

pip.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
pip.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
pip.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The IP Dialog Is Malfunctioning:"+e);
}
}});
}

function goto()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('http://mcapi.ca/query/'+ply+':'+poy+'/list');
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

function spa2() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
new10 = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var m1 = new android.widget.EditText(MainActivity);
var select1 = new Button(MainActivity);
var select2 = new Button(MainActivity);
var select3 = new android.widget.EditText(MainActivity);
var select4 = new Button(MainActivity);
var end1 = new Button(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
 
Dialog.setTitle("Enter text & select");
Dialog.setContentView(Layer);
 
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();

Layer.addView(m1);
m1.setText("AlphaHack!");
	
	var doubleBtnS = new android.widget.LinearLayout(MainActivity);
	    doubleBtnS.setOrientation(0);
		
		doubleBtnS.addView(select3);
	select3.setText("");
	select3.setHint("Seconds");
	
		doubleBtnS.addView(end1);
            
            end1.setText("Start spam");
            end1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
sec =select3.getText();
text =m1.getText();
seconds = sec;
antispam = true;
Dialog.dismiss();
showMenuBtn();
                }
            }));
			
Layer.addView(doubleBtnS);
	
Layer.addView(select1);

Layer.addView(select2);

Layer.addView(select4);
 
            select1.setText("LBSG");
            select1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
text =m1.getText();
seconds = "2000";
antispam = true;
Dialog.dismiss();
showMenuBtn();
                }
            }));
             
            select2.setText("Mineplex");
            select2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
text =m1.getText();
seconds = "3000";
antispam = true;
Dialog.dismiss();
showMenuBtn();
                }
            }));
            
            select4.setText("Leet.cc");
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
new10.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("Bypass error: "+e);
}
}});
}

function spa() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
spa = new android.widget.PopupWindow();
var Layer6 = new android.widget.LinearLayout(MainActivity);
var mm = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new Button(MainActivity);

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
spa.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("Spam dialog error:"+e);
}
}});
}

function dig1() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
digg = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var select1 = new Button(MainActivity);
var select2 = new Button(MainActivity);
var ddf = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
 
Dialog.setTitle("Select");
Dialog.setContentView(Layer);
 
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
 
Layer.addView(select1);
Layer.addView(select2);
 
            select1.setText("1 Block");
            select1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage(client + "§7Face a block to see!");
 autodestroy = true;
if(Level.getGameMode()=="2")vidd=true;
if(Level.getGameMode()=="1")vidd=false;
if(Level.getGameMode()=="0")vidd=true;
 Dialog.dismiss();
showMenuBtn();
                }
            }));
             
            select2.setText("More than 1 Block");
            select2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage(client + "§7Face a block to see!");
extraj = true;
if(Level.getGameMode()=="2")vidd=true;
if(Level.getGameMode()=="1")vidd=false;
if(Level.getGameMode()=="0")vidd=true;
Dialog.dismiss();
showMenuBtn();
                }
            }));
 
digg.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
digg.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
digg.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("Error :"+e);
}
}});
}

function oreDialog() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
orey = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var select1 = new Button(MainActivity);
var select2 = new Button(MainActivity);
var select3 = new Button(MainActivity);
var select4 = new Button(MainActivity);
var select5 = new Button(MainActivity);
var select6 = new Button(MainActivity);
var select7 = new Button(MainActivity);
var select8 = new Button(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
 
Dialog.setTitle("Select ore");
Dialog.setContentView(Layer);
 
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();

var doubleBtn1 = new android.widget.LinearLayout(MainActivity);
	    doubleBtn1.setOrientation(0);
		
		doubleBtn1.addView(select1);

		doubleBtn1.addView(select2);
 
            select1.setText("Coal ore");
            select1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
oreEsp = true;
oreId = "16";
var oreId = "16";
Dialog.dismiss();
                }
            }));
             
            select2.setText("Iron ore");
            select2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
oreEsp = true;
oreId = "15";
var oreId = "15";
Dialog.dismiss();
                }
            }));
			
			Layer.addView(doubleBtn1);
			
			var doubleBtn2 = new android.widget.LinearLayout(MainActivity);
	    doubleBtn2.setOrientation(0);
		
		doubleBtn2.addView(select3);

		doubleBtn2.addView(select4);
            
            select3.setText("Gold ore");
            select3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
oreEsp = true;
oreId = "14";
var oreId = "14";
Dialog.dismiss();
                }
            }));
            
            select4.setText("Diamond ore");
            select4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
oreEsp = true;
oreId = "56";
var oreId = "56";
Dialog.dismiss();
                }
            }));
			
			Layer.addView(doubleBtn2);
			
			var doubleBtn3 = new android.widget.LinearLayout(MainActivity);
	    doubleBtn3.setOrientation(0);
		
		doubleBtn3.addView(select5);

		doubleBtn3.addView(select6);
            
            select5.setText("Redstone ore");
            select5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
oreEsp = true;
oreId = "73";
var oreId = "73";
Dialog.dismiss();
                }
            }));
            
            select6.setText("Lapis ore");
            select6.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
oreEsp = true;
oreId = "21";
var oreId = "21";
Dialog.dismiss();
                }
            }));
			
			Layer.addView(doubleBtn3);
			
			var doubleBtn4 = new android.widget.LinearLayout(MainActivity);
	    doubleBtn4.setOrientation(0);
		
		doubleBtn4.addView(select7);

		doubleBtn4.addView(select8);
            
            select7.setText("Emerald ore");
            select7.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
oreEsp = true;
oreId = "129";
var oreId = "129";
Dialog.dismiss();
                }
            }));
            
            select8.setText("Quartz ore");
            select8.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
oreEsp = true;
oreId = "153";
var oreId = "153";
Dialog.dismiss();
                }
            }));
			
			Layer.addView(doubleBtn4);
 
orey.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
orey.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
orey.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("Ore error: "+e);
}
}});
}

function new9() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
fov = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var select1 = new Button(MainActivity);
var select2 = new Button(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
//var Exit = new Button(MainActivity);
 
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
new9.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("error: "+e);
}
}});
}

function new3() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
new3 = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var select1 = new Button(MainActivity);
var select2 = new Button(MainActivity);
var select3 = new Button(MainActivity);
var select4 = new Button(MainActivity);
var Exit = new Button(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
 
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
new3.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("ent spawn Dialog error:"+e);
}
}});
}

function new2() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
new2 = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var select1 = new Button(MainActivity);
var select2 = new Button(MainActivity);
var select3 = new Button(MainActivity);
var ddf = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new Button(MainActivity);
 
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
new2.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("Error :"+e);
}
}});
}

function named() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(MainActivity);
var ntd = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The setdiff Dialog Is Malfunctioning:"+e);
}
}});
}

function setdiff(){
Level.setDifficulty(nametd);
}

function nameMe() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(MainActivity);
var nt = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The setName Dialog Is Malfunctioning:"+e);
}
}});
}

function setName(){
Entity.setNameTag(Player.getEntity(), nametgg);
Server.sendChat("/nick set " + nametgg);
}

function block1() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(MainActivity);
var bd = new android.widget.EditText(MainActivity);
var bn = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The block L Dialog Is Malfunctioning:"+e);
}
}});
}

function setLight(){
Block.setLightLevel(idm, levelm);
}

function block2() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(MainActivity);
var bi = new android.widget.EditText(MainActivity);
var br = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The block R Dialog Is Malfunctioning:"+e);
}
}});
}

function setResis(){
Block.setExplosionResistance(idb, resis);
}

function newhealth() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(MainActivity);
var enh = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The set health Dialog Is Malfunctioning:"+e);
}
}});
}

function sethealth(){
Entity.setMaxHealth(getPlayerEnt(), newheart);
}

function horsehealth1() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer10 = new android.widget.LinearLayout(MainActivity);
var eha = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The set health Dialog Is Malfunctioning:"+e);
}
}});
}

		function new4() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
fov = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var select1 = new Button(MainActivity);
var select2 = new Button(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new Button(MainActivity);
 
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
new3.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The new Dialog Is Malfunctioning:"+e);
}
}});
}

function XGive() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var XP = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
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

function Give() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var ID = new android.widget.EditText(MainActivity);
var Amount = new android.widget.EditText(MainActivity);
var Damage = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Give Dialog Is Malfunctioning:"+e);
}
}});
}

function give2() {
Player.addItemInventory(I,A,D);
Server.sendChat("/give " + Player.getName(Player.getEntity()) + space + I + ":" + D + space + A);
}

function newn() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
newn = new android.widget.PopupWindow();
var Layerb5 = new android.widget.LinearLayout(MainActivity);
var nNuke = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new Button(MainActivity);

Dialog.setTitle("Enter nuke amount");
Dialog.setContentView(Layerb5);

Layerb5.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layerb5.addView(nNuke);
Layerb5.addView(Exit);

nNuke.setText("");
nNuke.setHint("Amount");
Exit.setText("Nuke");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
lenuke =nNuke.getText();
Dialog.dismiss();
setNuke();
showMenuBtn();
}
});

newn.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
newn.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
newn.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The newn Dialog Is Malfunctioning:"+e);
}
}});
}
					
			function setNuke(){
			   explode(getPlayerX(),getPlayerY(),getPlayerZ(),lenuke);
			   }

function newspeed() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(MainActivity);
var vspee = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The set speed Dialog Is Malfunctioning:"+e);
}
}});
}

function setspeed(){
ModPE.setGameSpeed(nspee);
}

function Tsele() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var X = new android.widget.EditText(MainActivity);
var Y = new android.widget.EditText(MainActivity);
var Z = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new Button(MainActivity);

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
setTp();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Teleport Dialog Is Malfunctioning:"+e);
}
}});
}

function setTp() {
Entity.setPosition(Player.getEntity(), px, py, pz);
Server.sendChat("/tp " + Player.getName(Player.getEntity()) + space + px + space + py + space + pz);
}

function setDialogW() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var w = new android.widget.EditText(MainActivity);
var w2 = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new Button(MainActivity);

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
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The WS Dialog Is Malfunctioning:"+e);
}
}});
}

function setWeather() {
Level.setRainLevel(v);
Level.setLightningLevel(v2);
}

function atact() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
atact = new android.widget.PopupWindow();
var Layerb4 = new android.widget.LinearLayout(MainActivity);
var editAtk = new android.widget.EditText(MainActivity);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new android.widget.Button(MainActivity);

Dialog.setTitle("When attacking send...");
Dialog.setContentView(Layerb4);

Layerb4.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layerb4.addView(editAtk);
Layerb4.addView(Exit);

editAtk.setText("");
editAtk.setHint("Command or message");
Exit.setText("Set action");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
newAction =editAtk.getText();
Dialog.dismiss();
showMenuBtn();
}
});

atact.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
atact.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
atact.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The atact Dialog Is Malfunctioning:"+e);
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
newSignText();
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

function newSignText(){
Level.setSignText(notex, notey, notez, text4, line4);
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
var tapid = false;
var noclip = false;
var extraj = false;
var getvel = false;
var yawpitch = false;
var airwalk = false;
var aimaura = false;
var aimbot = false;
var aimed = false;
var changeSpeed = false;
}

function twerking(){
TTick++
if(TTick==0)Entity.setSneaking(getPlayerEnt(), true);
if(TTick==2)Entity.setSneaking(getPlayerEnt(), false);
if(TTick==4)Entity.setSneaking(getPlayerEnt(), true);
if(TTick==6)Entity.setSneaking(getPlayerEnt(), false);
if(TTick==8)Entity.setSneaking(getPlayerEnt(), true);
if(TTick==10)Entity.setSneaking(getPlayerEnt(), false);

if(TTick==11)TTick = 0;
}

function getNearestEntity(maxrange) {
			var mobs = Entity.getAll();
			var players = Server.getAllPlayers();
			var small = maxrange;
			var ent = null;
	if(mobs!=null && players!=null){
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
  
function fastEat(){
var foodArray = new Array("260","282","297","319","320","322","335","349","350","354","357","360","363","364","365","366","367","382","391","392","400","411","412","423","424");
Player.getCarriedItem();
for(var i = 0; i < foodArray.length; i++){
    if(Player.getCarriedItem()==foodArray[i]){
        ModPE.setGameSpeed(100);
    }
    if(Player.getCarriedItem()!=foodArray[i]){
        ModPE.setGameSpeed(20);
    }
}
}

function bright(){
    var i = 0;
    i++
    Block.setLightLevel(i, 1000);
    ModPE.resetImages();
}

function xrayRepeat(){
	Block.setLightLevel(14, 1000);
	Block.setLightLevel(15, 1000);
	Block.setLightLevel(16, 1000);
	Block.setLightLevel(21, 1000);
	Block.setLightLevel(22, 1000);
	Block.setLightLevel(49, 1000);
	Block.setLightLevel(52, 1000);
	Block.setLightLevel(54, 1000);
	Block.setLightLevel(56, 1000);
	Block.setLightLevel(57, 1000);
	Block.setLightLevel(61, 1000);
	Block.setLightLevel(63, 1000);
	Block.setLightLevel(73, 1000);
	Block.setLightLevel(129, 1000);
	Block.setLightLevel(130, 1000);
	Block.setLightLevel(133, 1000);
	Block.setLightLevel(152, 1000);
	Block.setLightLevel(153, 1000);
	Block.setLightLevel(154, 1000);
        Block.setLightLevel(232, 1000);
Block.setRenderLayer(1,1);
Block.setRenderLayer(2,1);
Block.setRenderLayer(3,1);
Block.setRenderLayer(12,1);
Block.setRenderLayer(24,1);
Block.setRenderLayer(78,1);
ModPE.resetImages();
}

function spawnIfLowHealth(){
    var i = 0;
    Entity.getHealth(getPlayerEnt());
if(Entity.getHealth(getPlayerEnt())=="3"){
    i++
    if(i=="1"){
        Server.sendChat("/spawn");
    }
}
}

function changeSpeedOnBlock(){
    var x = getPlayerX();
    var y = getPlayerY();
    var z = getPlayerZ();
	var myArray = new Array("30","79","88","174");
	for(var i = 0; i < myArray.length; i++){
		/*is*/
    if(getTile(x, y -1, z)==myArray[i])ModPE.setGameSpeed(100);
    if(getTile(x, y -2, z)==myArray[i])ModPE.setGameSpeed(100);
    if(getTile(x +1, y, z)==myArray[i])ModPE.setGameSpeed(100);
    if(getTile(x, y, z +1)==myArray[i])ModPE.setGameSpeed(100);
    if(getTile(x -1, y, z)==myArray[i])ModPE.setGameSpeed(100);
    if(getTile(x, y, z -1)==myArray[i])ModPE.setGameSpeed(100);
    if(getTile(x +1, y -1, z)==myArray[i])ModPE.setGameSpeed(100);
    if(getTile(x, y -1, z +1)==myArray[i])ModPE.setGameSpeed(100);
    if(getTile(x -1, y -1, z)==myArray[i])ModPE.setGameSpeed(100);
    if(getTile(x, y -1, z -1)==myArray[i])ModPE.setGameSpeed(100);
    if(getTile(x +1, y -2, z)==myArray[i])ModPE.setGameSpeed(100);
    if(getTile(x, y -2, z +1)==myArray[i])ModPE.setGameSpeed(100);
    if(getTile(x -1, y -2, z)==myArray[i])ModPE.setGameSpeed(100);
    if(getTile(x, y -2, z -1)==myArray[i])ModPE.setGameSpeed(100);
		/*not*/
     if(getTile(x, y -1, z)!=myArray[i])ModPE.setGameSpeed(20);
    if(getTile(x, y -2, z)!=myArray[i])ModPE.setGameSpeed(20);
    if(getTile(x +1, y, z)!=myArray[i])ModPE.setGameSpeed(20);
    if(getTile(x, y, z +1)!=myArray[i])ModPE.setGameSpeed(20);
    if(getTile(x -1, y, z)!=myArray[i])ModPE.setGameSpeed(20);
    if(getTile(x, y, z -1)!=myArray[i])ModPE.setGameSpeed(20);
    if(getTile(x +1, y -1, z)!=myArray[i])ModPE.setGameSpeed(20);
    if(getTile(x, y -1, z +1)!=myArray[i])ModPE.setGameSpeed(20);
    if(getTile(x -1, y -1, z)!=myArray[i])ModPE.setGameSpeed(20);
    if(getTile(x, y -1, z -1)!=myArray[i])ModPE.setGameSpeed(20);
    if(getTile(x +1, y -2, z)!=myArray[i])ModPE.setGameSpeed(20);
    if(getTile(x, y -2, z +1)!=myArray[i])ModPE.setGameSpeed(20);
    if(getTile(x -1, y -2, z)!=myArray[i])ModPE.setGameSpeed(20);
    if(getTile(x, y -2, z -1)!=myArray[i])ModPE.setGameSpeed(20);
	}
		/*other*/
	Block.setFriction(79, 0.6000000238418579);
	Block.setFriction(174, 0.6000000238418579);
	Block.setFriction(88, 0.6000000238418579);
	Block.setShape(30, null, null, null, null, null, null);
}

function keepSlot(){
	Player.setSelectedSlotId(Player.getSelectedSlotId());
	Player.getCarriedItem();
	Player.setSelectedSlotId(Player.getCarriedItem());
}

function replaceAll(search, replacement, str) {
    var target = str;
    return target.replace(new RegExp(search, 'g'), replacement);
};
/*Thanks to godsoft029 !*/
function toAlphaSpeak(text){
	var end = text.toUpperCase();
	var normal = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
	var alpha = new Array("α","в","c","∂","є","ƒ","g","н","ι","נ","к","ℓ","м","η","σ","ρ","q","я","ѕ","т","υ","ν","ω","χ","у","z");
	for(i = 0; i < normal.length; i++) {
		end = replaceAll(normal[i], alpha[i], end);
	}
	return end;
}
function toBinarySpeak(text){
	var end = text.toUpperCase();
	var normal = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
	var binary = new Array("01100001","01100010","01100011","01100100","01100101", "01100110", "01100111", "01101000","01101001","01101010","01101011","01101100","01101101","01101110","01101111","01110000","01110001","01110010","01110011","01110100","01110101","01110110","01110111","01111000","01111001","01111010");
	for(i = 0; i < normal.length; i++) {
		end = replaceAll(normal[i], binary[i], end);
	}
	return end;
}
function toZalgoSpeak(text){
	var end = text.toUpperCase();
	var normal = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
	var zalgo = new Array("á̡̢","b́͏҉","c̷̨͘","d̨","e̢͘͡", "f̕͘", "g̶̡", "h́̏ͭ̄̚","i̹̞̱͍̪̙̠̳̰","j̧͢͞","k҉","ļ҉͜","m̸̢","n͈̯̱̝̲̯̬̘̭̫̗̭͈͍ͭ̔͐ͫ́̎̀̉̐ͫ̿̚","ó҉","p͆̌̂̿̊̌","q̢͛ͪ̆ͦ̓̏ͮ","r͝͠","s̨","t͠҉̸","u͏͝","v͏҉̨","w̶̡͜","x̟̗̘̗̅ͣ̐̅","y͔͇̠","Z̦͙̯̯͚̱͓̩̬͕̖̰̭͎̐̄̒ͤ͑̎̐̊̓ͥͬ̈́͌͂͊͟");
	for(i = 0; i < normal.length; i++) {
		end = replaceAll(normal[i], zalgo[i], end);
	}
	return end;
}
function toStrikeSpeak(text){
	var end = text.toUpperCase();
	var normal = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
	var strike = new Array("a̶","b̶","c̶","d̶","e̶","f̶","g̶","h̶","i̶","j̶","k̶","l̶","m̶","n̶","o̶","p̶","q̶","r̶","s̶","t̶","u̶","v̶","w̶","x̶","y̶","z̶");
		for(i = 0; i < normal.length; i++) {
		end = replaceAll(normal[i], strike[i], end);
	}
	return end;
}
function toSwearSpeak(text){
	var end = text.toUpperCase();
	var normal = new Array("BITCH","FUCK"); //TODO
	var swear = new Array("B¡tch","Fuck"); //TODO
		for(i = 0; i < normal.length; i++) {
		end = replaceAll(normal[i], swear[i], end);
	}
	return end;
}
function chatHook(str){
	if(str.charAt(0) != "." && str.charAt(0) != "/"){
		if(alphatext){
			preventDefault();
			com.mojang.minecraftpe.MainActivity.currentMainActivity.get().updateTextboxText("");
			Server.sendChat(" "+toAlphaSpeak(str));
		}
		if(binarytext){
			preventDefault();
			com.mojang.minecraftpe.MainActivity.currentMainActivity.get().updateTextboxText("");
			Server.sendChat(" "+toBinarySpeak(str));
		}
		if(zalgotext){
			preventDefault();
			com.mojang.minecraftpe.MainActivity.currentMainActivity.get().updateTextboxText("");
			Server.sendChat(" "+toZalgoSpeak(str));
		}
		if(striketext){
			preventDefault();
			com.mojang.minecraftpe.MainActivity.currentMainActivity.get().updateTextboxText("");
			Server.sendChat(" "+toStrikeSpeak(str));
		}
		if(preventsame){
			preventDefault();
			var alphabet1 = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
			var alphabet2 = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
		for(i = 0; i < alphabet1.length; i++) {
		Server.sendChat(""+alphabet1[i]+" "+i+" "+str+" "+i+" "+alphabet1[i]);
	}
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
                    if(oreEsp){
                var x = getPlayerX();
 		var y = getPlayerY();
 		var z = getPlayerZ();
 		var newX;
 		var newY;
 		var newZ;
 		for(var blockX = - oreTracersRange; blockX <= oreTracersRange; blockX++) {
 			for(var blockY = - oreTracersRange; blockY <= oreTracersRange; blockY++) {
 				for(var blockZ = - oreTracersRange; blockZ <= oreTracersRange; blockZ++) {
 					newX = x + blockX;
  					newY = y + blockY;
  					newZ = z + blockZ;
  					if(getTile(newX, newY, newZ) == oreId) {
  						AlphaHack.drawTracer(newX, newY, newZ, oreTracersGroundMode=="on"?true:false, oreTracersParticle);
  					}
  				}
  			}
 		}
                    }
                    if(playeresp){
                var x = getPlayerX();
 		var y = getPlayerY();
 		var z = getPlayerZ();
 		var newX;
 		var newY;
 		var newZ;
 		for(var blockX = - playerTracersRange; blockX <= playerTracersRange; blockX++) {
 			for(var blockY = - playerTracersRange; blockY <= playerTracersRange; blockY++) {
 				for(var blockZ = - playerTracersRange; blockZ <= playerTracersRange; blockZ++) {
 					newX = x + blockX;
  					newY = y + blockY;
  					newZ = z + blockZ;
					var mobs = Server.getAllPlayers();
                                        for (var e = 0; e < mobs.length; e++) {
                                        var newX = Entity.getX(mobs[e]) - getPlayerX();
                                        var newY = Entity.getY(mobs[e]) - getPlayerY();
                                        var newZ = Entity.getZ(mobs[e]) - getPlayerZ();
                                        if(Entity.getRenderType(mobs[e]) == 27 || Entity.getEntityTypeId(mobs[e]) == 63){
						AlphaHack.drawTracer(newX, newY, newZ, playerTracersGroundMode=="on"?true:false, playerTracersParticle);
                                        }
                                }
  			}
 		}
	}
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
                    if (autospam) {
                        Server.sendChat(""+text+"");
                    }
                    if(hackk){
                    	numhack++
                    	Server.sendChat("/login "+numhack);
                    	clientMessage("/login "+numhack);
                    }
                    if(hackk2){
                    	numhack2++
                    	Server.sendChat("/login "+numhack2+"' or '"+numhack2+"' = '"+numhack2);
                    	clientMessage("/login "+numhack2+"' or '"+numhack2+"' = '"+numhack2);
                    }
                    if (autodestroy) {
                        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), vidd);
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
                    if(aimbot){
			    var ent = getNearestEntity(7);
			    if(ent != null && Entity.getNameTag(ent) != " " || Entity.getNameTag(ent) != "")crosshairAimAt(ent);
		    }
                    if(twerk)twerking();
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
