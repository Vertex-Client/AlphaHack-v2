var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
/*
A͎̝͎͎̔͒̄ͯͤ́̍̚_͇̦̦̭ͥͪl̮̗̙̒̾_̣̭̠ͮͬp̥͚̯ͥ̉͒̆͋_̜͍̹̲̌̎͋̂ͭ̓ͥh̜̭̺ͪ͑_͔̗̮̼̺̰̰̳̄́̐͂ả̪̰̙̞͈̤̪͎͈͆_̳̱̘̗͙̪̖̖͐_̜̥͕̝̹̏ͪ͆̋̒̽̚ͅH͎̹̪̱͇̖̼͋̉_͉̯͇͖̜͈̖ͨ͆̔͊͛͑̀a̩͖̺͖̗̮̭͊ͮ͒̚_͇̲̀̈ͬ̆ͫ̊̒́c̙̹̼͚͒͋́͑ͧͪ̅ͩ_̫̮̮̤̺̯͉̠̠̽͊͊͛̇̀̾̐ḵ͕͖̉_̜̻̪͓̖͖ͩͯ̾̾̒̑̅̍ͪ_̣͕̤̓́̿̓͂͆̃̐P̰͕̾ͨE̬͎̪̹͎̖̠̋͒̓͑̅̀ͧͬͅ_̫̞̄͊_̙͕͎̱ͭͨ͑v̪͖̹͈̻̣͍͗̽̈̊̽̆̉͐2̬͔ͫͭͤ̓̈̔ͥ

</>--------------------</>
[AlphαHαck by: ArceusMαtt (c) 2016, 2017];
</>--------------------</>
[Free to use mod menu for MCPE under MIT license];
</>--------------------</>
[Pleαse contαct the developers of eαch code for permission to copy.];
http://imgur.com/6xCQAyT
http://imgur.com/xpEHET3
</>--------------------</>
[contributors: Godsoft029, Johnmαcrocrαft, αJ170, Peαcestorm(αgαmeR), αPRIC0CKS, Vertex client teαm];
</>--------------------</>

A͎̝͎͎̔͒̄ͯͤ́̍̚_͇̦̦̭ͥͪl̮̗̙̒̾_̣̭̠ͮͬp̥͚̯ͥ̉͒̆͋_̜͍̹̲̌̎͋̂ͭ̓ͥh̜̭̺ͪ͑_͔̗̮̼̺̰̰̳̄́̐͂ả̪̰̙̞͈̤̪͎͈͆_̳̱̘̗͙̪̖̖͐_̜̥͕̝̹̏ͪ͆̋̒̽̚ͅH͎̹̪̱͇̖̼͋̉_͉̯͇͖̜͈̖ͨ͆̔͊͛͑̀a̩͖̺͖̗̮̭͊ͮ͒̚_͇̲̀̈ͬ̆ͫ̊̒́c̙̹̼͚͒͋́͑ͧͪ̅ͩ_̫̮̮̤̺̯͉̠̠̽͊͊͛̇̀̾̐ḵ͕͖̉_̜̻̪͓̖͖ͩͯ̾̾̒̑̅̍ͪ_̣͕̤̓́̿̓͂͆̃̐P̰͕̾ͨE̬͎̪̹͎̖̠̋͒̓͑̅̀ͧͬͅ_̫̞̄͊_̙͕͎̱ͭͨ͑v̪͖̹͈̻̣͍͗̽̈̊̽̆̉͐2̬͔ͫͭͤ̓̈̔ͥ
*/

var MainActivity = ctx;

//Get language of client side minecraft
var getLanguage = ModPE.getLanguage();
/*Thanks to godsoft029 and many others for german translate*/
/*Thanks to MasterProGame & TheNewHEROBRINE for italian translate*/
/*Thanks to walpo for spanish translate*/
/*Thanks to johnmacrocraft for korean translate*/

//get version of client side minecraft
var getVer = ModPE.getMinecraftVersion();

var View = android.view.View;

//Defines
//define gui incase of error
var GUI;
//define menu incase of error
var menu;
//define active incase of error
var active;
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
var version = "0.8.5";
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
var vid = "";
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
//strings
var notex;
var notey;
var notez;
var oreId = "";
var numhack2 = 0;
var TTick = 0;
var hide = false;
var newAction = "";
var actionHeart = "";
var newAction2 = "";
var cidm8 = "";
var jumpheight = '5';
var aimrange = '7';
var rainId = '';
var shadow1X = '30';
var shadow1Y = '2';
var keybind1 = false;
var haxMode = false;
var newtime = '';

var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math["PI"] / 180;

var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;

var fps = 0;
var lastLoop = new Date;
var aLoop = lastLoop.getMilliseconds();
function ping(){
    var thisLoop = new Date;
    var bLoop = thisLoop.getMilliseconds();
    fps = 1000 / (bLoop - aLoop);
    aLoop = bLoop;
    return bLoop;
}

var onBackground = {
	returnAddress:function(){
		/*godsofts json to js ip viewer, do not copy! this will only work in this mod!*/
		return getIp(function(info){clientMessage(client + "\n" + "External IP: " + info[0] + "\nCountry: "+info[1]+ "\nRegion: "+info[2])});
	},
	returnClient:function(){
		return getClient();
	},
	returnDevice:function(){
		return ModPE.getOS();
	},
	ping:function(){
		return ping();
	},
	checkUpdate:function(){
		return clientMessage("The auto updater is a WIP, check for updates later!");
	}
}

/*
  dragop
http://imgur.com/6xCQAyT
http://imgur.com/xpEHET3
  Thank you godsoft029
*/

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
			      }
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
	},
	File: {
		getTextFromFile: function (file) {

			let readed = (new java.io.BufferedReader(new java.io.FileReader(file)));
			let data = new java.lang.StringBuilder();
			let string;
			while((string = readed.readLine()) != null)
				data.append(string + "\n");
			return data.toString();
		}
	},
	Render: {
		getFloatBuffer: function (fArray) {
			let bBuffer = java.nio.ByteBuffer.allocateDirect(fArray.length * 4);
			bBuffer.order(java.nio.ByteOrder.nativeOrder());

			let fBuffer = bBuffer.asFloatBuffer();
			fBuffer.put(fArray);
			fBuffer.position(0);
			return fBuffer;
		},
		getShortBuffer: function (sArray) {
			let bBuffer = java.nio.ByteBuffer.allocateDirect(sArray.length * 2);
			bBuffer.order(java.nio.ByteOrder.nativeOrder());

			let sBuffer = bBuffer.asShortBuffer();
			sBuffer.put(sArray);
			sBuffer.position(0);
			return sBuffer;
		},
		renderer: null,
		glSurface: null,
		fov: 90,
		color: android.graphics.Color.argb(180, 0, 255, 0),
		initted: false,
		init: function () {
			if(!tracers1)return;
			let options = Utils.File.getTextFromFile(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/", "options.txt"));

			options = options.split("\n");
			options.forEach(function (entry) {
				let suboption = entry.split(":");
				if(suboption[0] == "gfx_field_of_view") {
					Utils.Render.fov = suboption[1];

				}
			});
			this.renderer = new android.opengl.GLSurfaceView.Renderer({
				onSurfaceCreated: function (gl, config) {
					let GL10 = javax.microedition.khronos.opengles.GL10;
					gl.glClearColor(0, 0, 0, 0);
					gl.glShadeModel(GL10.GL_SMOOTH);
					gl.glClearDepthf(1.0);
					gl.glDisable(GL10.GL_DITHER);
					gl.glEnable(GL10.GL_DEPTH_TEST);
					gl.glDepthFunc(GL10.GL_LEQUAL);
					gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_NICEST);
				},
				onSurfaceChanged: function (gl, width, height) {
					let GL10 = javax.microedition.khronos.opengles.GL10;
					gl.glMatrixMode(GL10.GL_PROJECTION);
					gl.glLoadIdentity();
					android.opengl.GLU.gluPerspective(gl, Utils.Render.fov, width / height, 0.1, 100);
					gl.glMatrixMode(GL10.GL_MODELVIEW);
					gl.glLoadIdentity();
				},
				onDrawFrame: function (gl) {
					
					let GL10 = javax.microedition.khronos.opengles.GL10;
					gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
					gl.glLoadIdentity();
					
					if(tracers1) {
						try {
							
							gl.glDisable(GL10.GL_LIGHTING);
							let yaw = getYaw() % 360;
							let pitch = getPitch() % 360;
							let eyeX = getPlayerX();
							let eyeY = getPlayerY() + 1;
							let eyeZ = getPlayerZ();

							let dCenterX = Math.sin(yaw / 180 * Math.PI);
							let dCenterZ = Math.cos(yaw / 180 * Math.PI);
							let dCenterY = Math.sqrt(dCenterX * dCenterX + dCenterZ * dCenterZ) * Math.tan((pitch - 180) / 180 * Math.PI);

							let centerX = eyeX - dCenterX;
							let centerZ = eyeZ + dCenterZ;
							let centerY = eyeY - dCenterY;

							android.opengl.GLU.gluLookAt(gl, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, 0, 1.0, 0);

							
							let all = Utils.Entity.getAll();
		let players = Server.getAllPlayers();
		let px = getPlayerX();
		let py = getPlayerY();
		let pz = getPlayerZ();
		all.forEach(function (entry) {
			let x = Entity.getX(entry) - px;
			let y = Entity.getY(entry) - py;
			let z = Entity.getZ(entry) - pz;
			let dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
			if(dist <= 200 && dist > 0.1 && Entity.getEntityTypeId(entry) <= 63)
				Utils.Render.drawLine(gl, px, py + 0.8, pz, Entity.getX(entry), Entity.getY(entry) + 1, Entity.getZ(entry));
		});
		players.forEach(function (entry) {
			let x = Entity.getX(entry) - px;
			let y = Entity.getY(entry) - py;
			let z = Entity.getZ(entry) - pz;

			let dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));

			if(dist <= 200 && dist > 0.1 && Entity.getEntityTypeId(entry) <= 63)
				Utils.Render.drawLine(gl, px, py + 0.8, pz, Entity.getX(entry), Entity.getY(entry) + 1, Entity.getZ(entry));
		});
							
							
						} catch(e) {
							print("RenderProblem: " + e);
						}

					} 
				}
			});
			ctx.runOnUiThread(new java.lang.Runnable({
				run: function () {
					Utils.Render.glSurface = new android.opengl.GLSurfaceView(ctx);
					Utils.Render.glSurface.setZOrderOnTop(true);


					Utils.Render.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
					Utils.Render.glSurface.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT);
					Utils.Render.glSurface.setRenderer(Utils.Render.renderer);
					Utils.Render.glSurface.setRenderMode(1);

					ctx.getWindow().getDecorView().addView(Utils.Render.glSurface);

					Utils.Render.initted = true;
				}
			}));

		},
		drawBox: function (gl, x, y, z, xsize, ysize, zsize) {
			
			let GL10 = javax.microedition.khronos.opengles.GL10;
			let size = new Array(xsize, ysize, zsize);
			let vertices = [
				0, 0, 0,
				size[0], 0, 0,
				0, 0, size[2],
				size[0], 0, size[2],

				0, size[1], 0,
				size[0], size[1], 0,
				0, size[1], size[2],
				size[0], size[1], size[2]
			];
			let vertexBuffer = Utils.Render.getFloatBuffer(vertices);
			let lineIndices = [
				0, 1,
				0, 2,
				0, 4,

				3, 1,
				3, 2,
				3, 7,

				5, 4,
				5, 7,
				5, 1,

				6, 4,
				6, 7,
				6, 2
			];
			let polyIndices = [
				0, 1, 4,
				1, 4, 5,

				2, 3, 6,
				7, 6, 3,

				1, 3, 7,
				7, 1, 5,

				0, 2, 6,
				6, 0, 4,

				0, 1, 2,
				3, 1, 2,

				4, 5, 6,
				7, 5, 6
			];
			let lineBuffer = Utils.Render.getShortBuffer(lineIndices);
			let polyBuffer = Utils.Render.getShortBuffer(polyIndices);
			gl.glTranslatef(x, y, z);
			gl.glFrontFace(GL10.GL_CCW);
			gl.glEnable(GL10.GL_BLEND);
			//gl.glEnable(GL10.GL_LINE_SMOOTH);
			gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
			gl.glLineWidth(4);
			gl.glColor4f(android.graphics.Color.red(Utils.Render.color) / 255,android.graphics.Color.green(Utils.Render.color) / 255, android.graphics.Color.blue(Utils.Render.color) / 255, 0.7);
			gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
			gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
			gl.glDrawElements(GL10.GL_LINES, lineIndices.length, GL10.GL_UNSIGNED_SHORT, lineBuffer);
			gl.glColor4f(android.graphics.Color.red(Utils.Render.color) / 255, android.graphics.Color.green(Utils.Render.color) / 255, android.graphics.Color.blue(Utils.Render.color) / 255, 0.2);
			gl.glDrawElements(GL10.GL_TRIANGLES, polyIndices.length, GL10.GL_UNSIGNED_SHORT, polyBuffer);
			gl.glDisable(GL10.GL_LINE_SMOOTH);
			gl.glTranslatef(-x, -y, -z);
		},
		drawLine: function (gl, x, y, z, x2, y2, z2) {
				if(!tracers1)return;
			let GL10 = javax.microedition.khronos.opengles.GL10;
			let size = new Array(x2, y2, z2);
			let vertices = [
				0, 0, 0,
				x2 - x, y2 - y, z2 - z
			];
			let vertexBuffer = Utils.Render.getFloatBuffer(vertices);
			let indices = [
				0, 1
			];
			let indexBuffer = Utils.Render.getShortBuffer(indices);
			gl.glTranslatef(x, y, z);
			gl.glEnable(GL10.GL_BLEND);
			gl.glDepthMask(false);
			//gl.glEnable(GL10.GL_LINE_SMOOTH);
			gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
			gl.glLineWidth(4);
			gl.glColor4f(android.graphics.Color.red(Utils.Render.color) / 255,android.graphics.Color.green(Utils.Render.color) / 255, android.graphics.Color.blue(Utils.Render.color) /255, 0.7);
			gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
			gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
			gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
			gl.glTranslatef(-x, -y, -z);
			gl.glDepthMask(true);
			gl.glDisable(GL10.GL_LINE_SMOOTH);
		}
	},
	Entity: {
		getAll: function () {
				return Utils.Entity.allEntitys;
		},
		targettedMobs: [true, true],
		/*first mobs second players*/
		allEntitys: new Array(),
		charEnts: new Array(),
		crosshairAimAt: function (ent, pos) {
			if(ent != null) {
				let x = Entity.getX(ent) - getPlayerX();
				let y = Entity.getY(ent) - getPlayerY();
				let z = Entity.getZ(ent) - getPlayerZ();
				if(pos != null && pos instanceof Array) {
					x = Entity.getX(ent) - pos[0];
					y = Entity.getY(ent) - pos[1];
					z = Entity.getZ(ent) - pos[2];
				}
				if(Entity.getEntityTypeId(ent) != 63)
					y += 0.5;

				let len = Math.sqrt(x * x + y * y + z * z);
				y = y / len;
				let pitch = Math.asin(y);
				let deg_rad = 180 / Math.PI;
				pitch = pitch * deg_rad;
				pitch = -pitch;
				let yaw = -Math.atan2(x, z) * deg_rad;
				if(pitch < 89 && pitch > -89) {
					Entity.setRot(Player.getEntity(), yaw, pitch);
				}
			}
		},
		getNearestEntity(maxrange, bypass) {
			let mobs = Utils.Entity.getAll();
			let players = Server.getAllPlayers();

			let small = maxrange;
			let ent = null;
			let much = 0;

			mobs.forEach(function (entry) {
				let x = Entity.getX(entry) - getPlayerX();
				let y = Entity.getY(entry) - getPlayerY();
				let z = Entity.getZ(entry) - getPlayerZ();

				let dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));

				if(dist >= small || dist <= 0.001) return;


				if(Entity.getEntityTypeId(entry) == 63 && Entity.getNameTag(entry) == "")
					return;



				if(!(Utils.Entity.targettedMobs[1] == true && Entity.getEntityTypeId(entry) == 63) &&
					!(Utils.Entity.targettedMobs[0] == true && Entity.getEntityTypeId(entry) < 63)) return;


				if(Entity.getHealth(entry) > 0 && Entity.getNameTag(entry) == "") {
					small = dist;
					ent = entry;
				}


			});

			players.forEach(function (entry) {
				let x = Entity.getX(entry) - getPlayerX();
				let y = Entity.getY(entry) - getPlayerY();
				let z = Entity.getZ(entry) - getPlayerZ();

				let dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));

				if(dist >= small || dist <= 0.001) return;

				if(bypass && y > 0.8) {
					let xVel = Entity.getVelX(entry);
					let yVel = Entity.getVelY(entry);
					let zVel = Entity.getVelZ(entry);
					if(xVel == 0 && yVel == 0 && zVel == 0)
						return;
				}


				if(Entity.getEntityTypeId(entry) == 63 && Entity.getNameTag(entry) == "")
					return;



				if(!(Utils.Entity.targettedMobs[1] == true && Entity.getEntityTypeId(entry) == 63) &&
					!(Utils.Entity.targettedMobs[0] == true && Entity.getEntityTypeId(entry) < 63)) return;


				if(Entity.getHealth(entry) > 0 && Entity.getNameTag(entry) == "") {
					small = dist;
					ent = entry;
				}

			});

			return ent;
		}
	}
};

//booleans
var abcabc123 = false;
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
var paimaura = false;
var maimaura = false;
var aim;
var aimbot = false;
var aimed = false;
var aim2;
var aimbot2 = false;
var aimed2 = false;
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
var icewalk = false;

var facedInfo = false;
var facedInfo2 = false;
var tapParti = false;
var hitmorph = false;
var hitaction2 = false;
var hitrmef = false;
var onfriction = false;
var itemrain = false;
var rainitem = false;
var doubledrop = false;
var censorbypass = false;
var hitbox1 = false;
var bowaura = false;
var legalenchant = false;
var tracers1 = false;
var entind = false;
var screenind = false;
var chatind = false;
var destroyind = false;
var ridenear = false;
var noentity = false;
var autosword = false;
var noknock = false;
var checkping = false;
var dropind = false;
var autoply1 = false;

var showActive = false;
var showActive2 = false;
var betaTestMenu = false;
var defaultbtnc = true

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
//carrotboost
var particle33 = false;
//witchspell
var particle34 = false;

//define mod menu color changes and sizes
var GUIColor = android.graphics.Color.TRANSPARENT;

var default1 = true;
var mcpetheme = false;

var btnPos = android.view.Gravity.RIGHT;
var activePos = android.view.Gravity.LEFT;

var GUIColor1 = android.graphics.Color.TRANSPARENT;
var GUIColor2 = android.graphics.Color.BLACK;
var GUIColor3 = android.graphics.Color.WHITE;
var GUIColor4 = android.graphics.Color.RED;
var GUIColor5 = android.graphics.Color.BLUE;
var GUIColor6 = android.graphics.Color.GRAY;
var GUIColor7 = android.graphics.Color.LTGRAY;
var GUIColor8 = android.graphics.Color.YELLOW;
var GUIColor9 = android.graphics.Color.CYAN;
var GUIColor10 = android.graphics.Color.DKGRAY;
var GUIColor11 = android.graphics.Color.GREEN;
var GUIColor12 = android.graphics.Color.MAGENTA;

var GUIName = android.graphics.Color.WHITE;

var GUIPos = android.view.Gravity.CENTER;

var GUIBtns = android.graphics.Color.BLUE;

var GUIBtns1 = android.graphics.Color.TRANSPARENT;
var GUIBtns2 = android.graphics.Color.BLACK;
var GUIBtns3 = android.graphics.Color.WHITE;
var GUIBtns4 = android.graphics.Color.RED;
var GUIBtns5 = android.graphics.Color.BLUE;
var GUIBtns6 = android.graphics.Color.GRAY;
var GUIBtns7 = android.graphics.Color.LTGRAY;
var GUIBtns8 = android.graphics.Color.YELLOW;
var GUIBtns9 = android.graphics.Color.CYAN;
var GUIBtns10 = android.graphics.Color.DKGRAY;
var GUIBtns11 = android.graphics.Color.GREEN;
var GUIBtns12 = android.graphics.Color.MAGENTA;

var GUIStroke = android.graphics.Color.BLUE;

var GUIStroke1 = android.graphics.Color.BLUE;
var GUIStroke2 = android.graphics.Color.BLACK;
var GUIStroke3 = android.graphics.Color.WHITE;
var GUIStroke4 = android.graphics.Color.RED;
var GUIStroke5 = android.graphics.Color.BLUE;
var GUIStroke6 = android.graphics.Color.GRAY;
var GUIStroke7 = android.graphics.Color.LTGRAY;
var GUIStroke8 = android.graphics.Color.YELLOW;
var GUIStroke9 = android.graphics.Color.CYAN;
var GUIStroke10 = android.graphics.Color.DKGRAY;
var GUIStroke11 = android.graphics.Color.GREEN;
var GUIStroke12 = android.graphics.Color.MAGENTA;

var GUISize = "2";

var GUIText = android.graphics.Color.WHITE;

var GUIText2 = android.graphics.Color.BLACK;
var GUIText3 = android.graphics.Color.WHITE;
var GUIText4 = android.graphics.Color.RED;
var GUIText5 = android.graphics.Color.BLUE;
var GUIText6 = android.graphics.Color.GRAY;
var GUIText7 = android.graphics.Color.LTGRAY;
var GUIText8 = android.graphics.Color.YELLOW;
var GUIText9 = android.graphics.Color.CYAN;
var GUIText10 = android.graphics.Color.DKGRAY;
var GUIText11 = android.graphics.Color.GREEN;
var GUIText12 = android.graphics.Color.MAGENTA;

//fixed color changing menus making on/off buttons look weird;
var extraBtns = android.graphics.Color.RED;
var extraBtns2 = android.graphics.Color.GREEN;

var extraBtns3 = android.graphics.Color.BLACK;
var extraBtns4 = android.graphics.Color.BLUE;

function styleButton(){
/*thanks godsoft029 for working on this with me.*/
let button = new android.widget.Button(ctx);
button.setTextColor(GUIText);
button.setFocusableInTouchMode(false);
button.setTransformationMethod(null);
button.setSoundEffectsEnabled(true);
	/* new mcpc/mcpe button */
var mcpeBg = "iVBORw0KGgoAAAANSUhEUgAAAX8AAABOCAYAAADIFRbbAAAGtklEQVR42u3dzW7iMBSG4d7eILEIUhYgdTFihRCLCs1qbmfEAqm9RaYJBGznHP8kAYr9Lh55OoU0cczhi3HTt7e3txMAoDh0AgBQ/AEA5RT/z+Pn6d/x37D2oLTHO7RfTjv0+TH/f0hsY/vnOPHjU8/TM8+f0La+7jD+DhNt797774xDa3uBcdm5y/kdO/4fPI4mqQ9Tvs6GjsPQ8xPPx3a3Pe0/9m0rFn9rILsDO/C1OQjdATlkezFfu+61vfZYjs6xHe0XnPm12D/HtP5IfXzU156BJB7P8b7nzy2cVpvwfKkAusczZjzfe/+tr7/C29Nea97zexh2frXtR43/Ef3/E+tD0vhJrA+p56u3/cDju8LftCR/kv+PSv5W4XvB5D96/6UriC/PFYW5f4dPkj/Jf1zyNwdu88D9HwDAK1tv1qdFtbgKJv/2nYKOA4CXtt1sz4W/9hR/d46IjgOATIo/yR8ACrLbt6l/Va/aNjznv6PTAODlk/93kO8Kv7f4k/wBIK/iH0z+5jIh5vwBIJM5/0vq9yf/A8kfAHL7wLdN/pUn+Xe/OUbyB4CSkj9z/gCQj+8gv1quWosl6/wBoJzVPpfi3yD5A0Ahyb9J/N7ib94djnX+AJDXOv+mlZP/4XZ7UJI/AGT0G77LwDp/ij8AlJb8mfMHgPzm/EPJn3v7AADJn44DgBKSv7nOn+IPACUm/w3FHwCKm/Mn+QNAKcnf+Kv3FH8AyKD4b7an2XzW3tGzab3Jn3v7AEA+xb8r/Prf8CX5A0C5yZ91/gDAOn8AwAsXf9b5AwDJn+QPALn7++dv4r19WO0DAFngL3kBQIGS5vxJ/gCQyQe+wXX+JH8AyMtun7jOn+QPANkk/8V8EZn8P0j+APDyPpjzBwDW+ZP8AYDk35/zp9MAIIvin5T8mfYBgBLn/Ok0ACgv+bPOHwBeH/f2AYBCtff1qbm3DwAUJTznfzgX/qYl+QNAJnP+UXf1PJD8ASCr1T7Lhb/4N4W/mfYh+QNAacmfOX8AyOr2Dt0yT/6GLwAUVvxZ5w8AJdntI5I/c/4AkFfy39ySv/eXvFjtAwCZFf/qkvwr1vkDAMmfOX8AKHidP/f2AYD8Vvuwzh8ACv4lr+YKQF/tc0HxB4BMkn/ofv5d4f88kPwBIKt1/qG7enaaJ9BxAFBA8mfOHwAyXO2T8jd8Kf4AQPIHAOSa/M11/hR/ACgx+W8o/gDAnD8AIM/k371LNK35TmG1xt3hGrP57PzviMe7bXujIefr2a/v7c0vrfl9bft3blvv/bY77qa1jiex37TW7J/1+7rdRtt+/+z173Nr7k/S8fgeZ56n1P4yBtisuh2Hdv5Tty+Nl6TtXPavN27rfv9Y5zvieK3/H3BexP10x38dGJ9m/7rbXSo/5/J4aTz7jss3bsXzu5RfT75x2B1/VJ15RCuMH6vfnPPSvW7V7UX2g1gvY16Hyvfl4v9h/DpwLQ9wS7WwT7j2+GrRf25tFzizUzviAT+6dQtCdzIr+/hD+2m6HtvcGdjm10a/XAt9V/h/X1pznyKORz0W7fwO6C9pbIjnfsj2K2XcxByvsX9WfxvP9/bPZRva8V6/73l+Sv9pL3jfz9P61TdOQufLO/7nC/l1IO3HMty/Wt0wz5d7LLH9OvZ10dsvQS84vNuF3dpfT3/0zqkw7qPGj9I+NPm7ic13BWAm/6hE/QOSf9Q78oDk3z1+yuQvJsA7JP/rcVazyZK/dsU4ZfIXE+qTkn9v/I9I/mqhfVDyN+8tk5x4C0/+4hXv1Mm/mRvqRCXh91tBin7HVBJb6B3LfYz0c1KTsLp/bgKXUpBQ6MSEVgdOqJYwlYSgpjUtuT34Skm8KlyukhKbdvzuVIC0/d4V1rx/JdXbTyHBRiXkmCtTzxWBeuVV+ZPzqGSbmBh7/SMdb+UZj3XC+BRmALqrs6mPN3amItT/UfUsoj6MveIOHpexD3Ly350/HHDvBaEljS6BNu2oOUzfXOUUiTSm1eYYzZ+rvFN3CVdMkoEEayWimIQQcQXhmyO+ezLS5uSX47cfNedvfn9+ewPQrkClK7heslKuaJI/k0pMvOqc+ZD+WyZccRj/H3WFK7wB9PqnCn+GYc0AGG/cD034visX6UrQV5fqhPrwwPr2sOQfO4eZkvy1Odip3vGlOeHY5K8eh5l4leTfS7z1anDyf9ZnJDHJP2oOXJrTHpD8rwnSk/ytD9lDn2ENSP5Rc95PTv5qIlUWIYxN/sHPdOYL69y9WvJXPyPwPe6ZyR8AUBQ6AQAo/gCA7P0HKE0xq69QyZIAAAAASUVORK5CYII=";
if(mcpetheme==true)button.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(mcpeBg, 0) , 0, android.util.Base64.decode(mcpeBg, 0).length)));
var buttonBg = new android.graphics.drawable.GradientDrawable();
if(defaultbtnc==true)buttonBg.setColor(android.graphics.Color.parseColor("#93000000"));
if(defaultbtnc==false)buttonBg.setColor(GUIBtns);
if(mcpetheme==false)buttonBg.setStroke(4, GUIStroke);
if(mcpetheme==false)buttonBg.setCornerRadius(10);
button.setBackgroundDrawable(buttonBg);
return button;
}

function styleInput(){
let input = new android.widget.EditText(ctx);
input.setTextColor(GUIText);
var inputBg = new android.graphics.drawable.GradientDrawable();
inputBg.setColor(android.graphics.Color.parseColor("#93000000"));
inputBg.setStroke(4, GUIStroke);
inputBg.setCornerRadius(10);
input.setBackgroundDrawable(inputBg);
return input;
}

//tracer draw function || variable
var AlphaHack = {};
AlphaHack.drawTracer = function(x, y, z, groundMode, particleName) {
	for(var count = 0; count <= 25; count++) {
		Level.addParticle(ParticleType.flame, x, y, z, (getPlayerX() - x) / count, groundMode?0:((getPlayerY() - y) / count), (getPlayerZ() - z) / count, 2);
	}
}
/*
* http://github.edroidthedev.com/?repo=ModPEAddon/ModPE/getFromUrl.js
*/
ModPE.getFromUrl = function(url, errs){
    errs = errs || 0;
    try {
        var url = new java.net.URL(url);
        var connection = url.openConnection();
        var inputStream = connection.getInputStream();
        var data = "";
        var bufferedReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
        var line = "";
        while((line = bufferedReader.readLine()) != null){
            data += line + "\n";
        }
        var result = data.toString();
        bufferedReader.close();
    } catch(err) {
        result = (errs ? "Getting URL Failed. Error: " + err : 0);
        print("Error ModPE.getFromUrl(): " + err);
    } finally {
        if(result == null || result == undefined){
            result = (errs ? "Result is null" : 0);
        }
    }
    return result;
};
ModPE.JSON = {
  parse: function(str){
    return Function("return " + str)();
  }
};
var details = "https://raw.githubusercontent.com/ArceusMatt/AlphaHack-v2/master/details.json";
var jsoncontent = ModPE.getFromUrl(details);
var update2 = ModPE.JSON.parse(jsoncontent);
var newupdate = update2.version;
if(version != newupdate)startUp(newupdate);
function startUp(update){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var updiaLayout = new android.widget.LinearLayout(MainActivity);
            var updiaScroll = new android.widget.ScrollView(MainActivity);
            var updiaLayout1 = new android.widget.LinearLayout(MainActivity);
            updiaLayout.setOrientation(1);
            updiaLayout1.setOrientation(1);
            updiaScroll.addView(updiaLayout);
            updiaLayout1.addView(updiaScroll);
			
			var text1 = new android.widget.TextView(MainActivity);
            text1.setText("\n\n\nA new update is available.\nBug fixes, less crashes, new features & more!\nWould you like to update AlphaHack v2?\nCurrent version: "+version+"\nNew version: "+update+"\n");
            text1.setTextColor(android.graphics.Color.WHITE);
			text1.setPadding(10,20,130,20);
            updiaLayout.addView(text1);
			
			var doubleLayout = new android.widget.LinearLayout(MainActivity);
			
			textView1 = new styleButton();
			textView1.setText("Later");
			textView1.setTextColor(android.graphics.Color.BLUE);
			textView1.setPadding(185,10,185,10);
			textView1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
				updia.dismiss();
                }
            }));
			doubleLayout.addView(textView1);
			
			textView2 = new styleButton();
			textView2.setText("Update");
			textView2.setTextColor(android.graphics.Color.BLUE);
			textView2.setPadding(185,10,185,10);
			textView2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
var urls5 = new android.content.Intent(MainActivity);
urls5.setAction(android.content.Intent.ACTION_VIEW);
urls5.setData(android.net.Uri.parse("https://arceusmatt.github.io/alphahack"));
MainActivity.startActivity(urls5);
                }
            }));
			doubleLayout.addView(textView2);
			
			updiaLayout.addView(doubleLayout);
			
			            updia = new android.widget.PopupWindow(updiaLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/1.01, MainActivity.getWindowManager().getDefaultDisplay().getHeight()/1.01);
		   var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.BLACK);
      bg.setStroke(10,android.graphics.Color.BLUE);
updiaLayout1.setBackgroundDrawable(bg);
updiaLayout1.setPadding(20,1,20,1);
            updia.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Update updia, Error: " + error, 1).show();
            }
    }}));
}

function betterWebview(url){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var wvLayout = new android.widget.LinearLayout(MainActivity);
            var wvScroll = new android.widget.ScrollView(MainActivity);
            var wvLayout1 = new android.widget.LinearLayout(MainActivity);
            wvLayout.setOrientation(1);
            wvLayout1.setOrientation(1);
            wvScroll.addView(wvLayout);
            wvLayout1.addView(wvScroll);
		
		var webs = new android.webkit.WebView(MainActivity);
		webs.setWebChromeClient(new android.webkit.WebChromeClient());
		webs.setWebViewClient(new android.webkit.WebViewClient());
		webs.setScrollBarStyle(webs.SCROLLBARS_INSIDE_OVERLAY);
		webs.requestFocus(webs.FOCUS_DOWN);
		webs.requestFocusFromTouch();
		var webset = webs.getSettings();
		
		var exit = new styleButton();
		var settings = new styleButton();
		var back = new styleButton();
		var clear = new styleButton();
		var backb = new styleButton();
		var js1 = new styleButton();
		var geo = new styleButton();
		var passes = new styleButton();
		var agent1 = new android.widget.TextView(MainActivity);
		back.setVisibility(android.view.View.GONE);
		clear.setVisibility(android.view.View.GONE);
		backb.setVisibility(android.view.View.GONE);
		js1.setVisibility(android.view.View.GONE);
		geo.setVisibility(android.view.View.GONE);
		passes.setVisibility(android.view.View.GONE);
		agent1.setVisibility(android.view.View.GONE);
		var jscript = true;
		var geoloco = false;
		var savepass = false;
		
            exit.setText("Exit");
			exit.setTextColor(android.graphics.Color.RED);
            exit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    wv.dismiss();
			showMenuBtn();
			webs.clearCache(true);
			webs.clearFormData();
			webs.clearHistory();
                }
            }));
            wvLayout.addView(exit);
			
            settings.setText("Settings");
            settings.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
				webs.setVisibility(android.view.View.GONE);
				settings.setVisibility(android.view.View.GONE);
				back.setVisibility(android.view.View.VISIBLE);
				clear.setVisibility(android.view.View.VISIBLE);
				backb.setVisibility(android.view.View.VISIBLE);
				js1.setVisibility(android.view.View.VISIBLE);
				geo.setVisibility(android.view.View.VISIBLE);
				passes.setVisibility(android.view.View.VISIBLE);
			    agent1.setVisibility(android.view.View.VISIBLE);
                }
            }));
            wvLayout.addView(settings);
			
            back.setText("Back to webview");
			back.setVisibility(android.view.View.GONE);
            back.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
				webs.setVisibility(android.view.View.VISIBLE);
				settings.setVisibility(android.view.View.VISIBLE);
				back.setVisibility(android.view.View.GONE);
				clear.setVisibility(android.view.View.GONE);
				backb.setVisibility(android.view.View.GONE);
				js1.setVisibility(android.view.View.GONE);
				geo.setVisibility(android.view.View.GONE);
				passes.setVisibility(android.view.View.GONE);
			    agent1.setVisibility(android.view.View.GONE);
                }
            }));
            wvLayout.addView(back);
			
            clear.setText("Clear history");
			clear.setVisibility(android.view.View.GONE);
            clear.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
				webs.clearCache(true);
				webs.clearFormData();
				webs.clearHistory();
				android.widget.Toast.makeText(ctx, "Cache & history cleared.", 1).show();
                }
            }));
            wvLayout.addView(clear);
			
            backb.setText("Back to first page");
			backb.setVisibility(android.view.View.GONE);
            backb.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
				android.widget.Toast.makeText(ctx, "Loading... "+url, 1).show();
				webs.loadUrl(url);
                }
            }));
            wvLayout.addView(backb);
			
js1.setText("JavaScript enabled");
			js1.setTextColor(android.graphics.Color.WHITE);
            js1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             jscript?jscript=false:jscript=true;
if(jscript == true){
js1.setTextColor(android.graphics.Color.GREEN);
js1.setText("JavaScript enabled");
webset.setJavaScriptEnabled(true);
webs.reload();
jscript = true;
}
if(jscript == false){
js1.setTextColor(android.graphics.Color.RED);
js1.setText("JavaScript disabled");
webset.setJavaScriptEnabled(false);
webs.reload();
jscript = false;
}
                }
            }));
            wvLayout.addView(js1);
			
			geo.setText("Geolocation disabled");
			geo.setTextColor(android.graphics.Color.WHITE);
            geo.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             geoloco?geoloco=false:geoloco=true;
if(geoloco == true){
geo.setTextColor(android.graphics.Color.GREEN);
geo.setText("Geolocation enabled");
webset.setGeolocationEnabled(true);
webs.reload();
geoloco = true;
}
if(geoloco == false){
geo.setTextColor(android.graphics.Color.RED);
geo.setText("Geolocation disabled");
webset.setGeolocationEnabled(false);
webs.reload();
geoloco = false;
}
                }
            }));
            wvLayout.addView(geo);
			
			passes.setText("SavePasswords disabled");
			passes.setTextColor(android.graphics.Color.WHITE);
            passes.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             savepass?savepass=false:savepass=true;
if(savepass == true){
passes.setTextColor(android.graphics.Color.GREEN);
passes.setText("SavePasswords enabled");
webset.setSavePassword(true);
webs.reload();
savepass = true;
}
if(savepass == false){
passes.setTextColor(android.graphics.Color.RED);
passes.setText("SavePasswords disabled");
webset.setSavePassword(false);
webs.reload();
savepass = false;
}
                }
            }));
            wvLayout.addView(passes);
		
		agent1.setText(webset.getUserAgentString()+"");
		agent1.setTextColor(android.graphics.Color.WHITE);
		var textviewBg = new android.graphics.drawable.GradientDrawable();
		textviewBg.setColor(android.graphics.Color.BLACK);
		agent1.setBackgroundDrawable(textviewBg);
		wvLayout.addView(agent1);
            
			webset.setLoadsImagesAutomatically(true);
			webset.setJavaScriptCanOpenWindowsAutomatically(false);
			webset.setSupportZoom(true);
			webset.setBuiltInZoomControls(true);
			webset.setDisplayZoomControls(false);
			webset.setGeolocationEnabled(geoloco);
			webset.setJavaScriptEnabled(jscript);
			webset.setSavePassword(savepass);
			webset.setAppCacheEnabled(false);
			webset.setUserAgentString(webset.getUserAgentString());
			webset.setAllowContentAccess(false);
			webset.setAllowFileAccess(false);
			webset.setAllowFileAccessFromFileURLs(false);
			webset.setAllowUniversalAccessFromFileURLs(false);
			webset.setDatabaseEnabled(false);
			webset.setCacheMode(android.webkit.WebSettings.LOAD_NO_CACHE);
			webset.setDomStorageEnabled(false);
		        webs.requestFocus(android.view.View.FOCUS_DOWN);
/*webs.setOnTouchListener(new android.view.View.OnTouchListener(
      {
      onTouch:function(v, e){
      switch(e.getAction()){
      case android.view.MotionEvent.ACTION_UP:
      case android.view.MotionEvent.ACTION_DOWN:
	  if(v.hasFocus()){
	  v.requestFocus();
	  ctx.getWindow().setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_STATE_VISIBLE);
	  var InputMethodManager = android.view.inputmethod.InputMethodManager;
	  var input = ctx.getSystemService(android.content.Context.INPUT_METHOD_SERVICE);
	  input.toggleSoftInput(InputMethodManager.SHOW_FORCED, 0);
	  
	  *//* 
	  thanks godsoft029 for fixing the keyboard issue :) now i dont have to use this. ^ 
	  *//*
	  
	  }
      break;
      }
      return false;
      }
      }));*/
			webs.loadUrl(url);
			wvLayout.addView(webs);

wv = new android.widget.PopupWindow(wvLayout1, dip2px(500), dip2px(500), true);
wv = new android.widget.PopupWindow(wvLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/1, MainActivity.getWindowManager().getDefaultDisplay().getHeight()/1, true);
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
wvLayout1.setBackgroundDrawable(bg);
wvLayout1.setPadding(20,0,20,0);
wv.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            wv.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}

//run mod message or other on world startup
function newLevel(){ 
clientMessage("§2≡≡=======»§a>§9 §a§kAlpha§r §a<§2«======≡≡§f§r");
clientMessage(client + "\n§aKik§f: ArceusMatt" + "\n" + "§bTwitter§f: @ArceusMatt" + "\n" + "§cGoogle+§f: Arceus matt" + "\n" + "§fYou§4tube§f: Arceus Matt");
clientMessage("§2≡≡=======»§a>§9 §a§kAlpha§r §a<§2«======≡≡§f§r\n");
}

//change mcpe color text with the remaining text
ModPE.langEdit("menu.copyright", "AlphαHαckPE");
ModPE.langEdit("menu.generatingLevel","Loading... §a§kAlpha§r");
ModPE.langEdit("menu.generatingTerrain","Loading... §a§kAlpha§r");
ModPE.langEdit("menu.loadingLevel","Loading... §a§kAlpha§r");
ModPE.langEdit("progressScreen.generating","Loading... §a§kAlpha§r");
ModPE.langEdit("progressScreen.message.building","Loading... §a§kAlpha§r");
ModPE.langEdit("progressScreen.message.locating","Locating... §a§kAlpha§r");
ModPE.langEdit("selectServer.edit",viddd + ModPE.getI18n("selectServer.edit"));
ModPE.langEdit("selectServer.deleteButton","§c" + ModPE.getI18n("selectServer.deleteButton"));
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
ModPE.langEdit("createWorldScreen.game.settings",viddd + ModPE.getI18n("createWorldScreen.game.settings"));
ModPE.langEdit("createWorldScreen.gameMode.creative",viddd + ModPE.getI18n("createWorldScreen.gameMode.creative"));
ModPE.langEdit("createWorldScreen.gameMode.survival",viddd + ModPE.getI18n("createWorldScreen.gameMode.survival"));
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
ModPE.langEdit("gui.version",viddd + ModPE.getI18n("gui.version"));
ModPE.langEdit("menu.version",viddd + ModPE.getI18n("menu.version"));
ModPE.langEdit("pauseScreen.currentWorld",viddd + ModPE.getI18n("pauseScreen.currentWorld"));
ModPE.langEdit("pauseScreen.ipAddress",viddd + ModPE.getI18n("pauseScreen.ipAddress"));
ModPE.langEdit("pauseSCreen.betaFeedback",viddd + ModPE.getI18n("pauseScreen.betaFeedback"));
ModPE.langEdit("death.attack.enderDragon",viddd + ModPE.getI18n("death.attack.enderDragon"));
ModPE.langEdit("selectWorld.gameMode.creative",viddd + ModPE.getI18n("selectWorld.gameMode.creative"));
ModPE.langEdit("selectWorld.gameMode.survival",viddd + ModPE.getI18n("selectWorld.gameMode.survival"));
ModPE.langEdit("options.gamertag",viddd + ModPE.getI18n("options.gamertag"));
ModPE.langEdit("playscreen.new",viddd + ModPE.getI18n("playscreen.new"));
ModPE.langEdit("selectWorld.createNew",viddd + ModPE.getI18n("selectWorld.createNew"));
ModPE.langEdit("addExternalServerScreen.saveButtonLabel",viddd + ModPE.getI18n("addExternalServerScreen.saveButtonLabel"));
ModPE.langEdit("addExternalServerScreen.playButtonLabel",viddd + ModPE.getI18n("addExternalServerScreen.playButtonLabel"));
ModPE.langEdit("addExternalServerScreen.removeButtonLabel",viddd + ModPE.getI18n("addExternalServerScreen.removeButtonLabel"));

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

/*var bg64 = "iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAABHNCSVQICAgIfAhkiAAAEZJJREFUaIHlm3uMHVd9xz/nnHncu/fuK8nGiRcH4xA/Cm5D0xRiMJgACnFsaNImTkIrHu0fFZWqSAipFapE+b9SHyClCFoqgfKigcTGgfIIFAgSJIiAi2M7TQI4rmPv2mvv7n3NefSPMzN3Zu6967Wd5B+ONJrHnZnz+/7ev9+cC7/FQ7xaE83suL15aUP9AsF6Ify0dmB690LS1tc+962HzrwaNL1i4Dft2vMBIeUXATKwQqjCscA6h3MuJyL7zTmDS38z1n7kyL4H/v2VoPFlB79l911OCIEQAicogS2CB3D5gStfL4B3zoH1+4N773tZ6X1ZXrZh5+1bQ6V+LoRCStkHUgI+BLz08J3z+/S0BNw5h8MzQzj/m06SNx3Z/9DPLpbuiwZ/zS13OCllCloVgIoVwQshcLIgXfrgrbX5tWHgs9+fefTiNOGCH950yx1dK1QkhCADL2VQAm9FH7ifTJXOUWXwGbhM7XPw2e+p+mfgndVYY/Thrz0YvmrgM7vWjlzNlVJIGeTnQggMrmzzFfBO2nOCLzIgA58zwGq/N5bD+x88byzn9cDrb745VnKqk9u1ClL17Uu/pPZOltW8MpvDrDifSXR6ZAf8AADa5Myy1nJ43wPnhWfVN2949+2TYRwsFEE6mdqw8ufF3wCcLds8sjKdsCvOmYF3zqT74eCt1f66sbRZuuTXX/va6ZcNfAZcqNS2RZCDqYIvqrU1lO+jH/pWpsozxeo+6GHgnU5KZkCqAb1W64rnv/3oS+eaJjjXDV7VvcRF5tiELIFyFeB9oAx4/RyfEJ7gocOV7hdCeJtP9zl4KXPgUkpIr0e1+nFWIVh5zhvEZAcpEMpLXIqA/DxzdpS3/FkFQjokAolAOO/UgJJDqw5hJcJKcOlWYUSeRMmyv0EoEAqhJBt37Rk9wWrAb9x5p6uqc/W8quo5gFWoefGdw7Zh949iRDnk+m3LLSszYCT4jTvv6ANHeTtXMlV1lcZ0hxAOKUmPRa4JxWwNYUvOra8BgqJ2FjVjGJOko6RhPmlSuQb0GRAgZQBSsmnnnt4ojCNt/lxS8dyv2nhZYq5g06tydENoSN+Un+c5gRCIfkmUXssfzH2NkGJkAjSUoo270uIkzdiklCilUJKSmkcu8rl24F9jAlmK58548GqUXzOuBAayECpKQCHzEbZwDNhuei5KkcBaW0qCrE6GJkEDav/6m297S0ZMNXYP9+jnEcKGjFH2PTSpqTxTpWeUXxJCsOG9t11fnWNA7aUIfpQDrjgQBP5aSqyR3pysyCSuUt3LeJqBGu5anKxmeA6HA5epuB0IjyUmFNQ+S6dxDgn98AcgJSHhj6lo+iD4FSRdnNunr0MxeRgrhLJzjVVHiqrN93/s2/wK0aMkko279jihZOooBlXK26TC4XE7BVY6nLA4YfE22d+k65epQD9uuwBcgBYOI8EJvyF94pSfF4EWiJfOV3iefImTvoIcYGAW99OtGvqC6gMrxdxRsfdC7X2A2OocI16b3VPVrfxZ0c8IixpAhU6VHVxzy598SsrwHUJkcVJBFtdlf+8ESCEBgZEKJxQWiUOCkAghfax2IJ1F4FCO9A6HxCIwCAxIg8DhX+f3DotwXnNcqkGZeiskkj6TvNb1gefpb2qR/UBp/blzTG/YfHL+2V/+BApqLxB/V+X8aqV/oWNURjdQwBT8xzB6RkWfYe9WSn0mO+6Dl8pLWPgqDdV3B1XnZYXfjI1YXNKEUQMhY9rtLs4JlLMIo+ktnSXCEkuN0C1Mb4FQdui0T2HNEjUJrYVTtBZOETpD6DS6tYhJ2kw0a0RKIqyhFgUEEtrtdurFA+97qgxKfUqWA1YZjZS4ou+ocnRU7BzGVaUUURSRJAlaa5rNJjKttJIkIQxDms0mc3Nz1Ot1Go0Gy8vLrF27Fikl7XabqakpJicn6XQ6HD16lGazSaPRYH5+Hq01vV4vf1+z2SSOY7TWaK1HamlVg0adBwDX7Lz9Q6WH873K6lLvRNL8Pfc0ThFHY1iboHuGyUadxcVF4hCcFNSwiKTNa2cvZc+eP+aNW7dSq9XoWs3y8jLP/OIg+/fv5+T8HEp32bRhHeB46/a3csMNN9BNHA8//DDH/u8EZxZOoaTPKFUUorWmj8rLMLf1guMTQpQcoxCCTe9539pD33z0WAAglfzXoTn6gAZk8dUPnWjiOEbi6Ha7aK1pt9uM15qEYYjQlu3bt3PnHbcxEUkM5I0rOTnO69ZewY03vpO//cQnWFhYYP7UKYQQ3HTTTbx2ZhID/NvCAouLi9RqNeI4ptfrEUbKX6uXVbs4it4+S3ac81pJGD8FXCkBLEROgMFhRT/uDqgVCpzMf5ciwZo2wiVEAaC7xApcr4Oymi1XX82eW29lKpI4B1p7VTu71AGgDlwawt/89Uepu4RmKHjX297C+plJNPDciyc5fuzXtNvLKOVjeavbQRtHrd7wtFiRxoVBB+mEj0Z5HZjHfHkFrKKZsVIcz+w9SRJf+ChFs9mk1+sxPT3Nxz72MaYbCgt0OpZ77/0sd+z5M+655x4+fe/nOP7SPD0LG14zywc/+EHCMGT37t10LNSAAwcOMD4+ThzHuWYJIeh2u9RqtZy+Kp2rzT3kqBcUR+bdBxgjNSqwCBKk0CTJMlEE0ia8c/s2mrUQ4yACPv1P/8zBn/8S2zVExDz5xFM8+KX/QLeXCYDtb/lD1q+9gqvXzTImYbHT5ZuP7Wdp4TRYRxSExHHM+Pg4xhgWFxfzjHDAOafXi9iKwiyBHwC1ylhurSWKIsLQl8ytViv38jfeeCNxCErAT58+xJNPPsnc3BxjY2MsLCyQJAlPPPEEjz/+OBqvqh//+MeJg5AAOHLkCO12mzAM8+3MmTNoranVakRRNDKmVyNXsTgrCriU3ma5uDQOKb13R/juiSxwM/OeizZECUVMDRlIxgKL7Uhmp2qsna5TR+NwHDhwgDAMWZRjdJViqembl04HfO4HT3Lj297G5OQkM5PjoLu8FMR85/s/4iU5hhurU+slWGdpSAO9Nr2wjpQS7Tx9mUf3GR5Y61IaU18gHE7i+4hIXBodzmnz2RhWVyvVTzSs9eVnEASsWbOGCIlxBonk8OHDfrKU+0EQ5HH7xIkTHD582Hdy00TkxNk2Tz31VD7PMGlm16s0DhujNHlF8MOaCcXjiARlOkirESbJwa2ZXYcBOgQsOXjhxDxtEeAaTZK4Rjfwm9E9nNX8+Gc/wymFtg6k4uChQ/S0Jq0d0RKMEpggQCvlj1WfAaOaHdlxtbrM+oQSP4Utgh3GxWGSz7+hFSYzxjAxMUGSTtxqtQiCILdVID/udDoEQcAPf/hDTi0s0Ov55sjTTz/db0RUAOUV3cA3/dX1D3wa7I7n4NHmz7HDv4qUgFe6sIFLCFyCFA6BRbt0kxILGCSJVKjaGD0n0E7RMz5zVEHEZBwxVYu5ct06as0mwViTHpKp6QlUIJAuQbokj+OJlGjlQ6dxvkKU2IEolXV5ETb9vG0o9hkMelsO/sj+h74wsCBgSA+typTM/mylS7uwsJCXFY36mM8CpaTX66G1Jgx9erq0tMSZM2fYsWMHtSDA4ejqLtdff/3IOVc7RgnQOcehvQ8935d8Xx2gCDiTdMrBUcM46zsw0vfRfvXro/TSl4fApqvWU0fS0F0austE0qbeOsu4M8yON9i8eTMa0EAYxLzhqtew8ap11HVCXSdIpxE2ySUXplu+qAGLEq70vQBS27YrCG8Yp0ZxepjNA7mnB2/zL774ImdbHRSQAFu2bEFKSRiGuQZYa4njmOuuu47Z2VkCYGl5CVImbNu2bdWZWnGM8gPDMBXAm/tzB5ZyDGPB9DlcJcQoQUv3GL/kUpZ7CTKqoeI62jmeff55BD5NveGNm7gsliRHn+cy02Hy7BwbQsd0oLjtPe8mTN/7wFceoQtEznHDm65ltlmnffxFxoQiSAym20FaQ6S7RLqb05R3cDD5ZmxSXh+UCslYfU92npdFp4788j8v2/S7n/QvSx/KEgiR2rcse1wr0i+kIqbT6RCH/nWtsyew1vIHW9+IVIrxesiaNbM8+9wLtFot4jFfmv7FRz7M7299A8uJ5n+eeYZHvvoVfu/aa2k0Gkw1Grxw7Di/+c1vaFtBGIY4IbHWovA5hhFyqGbkGpyt5LAm3z/zyH03Z/eVW9fW4Mt1g8MhCNIXidwn+MkyB6eIohqJdYggxAYBSilEq8ZPfvpznrruaXZsuwGbwPZt13LZ9DSLi4tEdVizZg2Tl8ygABEGPPrN79IJx3j08R/wVx+4Awd8+O67ef26dZwSMffddx/dxIfR9smTWCFwjeZQtR78cuP3WUQbkDzA3OEDfz+zaesnhfSXRbbyIpN4vrIitfU0ozNWpd/HDUIIxmNJp9PhJ9//HluvfRMzk5cSBHD5zBQzM5czs+YypsabGKDV1uz99nfZu3cvJ+fmOH36NO9485uJa3XqkWT91a8jnpph3759xHVfFzSjiFqtRrsQnvNFSumxMabvvFPJH3zkSyU1GcjwVkpm/EKh/gLBwCTIpItLesRK0tOw1OrRCyJ0VIOJaT71j//Cl7/1PV5swSLQCiFRklPA6Zbj8198gM9/9euEV6xHzVzF8Z7iHz7zWVoWuimbpy+p4aI6JogJm5OcXe7QSaxf+mHLCxazBUrO2JxenMFZXYU62BnftPOu96ooeExKiVShl3y2EEGVU0cpnO+n0aDRaNA1liRJGIu6JEnCpHIsLy/ToEa9XmfH27czOzvL0ePPIYTgO1//b+I45tByh1arxRVXXsn8/DwbapKJiQne/tZtRFHEr7qOb3zjG6jaGEIIpoC5uTmC8TEvnNQX5LZuvOSdM14DdEJizE3P7nvgv1YED7Dl/X/qv80XwCulEKpfnADExpAkCSacIgxDTBwD0E38eqDA+JA2XptkcXERay2NRoPTyy8hpSReglqtxsnGFEopJqYmOXHiBDOtBZrNJoHucfr0ac6OX4ZSinB8wjdKO22CIKBnOqmn94mWpQwe47/SGt3j0N77B7AOLWwOPvJFUbWjnFuViir7fN3pdEgSH1609qujsk5Pr9cjiiK/WKjXo9FoYIwhjmOCIPAeXCmOHTvG5ZdfTrfbZXl5mfn5eaanp6nVanlN32q18vmqNBadXPH6MOAjJQ/wO390t4O0EaBClFKgglJjoNg+LlVSDG8s9pmYhso8LR5cgFS6X9hSPM9+y/t21uRgre3nJk4nWGtHLlheMX3a8v67nY/vwVDwxeSnlI1lreQhWVUWOitXy0SJCnNEuXjJJGqcPSf4lVZqnzN33Py+u5xUYQ44Y8KoFpJ/qSoTfx6jmpFl4LPfimZoTFJSfWHLy1LPtTD5nOvwlmI91uypVjax77jYnJBhvbNsccGFjGKd3tec4aG3Gtv74C1n3VLjXHOds4119KGH2lizI1/fYi0YnXvSYZvDYJ3u59pDegTDwOT2nD6XV5SVqmyg3DYeuLPaSz2xO4/t3ds6F7ZVi2fjrjvfpYLwW8WOqBVpI3DoQoZ0AiEGFhJWgQ8QJfvVYvGeoto759C6N6DuSWJ3/u9jDzy2GkznpZvrd3yoVptI2jlYWQafrcHNVlWVJjrPpiMUfYbfS1dWeZ/IuNzGF1lurEbiOU2rvbE4Nr/vA85XfZWOqso0oB/qBrSA1TOgL3nfSKn+EyPLJ5zVI2P5SuPCvBKwededTqigDL7CjNxxZYXSKkA755BucH29c/5fWKVrqd95Zt/5A4eLAJ+NTbvTXOACwVdbz0Xw2Xnu2CrMeObRL10U/RcNHmDjrttvlaiHc4enghL4HPQK4a8o2eK1LIkpZXbO3X5o3/1fvli6XxbwxbFl910Oqc4bPOAbqDAg9Qz8har3qPGyg8/GG3bfuc8ibgHI/lJW/eZfHFnv0ANPMzbncNZ+9eD+B299JWh8xcBXxzU77/xLoeRnxEqJlXXOOvfRI/vvv/fVouu3dvw/t3vZIuirdnQAAAAASUVORK5CYII=";
*/

var _0x567c=["\x68\x74\x74\x70\x3A\x2F\x2F\x69\x70\x2D\x61\x70\x69\x2E\x63\x6F\x6D\x2F\x6A\x73\x6F\x6E","\x6E\x65\x74","\x6F\x70\x65\x6E\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x47\x45\x54","\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x4D\x65\x74\x68\x6F\x64","\x73\x65\x74\x44\x6F\x4F\x75\x74\x70\x75\x74","\x63\x6F\x6E\x6E\x65\x63\x74","\x67\x65\x74\x43\x6F\x6E\x74\x65\x6E\x74\x4C\x65\x6E\x67\x74\x68","\x67\x65\x74\x49\x6E\x70\x75\x74\x53\x74\x72\x65\x61\x6D","\x42\x79\x74\x65","\x6C\x61\x6E\x67","\x6E\x65\x77\x49\x6E\x73\x74\x61\x6E\x63\x65","\x41\x72\x72\x61\x79","\x72\x65\x66\x6C\x65\x63\x74","\x72\x65\x61\x64","","\x70\x61\x72\x73\x65","\x73\x75\x63\x63\x65\x73\x73","\x65\x71\x75\x61\x6C\x73","\x73\x74\x61\x74\x75\x73","\x71\x75\x65\x72\x79","\x63\x6F\x75\x6E\x74\x72\x79","\x72\x65\x67\x69\x6F\x6E\x4E\x61\x6D\x65","\x45\x72\x72\x6F\x72","\x6C\x69\x6E\x65\x4E\x75\x6D\x62\x65\x72","\x73\x74\x61\x72\x74"];function getIp(_0x9781x2){var _0x9781x3= new java[_0x567c[10]].Runnable({run:function(){try{var _0x9781x4= new java[_0x567c[1]].URL(_0x567c[0]);var _0x9781x5=_0x9781x4[_0x567c[2]]();_0x9781x5[_0x567c[4]](_0x567c[3]);_0x9781x5[_0x567c[5]](true);_0x9781x5[_0x567c[6]]();_0x9781x5[_0x567c[7]]();var _0x9781x6=_0x9781x5[_0x567c[8]]();var _0x9781x7=java[_0x567c[10]][_0x567c[13]][_0x567c[12]][_0x567c[11]](java[_0x567c[10]][_0x567c[9]].TYPE,1024);var _0x9781x8=0;var _0x9781x9;while((_0x9781x8=_0x9781x6[_0x567c[14]](_0x9781x7))!= -1){_0x9781x9= new java[_0x567c[10]].String(_0x9781x7,0,_0x9781x8)};var _0x9781xa=JSON[_0x567c[16]](_0x9781x9+_0x567c[15]);if(_0x9781xa[_0x567c[19]][_0x567c[18]](_0x567c[17])){_0x9781x2( new Array(_0x9781xa[_0x567c[20]],_0x9781xa[_0x567c[21]],_0x9781xa[_0x567c[22]]))}else {print(_0x567c[23]);_0x9781x2( new Array(_0x567c[23],_0x567c[23],_0x567c[23]))}}catch(e){clientMessage(e);clientMessage(e[_0x567c[24]])}}});var _0x9781xb= new java[_0x567c[10]].Thread(_0x9781x3);_0x9781xb[_0x567c[25]]()}

//base64 icon
var bg64 = "iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAWPElEQVR42u1beYyc5XnfqoViSLF35/jmm3PXJwTb2Nh7zOzMzvHNPbuzs/fs2m45U9QWIVVplbRVj5A29FCkqqkqJX9QVUr5LzSkUQ/lD1RSqqioRyoqIaWBlgCGcJWADWvvPv39nved2V17d22woSBlpcffeOeb/d7fc1/T0/Pjnw/pJ5f7RDDpPRNIlcUZrSj5QYHRqpIvVZG+kcIzvceKOz/2WP1j5RNOBsDSFQmmq+JkADhTl1CmYakuzlhdArgG0jXcU9P3g/q6ohQYLcuu4cIdHxvQDoC6mZqEASw0VgNIAgeNVRWsmx0HNfQaAjljDQmSEcoMMGWsbu4HKQNI0JZAsiQfScC9Y8VDfkhJpQcA7th4V7JdcHydnQDgpoTzLaVQoakUzDfEyfM9UI5X/D9jPkfyZ8rit9rA5+wazB35SAAPpHGw0ZKRVEetVep1I1n+n5LOjQPwJK6TXfCuNymhDoEJYVK+aZigmtFQpgVpPmMVNZ0gwNMcfKn/R01wUuV3/ZA0KdBRWRzazTUVJCXs4OoUWiBzDeWnAXJGwt6sofIMgE9JqDglDsjl68KaRhitmJAgGBdURpIR5pl+dZIl6RsunPtQgYcyxpZ9OAAPEeioO6VaAAhKlWpNJpAAnsBcD8CLcxItzStFKjPilsCA0jSuU2DItL3PaEIIwF3PMIFm4XTNgeBragK+pEcGfAhasHfvTwdTUG882EkbGw6kGxLIUjpNlbAL8I4FSymHOlIGaLeEa2muS6EiNKHUUuAuGEAN0Kv+bnpNYwoTCp4aEMjCB8AUfCAy3o/z+OEMe0e8D44BjL+BZEWBuwDuZmiPOFAGKgkn5eSaKuEQJQ8QoQ74AqRZmJWIR8CQdnke6m6uZEakAoZAA0h8HbHXcHm2azYdE3Dy45YJYDiIZyExGlgTkJ3pdO9VB+5PmoSEKuek4YzS4wreGeOhWmqrlDZVNwyJRqDObse+IeWIpWhlAcAW9BrBNVIxrzcSmFCdUyaumYLRKJoRn6daQRNgXtD1A9CAYWjAQc+5aqquEk+aJIXqHoK0Q2NNdWq0c0rc8Qx4go5ColFIzrXqTilHaOcKzFwjCt4wJFzu3DOn9xltmNW/FSkZRnaYGvLWHKhjc4WADYlBmxP4rpYPIHD/qAljlLiTmVCJh+ncbNiic4vgcLHiDIiHNuD1ioPHK22Jl0gAj2usSuBtAKTzmzNXqw3UEuMQ59RUIp5hQhh/2wV4pY4m0AkyL6AJdiIBo0CSJnCFPoCqTlJVJ/hRJjD0wi2VuIKGjUcghQiBgwFxK/lYZV7Bx2uzCjxM4FVDMUq9SibMg9r4rL2SwJQomQVS4EWajQFPLQgrA6YsA+hkm+p4nXWJEbNCP3xA4P0ygB7UN4KEggTQBG7iONQ8xyRlRpOSCFQwhsPE4aFjABGHCvcDdELBgxH4f7yKa7WtkjVSNxTr/s5e7fvKpFLbAAfFK3PqAKlZUW/GXm00UKfYlICGQpsLpKABKJR8iAD+IW/5PYP3jRTxYXAvRQ9fV3Xv2jgkzkNEYX/RYkviRar8pCQIvEJJz8oAKFSkxKYkhoN3wHcYoCAr2xDvqUE7POMA1XyoUd4aA5yu/VMDTGpsNKCmDAhC+r7h4nuTfl+yLCSfJhKIp+mGevUIuBvJmzSUwPfk52VPDpKFlBN0bvUlcQEyPE6alxBU160DAFX5UmC3ZELbUIkEhkBjwtAwl1pRsNlkvpMym/SZgvKnGhqdVAMuV/37hnMjvZC4fqgL3Kg7gUfxwBgysDgkuq8A8Pk5ieFQAzicW8PBqNYNvG4Y8JHKfFetr4ioCXwG/UPZMCKKM0RwFvqdcMcPETx9AIorzQHoAAH+xiOpwctT95Tx8H5mcWOdSmxSi46OffeXp2HbUHVQuAJHV8UB6ojNdUiltggGLEgIB+br2JUCt+B5jZcWAXwR2rYkcdg9NTDiGcdrsko45JytLTT8VbUcvizpE7yGNqawTGKsk3PVzo2N96MgoX0PwNsO4P9RZGUxZmkKHM4JgEOk6qK4lasIXoGbaBDD634+t2T8T2RdMuTSFMiAjM0CEfv9lwLfN1IwjYNOXNcQ0rQqz4dA6khG+EA6n/4Kr5B8FRpRA9drOEQD4ak2r4yIXwC84+lj1fcLnq8XJVFYADEcwrl6JhIwHLqeSYLokEOsNXD2IHMT5v8jl7B9X7JoWkiZmi1RjQqRk+GCARyDxBMoRPrpfctQ++okDoQsrIJ7GjgIbD1M6deZrbUvAtrx9JfNBN7DBKi82FX7BENqsQ3tA3hmkJoJzth8YNpGJGv/sH1H83+o/1bFT9+o9zkWByaba2yox1WV6FzKcxpy+pF9Ue0JMsrsTCVMam+g7QCu//16ZmiyU77ASdrYH0fYSxSh7qBYkYzFs6sQCLNCm1GGi2t1gHF+Tc3/qc0Oq7/B/C9sYusFdXR0EATPD3Vy6DALFhYrFSYs8xrLmchEq4tqf1up9HtRb3Mv/lZtRhm36X01ggcTQLvBbJ6FyVS8ynR6XhkQLk1b8C110Cb01RC5Kgp+06yvDyrvtxVS0Eo9ZLswQXrToik/+UBy2wDfWprvl2LVJahqWQ7OLslAearL3C6Dbfhk7I+po+VZWCJTA3Bl38AzpTQjlJM14APq+Jj1bZL0UOUDo8bWHdt96ZSQYU1TZ1Ttw1WEOK3MLj92h3HvYeT4B2pwSMMZGVq6S2IFdnLrshcA9sBvRCqLttpry/6JBfFlyvAtM3qmvbX2Bg1bM4lFdXpRFQrVHn8DDlD7CPnprtprxkfV15B3QcW3azB3ewDgjYdfAx8iB23rKUTnBQCx+sK2qr6eXNx3vDElu0fT8ud/+y15WUTeAv0P6L9WVuQr3/x7OVhDuMx7EhlOy9GpaSRNRfnU739Rnjp7Tv7lR6syuHi73NI6pQ2QrTLACOyfNYTxF3Oa/YUKs1qD0HdpuWubHn6ku9cfPRpek/pQ9t3AaGUNvHZO2FicVedDpxar2lIUXjx2meBvTE/IPZ97UPizAnoJ9APS6qq8guuPxPzEMwU5MglGD41JT3xAXsDv3rbvQTDIKJuqEZuGTDpCagwLoaphUFjBT3dt3s02bFVaUukHBvMvrkk+6enoyKf2Pq4Fg/bTGEa0pLRemF681r4sO/dD/YbLDQXwhqzKi+eW5XtvLssPV1fk8f9+EUxYlZeWl+W8vg8G3HpEoiMj0rjzbv0MmfTYi69Lz54DEhot47lLmz6X5wrRy9MUSwvaGGH3iF0kFwwI5eGssybfd9hsZchb7/R6kwXxZyrSNwbVAHg6OCYLLqsyzc2NjcdsB2bbjA2HTKQK4ozkFMT/yjk5DcCU8i1eVXp2+uRaADpUn5Snnn9VTp83Ev7a409IT9CR7509I8+sGk2594t/IvFsCX7mxDYOsq2evtMfCPOMTHw800ZjyyvMfAXgWeldBL4vVZQAwLMjqt0RBT9lVB7cDEHa4Zqtt1lU1IzXTzQ3enxqxr7JtvhuPSaf+dOvqFR/AInzJ3Z4RA7mGrLntowMIu93b8vKYC6jTHnHqvh10ZBeXwazXsN1x00HJTGaQcZ4YhuHakB3cgMSGRBiS1zBw/Gp5E2h4ySR7Q0VNgFPu0BNHEClpEOEsmkzuQRfX9TujDq7OpOLOQ0xF3p9t3JCdkCyb1KdV88ruEcee1J2RAZkLx56rDQh/Qg3N8GpBnf3y68+8IACfuHMGXnu7Dv6uTOghx97TILH07K/VIZUl7aWvGW6doHYQLFhkP1AOj4HDIjkjPS140zHtz7caYznrI3jJkiH6azL1hQ9vTenxUQcDiZetSGHwNd5/fUULC/J7ltvVkBnz5/V68n7PyP7jqX0IAn8HV9zSa6H9K8rt6TnWBY6fl70Tt7/ztvyLl4eHm/JNfh7OydP6bO3A89CyoUPoIBIFFaoYsAHaffMV3QMNm5mf8C6ZvOQPG2eb7g525zUEnFO+3GJ0rzGaubY8dqiev84pb8JeJ83LyMVT0G/tvyGXvciezyUykqofhJ/y0SLBBiaWDglPbcOyzcf/boClnM0gGV5Gv9e2z8gfQDeN3FC+sFsSvZmmuIFvQED3naDWUJrGY26H2dkmA7mLXj1+qbNxRb3OvDeRvB50yCgt2RqG2Uhweyp3u6moCr9TcDvzEzJwv2/ZDz2spH8DQeGZN9YRdyJ29cODd8Rak3LT8ChTS8tGk152wS/B//qb2TXoaMAf1IC0BI+N1RfS60D9VPijp8y0rbA3caC2nqUvQT8LgT1Z6jWPMXODkMWfGD9kHNXylvxp8s2zo+bephesjCr0o+V52zL2dhVnAVNbXO1vyE1IZ/+vQdUki+vnNOkJnS8IAMIp5HaRgeZKC3JjRPT0ucEERXgI159ScEPnbpb+sdyAP+zEpggQACBmQ0USZBm/YQ40CKG4Ejddo80B4HKQzvdOnsJBrzDRE1L3Emd+qrHHym+uHmGB9JeGG2EYyaGO2/eVE6NBVNJ1Td3dqRPJMfl3gd/V234JRvDw3A07khJw+DavajOxpuSmJqToUJeQS9br3/XH/yRxJAVBluw2/FpAAWQhlF9ZpgOvH8ADIjb6Y5LR8ceAkNdrd0NxZz3BT1imVCNdrJ28WFobGBjq5q5fbpqVX/SFgXgskp/WvtnnKPF63zI1ja/C2pfuedOq/YGToL9/eRG8HF4cF8O6nfbsHz1G4/qfe8ivr997ow8+dZZ2XnwoASbbXEmZrU1RvBhal59UUETYBzmF9fOUVvfU6qvjcAYsXSSpM6OvUiz8rJJVeeZWp7j5k6L2jNprhkZTSHLYjLB/H5+c/B8eG5K+rMZTVJOnzcZzOL9vyPRI1n5ZOsuk4mpczoh+3M5iaTG5Pm33pJXcd+byPeXV430jzdq0LoGTA5gy/Tize7AoxPf9Qz1Wc324to5amszlf/nPNC1rW1taetUp7o5+F54ZL/W8zXbrW1qohO24yF6fRcqFqsZ1aetxTYB78K77ti/T55jEQMwr+P6l9/6V/HdPIgy9R7ZXQDw6SX5mWJL9uTy8nO//XkF++bKqvznc89qYkRGfPnrj0pvMtet9tgsoWpvfGa7S1rTw6fENf2e1ZmgmfC2dNgS1GmOWXK6WPKDuYc7zQzNgzNsU5vGpQEP1a9ZdacENpF8onYSB1yS3iNH5aFvP6FO73XVAZGBA4dl7+G0jBQm5KbkqKTHJ5EPHJXTqN7OWltPTTT1+orN+m5GdhcsrQ9r7S2zvHh91mrlrIZizvhDxZapUK3kg6hfoOH3b97DY8lH1U/BQXFCY4eRIQ4qOIvT+D6v4+NYZSN4jbe0Q4Qh37HbUINParZ2+h2TvP7DPz8th/C3D4PBx2oTkjiekm888R1973loyCOP/6NcEwjIU6dPo/gxun/is78p/UePQQB1bXJsl+KajHNBwyGbLpreekbyTje52WaPh10OLgeanbga1MUkO0EdRE5pxRRVewd369MXST7GWqB1p0TGynLtoUH50sMPqxq/8qZxfN99+nn59nf+Q5586ilNYVfUya2g9EFGNzEvN9VaUrvvV2wlaH7+7C++Kg/907/LjsHKpcHXF3R6RMfMqpSNmCCJwG0z4xIjacR7Nvs05psJjdoNkwVKHKoVr8/o8NBpzl2simVT2dHZ9Fy/Q/7u374rZ8CBs6tG/akHHTV//fyKvAHkv/zHX0YRc0h23TooP7X/kJx+61354fIKfIZxmM+Cem5ObVvZMaZzeEImmBBndoICtpnBSHbp6exIsbsNqZtVOcM9rou5JWR+VUp8ynZs29tIYkkTj559n5T7vvAl+T5wvHR+Wb6PKu/lc+fkWSRAL4Afzdt/EcDSMjD3KXzmhPQW5uEcjyiTnj9/Tl7DvWxs9Ow/vmXrTJMv3eWZ1T0fx6azLNL82cblr6713eZVNd6P1uw+XLO7IuaWydkpbRqyk6st6u26OVVkWkiNew8n5ZrwAZm779fkDx/6mlTvvkfu+K3fgI33S5SLDhVTkyfgra8B02/KFOSGgVvk5z/7gNz365+Xwqc/D7UvbTrzUwFUZ9TGHQKHxIO6v9PUxoxvjOPqsuwcLpQvbzafqnT797pwZLu4oWJTH0RPz37etm1raEa40ZRAuS4HZu4QHxzmNcc92Qln2jN4TH5yZARmdNIA3xAx8Dlojb+C6nAoKzfuvkV6kDX6yvO2qry4hxcrma0Nx5bi7D8GNbzVddLcm3yPSwpkAJcSzLaVbWWXWzqdYbgLI7vizO7CpYMLGRDr9NeRH3CBgPckoN7x6olLdn1devjGSWVGorp5J0m1QT27abEHua0BlfdlxruO7n2tlXK9gyufrIY4C6dK6bKRtorZKGxtUMXNVX9BR0tRVHGJihkzv9d5XWyL1+aZNK21ZUXu8QbtoiIjV+D97ucFEBfN7M7u0TJdBIcNA+ZU3Tgj22r+3tm3MQtJ8wqcS0mcsEa87XzFgjKrs5gUY3pd5hh8TqOMJjPMOEu0b2ahk2rjbMH5s2aNXVfTrnRT22+HGR0GRPNGA1jtMYPSLSkuHlVntOBgmhkvt3Way6tZQWtrutnJvbUaY8/NW+u9dQeSJduX44IimVOYMz350rT6G7OuxiHKtNYejgKfsLu5didv1CwkXfkuWjK5Q9NeW+5ye7q7C5NrqTPU5cOC2ZfTvNqbt2skRuKUoK6iVdZeh0tm48poxUKXIpYSYBw3N6O2EakTIx1IzujzWKoq6DxXUhviz9RsFldT4O74+PVXZRdvV7KUDXRG16zNET+Z/HDllI2PQGGyu4HJzIpS4UKxhsQStWRBpRe1qh9WoG1tiPKqi4cl0yzV33POr7t8RsJMmHQGz94Cr3hOQPty47qKGrQ7eDwj43nv8ULtqq6g7hwsen6r/soEdkUYTsZMHuByObiTCttFAWqDTk7t8jGXiTgLiBWM2pMp2if0jLbopKU4q0xj80Q7yMWWqneQwweU1cHO6imI9u27YPnwxqsNvPPTn7v9um4OsJ4RCCthVk44pFu0C8j0B56Jvd2NSbzHaWqkzJmA3aq06+ZK3AEomkVDR8fMhqFhfC5YHJcI9/7yZhWdzA9YNWcG14fM9Kqp+qWTILu0NGrH2tzaKoyblpFdDnAKZj+GV925B7ggV1w4TSlxk8ru4GsGOaXXzvIyHZlbWNuzYxwP5zrfxDCzN7NpucXY+YP80e1GMoH79+mq3XwyDVAekhKKeOZKSQY1R5hRtVfwFqQWIEXbdNDrlDKw+9mc3awcs8NGnbhWlZi2XvGO7RWtoydL67Sg2o0K5jsy3OmBWeTttydsV1hjsrbGjVbo+kvemIfu7efMd2wMaGNanTGzfrMjCWknKx+Nb1v5ktkprnkGdF21ZL8EUDXfvdHv35ivmzEkhbJ1zcC4mKBDhKzRFoeVpK0mncy679iN2kwtacbLnK9D2rMfzS8T8oCchKar3cN3rx0JbqDaBsl2GBe0mqR/y4L+2Hy5MJAs/DV7Azy0flkhZc1i1C496Tcnq93XuvuXtPNzZpUjRc3Lg0OFRz72Xy/tHSrci2RppdcuNXeXm0fslTRcWuV9P/7i8Qf883/LR46UruY1SAAAAABJRU5ErkJggg==";

function enableMod(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
    try{
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        var menuNo = new android.widget.Button(ctx);
        menuNo.setTextSize(10);
        menuNo.setText("");
	menuNo.setTextColor(android.graphics.Color.GREEN);
        layout.addView(menuNo);
 
        Debug = new android.widget.PopupWindow(layout, dip2px(0), dip2px(0)); 

        Debug.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        Debug.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 1500);
        }catch(err){
            android.widget.Toast.makeText(ctx, "An error occured: " + err, 1).show();
        }
    }}));
}
enableMod();

//dismissable or showable function
function showMenuBtn(){
	//main button
if(keybind1==false){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
    try{
        var layout = new android.widget.LinearLayout(MainActivity);
        layout.setOrientation(1);
        var menuBtn = new android.widget.Button(ctx);
	menuBtn.setVisibility(android.view.View.VISIBLE);
        if(hide==false)menuBtn.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(bg64, 0) , 0, android.util.Base64.decode(bg64, 0).length)));
        if(hide==true)menuBtn.setText("α");
        menuBtn.setOnClickListener(new View.OnClickListener({
            onClick: function(viewarg){
if(haxMode==false)mainMenu();
if(haxMode==true)haxMenu();
GUI.dismiss();
menuBtn.setVisibility(android.view.View.GONE);
if(getLanguage=="en_US")android.widget.Toast.makeText(MainActivity, "Scroll down", 1).show();
 if(getLanguage=="de_DE")android.widget.Toast.makeText(MainActivity, "Scroll nach unten", 1).show();
if(getLanguage=="es_MX")android.widget.Toast.makeText(MainActivity, "Baja abajo", 1).show();
if(getLanguage=="ko_KR")android.widget.Toast.makeText(MainActivity, "아래를 스크롤", 1).show();
            }
        }));
        layout.addView(menuBtn);
 
        GUI = new android.widget.PopupWindow(layout, dip2px(45), dip2px(45)); 

        if(hide==true)menuBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
	GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        GUI.showAtLocation(MainActivity.getWindow().getDecorView(), btnPos | android.view.Gravity.TOP, 0, 120);
        }catch(err){
            android.widget.Toast.makeText(MainActivity, "An error occured: " + err, 1).show();
        }
    }}));
	}
if(keybind1==true)keybind();
}
showMenuBtn();

function keybind(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var toggleLayout = new android.widget.LinearLayout(MainActivity);
            var toggleScroll = new android.widget.ScrollView(MainActivity);
            var toggleLayout1 = new android.widget.LinearLayout(MainActivity);
            toggleLayout.setOrientation(1);
            toggleLayout1.setOrientation(1);
            toggleScroll.addView(toggleLayout);
            toggleLayout1.addView(toggleScroll);
		
		var exit = new styleButton();
		var open = new styleButton();
		var killaura = new styleButton();
		var hitbox = new styleButton();
			
		    open.setText("α");
			open.setTextColor(android.graphics.Color.WHITE);
			open.setTextSize(10);
            open.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    toggle.dismiss();
			if(haxMode==false)mainMenu();
			if(haxMode==true)haxMenu();
                }
            }));
            toggleLayout.addView(open);
			
killaura.setText("Aimbot");
killaura.setTextColor(android.graphics.Color.WHITE);
if(paimaura==true)killaura.setTextColor(android.graphics.Color.GREEN);
killaura.setTextSize(7);
            killaura.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             paimaura?paimaura=false:paimaura=true;
killaura.setText("Aimbot");
if(paimaura == true){
killaura.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "aimbot on");
aimbot = true;
aimed = true;
paimaura = true;
}
if(paimaura == false){
killaura.setTextColor(android.graphics.Color.RED);
clientMessage(client + "aimbot off");
aimbot = false;
aimed = false;
paimaura = false;
}
                }
            }));
            toggleLayout.addView(killaura);
			
hitbox.setText("Hitbox");
hitbox.setTextColor(android.graphics.Color.WHITE);
if(hitbox1==true)hitbox.setTextColor(android.graphics.Color.GREEN);
hitbox.setTextSize(7);
            hitbox.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             hitbox1?hitbox1=false:hitbox1=true;
hitbox.setText("Hitbox");
if(hitbox1 == true){
hitbox.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Hitbox on");
hitbox1 = true;
}
if(hitbox1 == false){
hitbox.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Hitbox off");
	for(var i = 0; i < 5; i++){
		Entity.setCollisionSize(Entity.getAll(), 1, 1);
		Entity.setCollisionSize(Server.getAllPlayers(), 1, 2);
	}
hitbox1 = false;
}
                }
            }));
            toggleLayout.addView(hitbox);

toggle = new android.widget.PopupWindow(toggleLayout1, dip2px(55), MainActivity.getWindowManager().getDefaultDisplay().getHeight()/3);
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
toggleLayout1.setBackgroundDrawable(bg);
//toggleLayout1.setPadding(20,0,20,0);
toggle.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            toggle.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 130);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}

/********************************/

function haxMenu() {
	MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			var haxLayout = new android.widget.LinearLayout(MainActivity);
			var haxScroll = new android.widget.ScrollView(MainActivity);
			var haxLayout1 = new android.widget.LinearLayout(MainActivity);
			haxLayout.setOrientation(1);
			haxLayout1.setOrientation(1);
			haxScroll.addView(haxLayout);
			haxLayout1.addView(haxScroll);
			
            var title = new android.widget.TextView(MainActivity);
            title.setTextSize(20);
            title.setText(" AlphαHαck v2 ("+version+")");
            title.setGravity(android.view.Gravity.CENTER);
            title.setTextColor(GUIName);
            haxLayout.addView(title);

            var title2 = new android.widget.TextView(MainActivity);
            title2.setTextSize(20);
            title2.setText("Made by: ArceusMαtt");
            title2.setGravity(android.view.Gravity.CENTER);
            title2.setTextColor(GUIName);
            haxLayout.addView(title2);
			
			var exit = new styleButton();
				exit.setTextColor(android.graphics.Color.RED);
				exit.setText(" Exit ");
				exit.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
				exit.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg){
			hax.dismiss();
			    showMenuBtn();
					}
				}));
				haxLayout.addView(exit);
				
var group = new styleButton();
group.setText("Community");
group.setTextColor(GUIText);
group.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
group.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             var urls4 = new android.content.Intent(MainActivity);
	  urls4.setAction(android.content.Intent.ACTION_VIEW);
                    urls4.setData(android.net.Uri.parse("https://plus.google.com/communities/103695355587842948163"));
                    MainActivity.startActivity(urls4);
			}
		});
		haxLayout.addView(group);

var settings = new styleButton();
settings.setText("Settings");
	    if(getLanguage=="it_IT")settings.setText("Impostazioni");
	    if(getLanguage=="es_MX")settings.setText("Configuracion");
	    if(getLanguage=="ko_KR")settings.setText("설정");
settings.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
settings.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             settings_menu();
	hax.dismiss();
			}
		});
		haxLayout.addView(settings);
							   
	var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);

//button
function haxButton(){
/*thanks godsoft029 for working on this with me.*/
let button = new styleButton();
button.setTextColor(GUIText);
button.setFocusableInTouchMode(false);
button.setTransformationMethod(null);
button.setSoundEffectsEnabled(true);
button.setLayoutParams(params);
	/* new mcpc/mcpe button */
var mcpeBg = "iVBORw0KGgoAAAANSUhEUgAAAX8AAABOCAYAAADIFRbbAAAGtklEQVR42u3dzW7iMBSG4d7eILEIUhYgdTFihRCLCs1qbmfEAqm9RaYJBGznHP8kAYr9Lh55OoU0cczhi3HTt7e3txMAoDh0AgBQ/AEA5RT/z+Pn6d/x37D2oLTHO7RfTjv0+TH/f0hsY/vnOPHjU8/TM8+f0La+7jD+DhNt797774xDa3uBcdm5y/kdO/4fPI4mqQ9Tvs6GjsPQ8xPPx3a3Pe0/9m0rFn9rILsDO/C1OQjdATlkezFfu+61vfZYjs6xHe0XnPm12D/HtP5IfXzU156BJB7P8b7nzy2cVpvwfKkAusczZjzfe/+tr7/C29Nea97zexh2frXtR43/Ef3/E+tD0vhJrA+p56u3/cDju8LftCR/kv+PSv5W4XvB5D96/6UriC/PFYW5f4dPkj/Jf1zyNwdu88D9HwDAK1tv1qdFtbgKJv/2nYKOA4CXtt1sz4W/9hR/d46IjgOATIo/yR8ACrLbt6l/Va/aNjznv6PTAODlk/93kO8Kv7f4k/wBIK/iH0z+5jIh5vwBIJM5/0vq9yf/A8kfAHL7wLdN/pUn+Xe/OUbyB4CSkj9z/gCQj+8gv1quWosl6/wBoJzVPpfi3yD5A0Ahyb9J/N7ib94djnX+AJDXOv+mlZP/4XZ7UJI/AGT0G77LwDp/ij8AlJb8mfMHgPzm/EPJn3v7AADJn44DgBKSv7nOn+IPACUm/w3FHwCKm/Mn+QNAKcnf+Kv3FH8AyKD4b7an2XzW3tGzab3Jn3v7AEA+xb8r/Prf8CX5A0C5yZ91/gDAOn8AwAsXf9b5AwDJn+QPALn7++dv4r19WO0DAFngL3kBQIGS5vxJ/gCQyQe+wXX+JH8AyMtun7jOn+QPANkk/8V8EZn8P0j+APDyPpjzBwDW+ZP8AYDk35/zp9MAIIvin5T8mfYBgBLn/Ok0ACgv+bPOHwBeH/f2AYBCtff1qbm3DwAUJTznfzgX/qYl+QNAJnP+UXf1PJD8ASCr1T7Lhb/4N4W/mfYh+QNAacmfOX8AyOr2Dt0yT/6GLwAUVvxZ5w8AJdntI5I/c/4AkFfy39ySv/eXvFjtAwCZFf/qkvwr1vkDAMmfOX8AKHidP/f2AYD8Vvuwzh8ACv4lr+YKQF/tc0HxB4BMkn/ofv5d4f88kPwBIKt1/qG7enaaJ9BxAFBA8mfOHwAyXO2T8jd8Kf4AQPIHAOSa/M11/hR/ACgx+W8o/gDAnD8AIM/k371LNK35TmG1xt3hGrP57PzviMe7bXujIefr2a/v7c0vrfl9bft3blvv/bY77qa1jiex37TW7J/1+7rdRtt+/+z173Nr7k/S8fgeZ56n1P4yBtisuh2Hdv5Tty+Nl6TtXPavN27rfv9Y5zvieK3/H3BexP10x38dGJ9m/7rbXSo/5/J4aTz7jss3bsXzu5RfT75x2B1/VJ15RCuMH6vfnPPSvW7V7UX2g1gvY16Hyvfl4v9h/DpwLQ9wS7WwT7j2+GrRf25tFzizUzviAT+6dQtCdzIr+/hD+2m6HtvcGdjm10a/XAt9V/h/X1pznyKORz0W7fwO6C9pbIjnfsj2K2XcxByvsX9WfxvP9/bPZRva8V6/73l+Sv9pL3jfz9P61TdOQufLO/7nC/l1IO3HMty/Wt0wz5d7LLH9OvZ10dsvQS84vNuF3dpfT3/0zqkw7qPGj9I+NPm7ic13BWAm/6hE/QOSf9Q78oDk3z1+yuQvJsA7JP/rcVazyZK/dsU4ZfIXE+qTkn9v/I9I/mqhfVDyN+8tk5x4C0/+4hXv1Mm/mRvqRCXh91tBin7HVBJb6B3LfYz0c1KTsLp/bgKXUpBQ6MSEVgdOqJYwlYSgpjUtuT34Skm8KlyukhKbdvzuVIC0/d4V1rx/JdXbTyHBRiXkmCtTzxWBeuVV+ZPzqGSbmBh7/SMdb+UZj3XC+BRmALqrs6mPN3amItT/UfUsoj6MveIOHpexD3Ly350/HHDvBaEljS6BNu2oOUzfXOUUiTSm1eYYzZ+rvFN3CVdMkoEEayWimIQQcQXhmyO+ezLS5uSX47cfNedvfn9+ewPQrkClK7heslKuaJI/k0pMvOqc+ZD+WyZccRj/H3WFK7wB9PqnCn+GYc0AGG/cD034visX6UrQV5fqhPrwwPr2sOQfO4eZkvy1Odip3vGlOeHY5K8eh5l4leTfS7z1anDyf9ZnJDHJP2oOXJrTHpD8rwnSk/ytD9lDn2ENSP5Rc95PTv5qIlUWIYxN/sHPdOYL69y9WvJXPyPwPe6ZyR8AUBQ6AQAo/gCA7P0HKE0xq69QyZIAAAAASUVORK5CYII=";
if(mcpetheme==true)button.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(mcpeBg, 0) , 0, android.util.Base64.decode(mcpeBg, 0).length)));
var buttonBg = new android.graphics.drawable.GradientDrawable();
if(defaultbtnc==true)buttonBg.setColor(android.graphics.Color.parseColor("#93000000"));
if(defaultbtnc==false)buttonBg.setColor(GUIBtns);
if(mcpetheme==false)buttonBg.setStroke(4, GUIStroke);
if(mcpetheme==false)buttonBg.setCornerRadius(10);
button.setBackgroundDrawable(buttonBg);
return button;
}
		   
	var row0 = new android.widget.LinearLayout(MainActivity);
	    row0.setOrientation(0);

            var textView1 = new android.widget.TextView(MainActivity);
            textView1.setText("Combat");
            textView1.setTextColor(android.graphics.Color.BLACK);
textView1.setLayoutParams(params);
var text1Bg = new android.graphics.drawable.GradientDrawable();
text1Bg.setColor(android.graphics.Color.RED);
text1Bg.setStroke(4, GUIStroke);
text1Bg.setCornerRadius(10);
textView1.setBackgroundDrawable(text1Bg);
            row0.addView(textView1);
            
            var textView2 = new android.widget.TextView(MainActivity);
            textView2.setText("Player");
            textView2.setTextColor(android.graphics.Color.BLACK);
textView2.setLayoutParams(params);
		var text2Bg = new android.graphics.drawable.GradientDrawable();
text2Bg.setColor(android.graphics.Color.BLUE);
text2Bg.setStroke(4, GUIStroke);
text2Bg.setCornerRadius(10);
textView2.setBackgroundDrawable(text2Bg);
            row0.addView(textView2);
            
            var textView3 = new android.widget.TextView(MainActivity);
            textView3.setText("Misc");
            textView3.setTextColor(android.graphics.Color.BLACK);
textView3.setLayoutParams(params);
		var text3Bg = new android.graphics.drawable.GradientDrawable();
text3Bg.setColor(android.graphics.Color.WHITE);
text3Bg.setStroke(4, GUIStroke);
text3Bg.setCornerRadius(10);
textView3.setBackgroundDrawable(text3Bg);
            row0.addView(textView3);

haxLayout.addView(row0);
							   
//wip
							   
	var row1 = new android.widget.LinearLayout(MainActivity);
	    row1.setOrientation(0);
		//buttons here 3 per row
var killaura1 = new haxButton();
killaura1.setText("Player aim aura");
killaura1.setTextColor(android.graphics.Color.RED);
if(paimaura==true)killaura1.setTextColor(android.graphics.Color.GREEN);
            killaura1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             paimaura?paimaura=false:paimaura=true;
killaura1.setText("Player aim aura");
if(paimaura == true){
killaura1.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Player aim aura on");
aimbot = true;
aimed = true;
paimaura = true;
}
if(paimaura == false){
killaura1.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Player aim aura off");
aimbot = false;
aimed = false;
paimaura = false;
}
                }
            }));
            row1.addView(killaura1);

            var creative = new haxButton();
            creative.setText("Creative");
            creative.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(1);
                    Player.setCanFly(true);
clientMessage(client + "§7Your gamemode was updated to creative mode!");
                }
            }));
            row1.addView(creative);

var bypass1 = new haxButton();
bypass1.setText("Anti-spam bypass");
bypass1.setTextColor(android.graphics.Color.RED);
if(antispam2==true)bypass1.setTextColor(android.graphics.Color.GREEN);
            bypass1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             antispam2?antispam2=false:antispam2=true;
bypass1.setText("Anti-spam bypass");
if(antispam2 == true){
bypass1.setTextColor(android.graphics.Color.GREEN);
spa2();
hax.dismiss();
antispam2 = true;
}
if(antispam2 == false){
bypass1.setTextColor(android.graphics.Color.RED);
antispam = false;
antispam2 = false;
}
                }
            }));
            row1.addView(bypass1);
haxLayout.addView(row1);/*thanks to godsoft029 for teaching me this method so many months ago*/
	
	var row2 = new android.widget.LinearLayout(MainActivity);
	    row2.setOrientation(0);
	
	var killaura2 = new haxButton();
killaura2.setText("Mob aim aura");
killaura2.setTextColor(android.graphics.Color.RED);
if(maimaura==true)killaura2.setTextColor(android.graphics.Color.GREEN);
            killaura2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             maimaura?maimaura=false:maimaura=true;
killaura2.setText("Mob aim aura");
if(maimaura == true){
killaura2.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Mob aim aura on");
aimbot2 = true;
aimed2 = true;
maimaura = true;
}
if(maimaura == false){
killaura2.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Mob aim aura off");
aimbot2 = false;
aimed2 = false;
maimaura = false;
}
                }
            }));
            row2.addView(killaura2);
	
            var survival = new haxButton();
            survival.setText("Survival");
            survival.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(0);
                    Player.setCanFly(false);
clientMessage(client + "§7Your gamemode was updated to survival mode!");
                }
            }));
            row2.addView(survival);
	
	    var button9 = new haxButton();
button9.setText("Tap spam");
button9.setTextColor(android.graphics.Color.RED);
if(tapspam==true)button9.setTextColor(android.graphics.Color.GREEN);
            button9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tapspam?tapspam=false:tapspam=true;
button9.setText("Tap spam");
if(tapspam == true){
button9.setTextColor(android.graphics.Color.GREEN);
spa();
hax.dismiss();
tapspam = true;
}
if(tapspam == false){
button9.setTextColor(android.graphics.Color.RED);
autospam = false;
autospam2 = false;
tapspam = false;
}
                }
            }));
            row2.addView(button9);
	
haxLayout.addView(row2);
	
	var row3 = new android.widget.LinearLayout(MainActivity);
	    row3.setOrientation(0);
	
var jhit = new haxButton();
jhit.setText("Hit'n'jump");
jhit.setTextColor(android.graphics.Color.RED);
if(hitJump==true)jhit.setTextColor(android.graphics.Color.GREEN);
            jhit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             hitJump?hitJump=false:hitJump=true;
jhit.setText("Hit'n'jump");
if(hitJump == true){
jhit.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Hit'n'jump on");

hitJump = true;
}
if(hitJump == false){
jhit.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Hit'n'jump off");

hitJump = false;
}
                }
            }));
            row3.addView(jhit);
	
            var light = new haxButton();
light.setText("Brightness");
light.setTextColor(android.graphics.Color.RED);
if(brightness==true)light.setTextColor(android.graphics.Color.GREEN);
            light.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             brightness?brightness=false:brightness=true;
light.setText("Brightness");
if(brightness == true){
light.setTextColor(android.graphics.Color.GREEN);

brightness = true;
}
if(brightness == false){
light.setTextColor(android.graphics.Color.RED);

brightness = false;
}
                }
            }));
            row3.addView(light);
	
var button12 = new haxButton();
button12.setText("Auto spam");
button12.setTextColor(android.graphics.Color.RED);
if(autospam2==true)button12.setTextColor(android.graphics.Color.GREEN);
            button12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
	autospam2?autospam2=false:autospam2=true;
button12.setText("Auto spam");
if(autospam2==true){
button12.setTextColor(android.graphics.Color.GREEN);
spa();
hax.dismiss();
autospam2= true;
}
if(autospam2==false){
button12.setTextColor(android.graphics.Color.RED);
autospam = false;
autospam2= false;
}
                }
            }));
            row3.addView(button12);
	
haxLayout.addView(row3);
	
	var row4 = new android.widget.LinearLayout(MainActivity);
	    row4.setOrientation(0);
	
var afkspawn = new haxButton();
afkspawn.setText("Low health action");
afkspawn.setTextColor(android.graphics.Color.RED);
if(lowhealth==true)afkspawn.setTextColor(android.graphics.Color.GREEN);
            afkspawn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             lowhealth?lowhealth=false:lowhealth=true;
afkspawn.setText("Low health action");
if(lowhealth == true){
afkspawn.setTextColor(android.graphics.Color.GREEN);
atact2();
hax.dismiss();
lowhealth = true;
}
if(lowhealth == false){
afkspawn.setTextColor(android.graphics.Color.RED);

afkspawn = false;
}
                }
            }));
            row4.addView(afkspawn);
	
var zmmm = new haxButton();
      zmmm.setText("Instant break");
zmmm.setTextColor(android.graphics.Color.RED);
if(instabreak==true)zmmm.setTextColor(android.graphics.Color.GREEN);
		zmmm.setOnClickListener(new android.view.View.OnClickListener() {
		 onClick: function(v){
 instabreak?instabreak=false:instabreak=true;
zmmm.setText("Instant break");
if(instabreak == true){
zmmm.setTextColor(android.graphics.Color.GREEN);
instaDestroy();
clientMessage(client + "§7Instant break is on");
}
if(instabreak == false){
zmmm.setTextColor(android.graphics.Color.RED);
clientMessage(client + "§7Instant break is off");
defaultDestroy();
                }
			}
		});
		row4.addView(zmmm);
	
var srent = new haxButton();
srent.setText("Entity indicator");
srent.setTextColor(android.graphics.Color.RED);
if(entind==true)srent.setTextColor(android.graphics.Color.GREEN);
            srent.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             entind?entind=false:entind=true;
srent.setText("Entity indicator");
if(entind == true){
srent.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Entity indicator on\nThis shows you which entity/player/mob has been spawned or removed.");
entind = true;
}
if(entind == false){
srent.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Entity indicator off");
entind = false;
}
                }
            }));
            row4.addView(srent);
	
haxLayout.addView(row4);
	
	var row5 = new android.widget.LinearLayout(MainActivity);
	    row5.setOrientation(0);
	
var atkact = new haxButton();
atkact.setText("Attack action");
atkact.setTextColor(android.graphics.Color.RED);
if(attackActions==true)atkact.setTextColor(android.graphics.Color.GREEN);
            atkact.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             attackActions?attackActions=false:attackActions=true;
atkact.setText("Attack action");
if(attackActions == true){
atkact.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Attack action on");
atact();
hax.dismiss();
attackActions = true;
}
if(attackActions == false){
atkact.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Attack action off");

attackActions = false;
}
                }
            }));
            row5.addView(atkact);
	
            var button6 = new haxButton();
button6.setText("Glide");
button6.setTextColor(android.graphics.Color.RED);
if(glide==true)button6.setTextColor(android.graphics.Color.GREEN);
            button6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             glide?glide=false:glide=true;
button6.setText("Glide");
if(glide == true){
button6.setTextColor(android.graphics.Color.GREEN);
android.widget.Toast.makeText(MainActivity, "Credit: Apric0cks from maximus mod!", 1).show();
glide = true;
}
if(glide == false){
button6.setTextColor(android.graphics.Color.RED);

glide = false;
}
                }
            }));
            row5.addView(button6);
	
var svr = new haxButton();
            svr.setText("Server IP:Port");
            svr.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage(client + "§lIP:§r " + Server.getAddress() + " §lPort:§r " + Server.getPort());
			/*no need to do anything with this, it shows server IP:Port anyways incase the user is on a realm.*/
if(Server.getAddress()=="null" || Server.getPort()=="0")clientMessage(client + "You are not on a server!");
                }
            }));
            row5.addView(svr);
	
haxLayout.addView(row5);
	
	var row6 = new android.widget.LinearLayout(MainActivity);
	    row6.setOrientation(0);
	
	var bowbut = new haxButton();
bowbut.setText("Auto bow aim");
bowbut.setTextColor(android.graphics.Color.RED);
if(bowaura==true)bowbut.setTextColor(android.graphics.Color.GREEN);
            bowbut.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             bowaura?bowaura=false:bowaura=true;
bowbut.setText("Auto bow aim");
if(bowaura == true){
bowbut.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Auto bow aim on");
bowaura = true;
}
if(bowaura == false){
bowbut.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Auto bow aim off");
bowaura = false;
}
                }
            }));
            row6.addView(bowbut);
	
            var walkonair = new haxButton();
walkonair.setText("Walk on air");
walkonair.setTextColor(android.graphics.Color.RED);
if(airwalk==true)walkonair.setTextColor(android.graphics.Color.GREEN);
            walkonair.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             airwalk?airwalk=false:airwalk=true;
walkonair.setText("Walk on air");
if(airwalk == true){
walkonair.setTextColor(android.graphics.Color.GREEN);
Block.setShape(95, 0, 0, 0, 1, 1, 1);
clientMessage(client + "You may get detected as flying becareful!")
airwalk = true;
}
if(airwalk == false){
walkonair.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Walk on air is off")
airwalk = false;
}
                }
            }));
            row6.addView(walkonair);
	
	var butfuon1 = new haxButton();
butfuon1.setText("Item indicator");
butfuon1.setTextColor(android.graphics.Color.RED);
if(itemIndi==true)butfuon1.setTextColor(android.graphics.Color.GREEN);
            butfuon1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             itemIndi?itemIndi=false:itemIndi=true;
butfuon1.setText("Item indicator");
if(itemIndi== true){
butfuon1.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Item info on");
itemIndi= true;
}
if(itemIndi== false){
butfuon1.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Item info off");
itemIndi= false;
}
                }
            }));
            row6.addView(butfuon1);
	
haxLayout.addView(row6);
	
	var row7 = new android.widget.LinearLayout(MainActivity);
	    row7.setOrientation(0);
	
	var hitbutton = new haxButton();
hitbutton.setText("Hitbox increase");
hitbutton.setTextColor(android.graphics.Color.RED);
if(hitbox1==true)hitbutton.setTextColor(android.graphics.Color.GREEN);
            hitbutton.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             hitbox1?hitbox1=false:hitbox1=true;
hitbutton.setText("Hitbox increase");
if(hitbox1 == true){
hitbutton.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Hitbox increase on");
hitbox1 = true;
}
if(hitbox1 == false){
hitbutton.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Hitbox increase off");
	for(var i = 0; i < 5; i++){
		Entity.setCollisionSize(Entity.getAll(), 1, 1);
		Entity.setCollisionSize(Server.getAllPlayers(), 1, 2);
	}
hitbox1 = false;
}
                }
            }));
            row7.addView(hitbutton);
	
            var spiderman = new haxButton();
spiderman.setText("Spider");
spiderman.setTextColor(android.graphics.Color.RED);
if(spider==true)spiderman.setTextColor(android.graphics.Color.GREEN);
            spiderman.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             spider?spider=false:spider=true;
spiderman.setText("Spider");
if(spider == true){
spiderman.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Spider on");
android.widget.Toast.makeText(MainActivity, "Credit: Firepro9978 from VoidClient!", 1).show();
Utils.Player.isCollidedHorizontally();
spider = true;
}
if(spider == false){
spiderman.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Spider off");

spider = false;
}
                }
            }));
            row7.addView(spiderman);
	
var butfuon3 = new haxButton();
butfuon3.setText("Alpha Text");
butfuon3.setTextColor(android.graphics.Color.RED);
if(alphatext==true)butfuon3.setTextColor(android.graphics.Color.GREEN);
            butfuon3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             alphatext?alphatext=false:alphatext=true;
butfuon3.setText("Alpha Text");
if(alphatext== true){
butfuon3.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"AlphaText on, send a message in chat!");
alphatext= true;
}
if(alphatext== false){
butfuon3.setTextColor(android.graphics.Color.RED);
clientMessage(client+"AlphaText off");
alphatext= false;
}
                }
            }));
            row7.addView(butfuon3);
	
haxLayout.addView(row7);
	
	var row8 = new android.widget.LinearLayout(MainActivity);
	    row8.setOrientation(0);
	
var nknock = new haxButton();
nknock.setText("No knockback");
nknock.setTextColor(android.graphics.Color.RED);
if(noknock==true)nknock.setTextColor(android.graphics.Color.GREEN);
            nknock.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             noknock?noknock=false:noknock=true;
nknock.setText("No knockback");
if(noknock == true){
nknock.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"No knockback on");
noknock = true;
}
if(noknock == false){
nknock.setTextColor(android.graphics.Color.RED);
clientMessage(client+"No knockback off");
noknock = false;
}
                }
            }));
            row8.addView(nknock);
	
var butfuon2 = new haxButton();
butfuon2.setText("Bunny hop");
butfuon2.setTextColor(android.graphics.Color.RED);
if(bhop==true)butfuon2.setTextColor(android.graphics.Color.GREEN);
            butfuon2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             bhop?bhop=false:bhop=true;
butfuon2.setText("Bunny hop");
if(bhop== true){
butfuon2.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Bunny hop on");
	android.widget.Toast.makeText(MainActivity, "Credit: Apric0cks from maximus mod!", 1).show();
bhop= true;
}
if(bhop== false){
butfuon2.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Bunny hop off");
bhop= false;
}
                }
            }));
            row8.addView(butfuon2);
	
            var button5 = new haxButton();
button5.setText("Coordinates");
button5.setTextColor(android.graphics.Color.RED);
if(coords==true)button5.setTextColor(android.graphics.Color.GREEN);
            button5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             coords?coords=false:coords=true;
button5.setText("Coordinates");
if(coords == true){
button5.setTextColor(android.graphics.Color.GREEN);
if(armor==true)armor==false;
if(yawpitch==true)yawpitch==false;
if(getvel==true)getvel==false;
coords = true;
}
if(coords == false){
button5.setTextColor(android.graphics.Color.RED);

coords = false;
}
                }
            }));
            row8.addView(button5);
	
haxLayout.addView(row8);
			
      hax = new android.widget.PopupWindow(haxLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/1.1, MainActivity.getWindowManager().getDefaultDisplay().getHeight()/1.2);
             if(default1==true)hax.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      if(default1==false)hax.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
haxLayout1.setBackgroundDrawable(bg);
haxLayout1.setPadding(10,0,10,0);
	  hax.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
			} catch (error) {
				android.widget.Toast.makeText(ctx, "Error: " + error + "#" + error.lineNumber, 1).show();
			}
	}}));
}

function settings_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var settingsLayout = new android.widget.LinearLayout(MainActivity);
            var settingsScroll = new android.widget.ScrollView(MainActivity);
            var settingsLayout1 = new android.widget.LinearLayout(MainActivity);
            settingsLayout.setOrientation(1);
            settingsLayout1.setOrientation(1);
            settingsScroll.addView(settingsLayout);
            settingsLayout1.addView(settingsScroll);
            
                var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new View.OnClickListener() {
			onClick: function(v){
             settings.dismiss();
             showMenuBtn();
			}
		});
		settingsLayout.addView(exit);
		
	    var link = new styleButton();
            link.setText("Download link");       
            link.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
var urls3 = new android.content.Intent(MainActivity);
	  urls3.setAction(android.content.Intent.ACTION_VIEW);
                    urls3.setData(android.net.Uri.parse("https://arceusmatt.github.io/AlphaHack"));
                    MainActivity.startActivity(urls3);
                }
            }));
            settingsLayout.addView(link);
	
	     var toggleHax = new styleButton();
            toggleHax.setText("Hack mode");
	    if(haxMode==true)toggleHax.setText("Exit hax mode"); 
            toggleHax.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
haxMode?haxMode=false:haxMode=true;
if(haxMode == true){
toggleHax.setText("Exit hax mode");
haxMode = true;
}
if(haxMode == false){
toggleHax.setText("Hack mode");
haxMode = false;
}
                }
            }));
            settingsLayout.addView(toggleHax);
			
	var catm1 = new android.widget.TextView(MainActivity);
            catm1.setText("Mod settings");
            catm1.setTextColor(android.graphics.Color.BLACK);
			var textviewBg = new android.graphics.drawable.GradientDrawable();
			textviewBg.setColor(android.graphics.Color.WHITE);
			catm1.setBackgroundDrawable(textviewBg);
            settingsLayout.addView(catm1);
	
	var heset = new styleButton();
            heset.setText("Height for HigherJumps");       
            heset.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
				heightset();
				settings.dismiss();
                }
            }));
            settingsLayout.addView(heset);
	
	var rangset = new styleButton();
            rangset.setText("Range for aimaura");       
            rangset.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
				rangeset();
				settings.dismiss();
                }
            }));
            settingsLayout.addView(rangset);
			
	var shaset = new styleButton();
            shaset.setText("Hitbox range & height");       
            shaset.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
				shadowset();
				settings.dismiss();
                }
            }));
            settingsLayout.addView(shaset);
	
	/*
	* todo fix base64
	*
	var mcpe = new styleButton();
            mcpe.setText("MCPE menu theme");       
            mcpe.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
mcpetheme = true;
GUIName = android.graphics.Color.BLACK;
GUIText = android.graphics.Color.BLACK;
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(mcpe);*/
	
	var cat0 = new android.widget.TextView(MainActivity);
            cat0.setText("α Button");
            cat0.setTextColor(android.graphics.Color.BLACK);
			var textviewBg = new android.graphics.drawable.GradientDrawable();
			textviewBg.setColor(android.graphics.Color.WHITE);
			cat0.setBackgroundDrawable(textviewBg);
            settingsLayout.addView(cat0);
	
	     var hideAH = new styleButton();
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
	
	     var toggleAH = new styleButton();
            toggleAH.setText("Keybind mode");  
	    if(keybind1==true)toggleAH.setText("Exit keybind"); 
            toggleAH.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
keybind1?keybind1=false:keybind1=true;
if(keybind1 == true){
toggleAH.setText("Exit keybind");
keybind1 = true;
}
if(keybind1 == false){
toggleAH.setText("Keybind mode");
keybind1 = false;
}
                }
            }));
            settingsLayout.addView(toggleAH);
			
			var posright = new styleButton();
            posright.setText("Button right");       
            posright.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
btnPos = android.view.Gravity.RIGHT;
activePos = android.view.Gravity.LEFT;
                }
            }));
            settingsLayout.addView(posright);

            var posleft = new styleButton();
            posleft.setText("Button left");       
            posleft.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
btnPos = android.view.Gravity.LEFT;
activePos = android.view.Gravity.RIGHT;
                }
            }));
            settingsLayout.addView(posleft);
	
	var cat1 = new android.widget.TextView(MainActivity);
            cat1.setText("Menu location");
            cat1.setTextColor(android.graphics.Color.BLACK);
			var textviewBg = new android.graphics.drawable.GradientDrawable();
			textviewBg.setColor(android.graphics.Color.WHITE);
			cat1.setBackgroundDrawable(textviewBg);
            settingsLayout.addView(cat1);
		
		var g1 = new styleButton();
            g1.setText("Menu center");       
            g1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIPos = android.view.Gravity.CENTER;
GUIPos2 = android.view.Gravity.CENTER;
GUIPos3 = android.view.Gravity.CENTER;
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(g1);

var g2 = new styleButton();
            g2.setText("Menu right");       
            g2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIPos = android.view.Gravity.RIGHT;
GUIPos2 = android.view.Gravity.RIGHT;
GUIPos3 = android.view.Gravity.RIGHT;
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(g2);

var g3 = new styleButton();
            g3.setText("Menu left");       
            g3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIPos = android.view.Gravity.LEFT;
GUIPos2 = android.view.Gravity.LEFT;
GUIPos3 = android.view.Gravity.LEFT;
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(g3);
	
	var cat2 = new android.widget.TextView(MainActivity);
            cat2.setText("Menu Sizes");
            cat2.setTextColor(android.graphics.Color.BLACK);
			var textviewBg = new android.graphics.drawable.GradientDrawable();
			textviewBg.setColor(android.graphics.Color.WHITE);
			cat2.setBackgroundDrawable(textviewBg);
            settingsLayout.addView(cat2);
			
			var gs0 = new styleButton();
            gs0.setText("Menu Size 1");       
            gs0.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUISize = 4;
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(gs0);

var gs1 = new styleButton();
            gs1.setText("Menu Size 2");       
            gs1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUISize = 3;
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(gs1);

var gs2 = new styleButton();
            gs2.setText("Menu Size normal");       
            gs2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUISize = 2;
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(gs2);

var gs3 = new styleButton();
            gs3.setText("Menu Size 3");       
            gs3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUISize = 1;
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(gs3);
	
	var cat3 = new android.widget.TextView(MainActivity);
            cat3.setText("Menu background");
            cat3.setTextColor(android.graphics.Color.BLACK);
			var textviewBg = new android.graphics.drawable.GradientDrawable();
			textviewBg.setColor(android.graphics.Color.WHITE);
			cat3.setBackgroundDrawable(textviewBg);
            settingsLayout.addView(cat3);
            
var l1 = new styleButton();
            l1.setText("Default Menu");       
            l1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor1
var GUIText = android.graphics.Color.WHITE;
default1 = true;
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(l1);
	
            var l0 = new styleButton();
            l0.setText("Transparent Menu");       
            l0.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor1
 var GUIText = android.graphics.Color.WHITE;
 if(default1==true)default1 = false;
			//saveSetting("bgTrans");
		settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(l0);
            
            var l2 = new styleButton();
            l2.setText("Black Menu");       
            l2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor2
 var GUIText = android.graphics.Color.WHITE;
 if(default1==true)default1 = false;
			//saveSetting("bgBlack");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(l2);

var l3 = new styleButton();
            l3.setText("White Menu");       
            l3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor3
var GUIText = android.graphics.Color.BLACK
if(default1==true)default1 = false;
			//saveSetting("bgWhite");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(l3);

var l4 = new styleButton();
            l4.setText("Red Menu");       
            l4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor4
if(default1==true)default1 = false;
			//saveSetting("bgRed");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(l4);

var l5 = new styleButton();
            l5.setText("Blue Menu");       
            l5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor5
if(default1==true)default1 = false;
			//saveSetting("bgBlue");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(l5);

var l6 = new styleButton();
            l6.setText("Gray Menu");       
            l6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor6
var GUIText = android.graphics.Color.WHITE;
if(default1==true)default1 = false;
			//saveSetting("bgGray");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(l6);

var l7 = new styleButton();
            l7.setText("Light gray Menu");       
            l7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor7
var GUIText = android.graphics.Color.BLACK;
if(default1==true)default1 = false;
			//saveSetting("bgLtgray");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(l7);

var l8 = new styleButton();
            l8.setText("Yellow Menu");       
            l8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor8
var GUIText = android.graphics.Color.BLACK;
if(default1==true)default1 = false;
			//saveSetting("bgYellow");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(l8);

var l9 = new styleButton();
            l9.setText("Cyan Menu");       
            l9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor9
var GUIText = android.graphics.Color.BLACK;
if(default1==true)default1 = false;
			//saveSetting("bgCyan");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(l9);

var l10 = new styleButton();
            l10.setText("Dark gray Menu");       
            l10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor10
var GUIText = android.graphics.Color.WHITE
if(default1==true)default1 = false;
			//saveSetting("bgDkgray");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(l10);

var l11 = new styleButton();
            l11.setText("Green Menu");       
            l11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor11
if(default1==true)default1 = false;
			//saveSetting("bgGreen");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(l11);

var l12 = new styleButton();
            l12.setText("Magenta Menu");       
            l12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor12
if(default1==true)default1 = false;
			//saveSetting("bgMagenta");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(l12);
	
	var cat4 = new android.widget.TextView(MainActivity);
            cat4.setText("Button text color");
            cat4.setTextColor(android.graphics.Color.BLACK);
			var textviewBg = new android.graphics.drawable.GradientDrawable();
			textviewBg.setColor(android.graphics.Color.WHITE);
			cat4.setBackgroundDrawable(textviewBg);
            settingsLayout.addView(cat4);
            
        var b2 = new styleButton();
            b2.setText("Black button text");       
            b2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			GUIText = GUIText2;
			//saveSetting("txtBlack");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b2);

var b3 = new styleButton();
            b3.setText("White button text");       
            b3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIText = GUIText3;
			//saveSetting("txtWhite");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b3);

var b4 = new styleButton();
            b4.setText("Red button text");       
            b4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIText = GUIText4;
			//saveSetting("txtRed");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b4);

var b5 = new styleButton();
            b5.setText("Blue button text");       
            b5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIText = GUIText5;
			//saveSetting("txtBlue");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b5);

var b6 = new styleButton();
            b6.setText("Gray button text");       
            b6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIText = GUIText6;
			//saveSetting("txtGray");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b6);

var b7 = new styleButton();
            b7.setText("Lightgray button text");       
            b7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIText = GUIText7;
			//saveSetting("txtLtgray");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b7);

var b8 = new styleButton();
            b8.setText("Yellow button text");       
            b8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIText = GUIText8;
			//saveSetting("txtYellow");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b8);

var b9 = new styleButton();
            b9.setText("Cyan button text");       
            b9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIText = GUIText9;
			//saveSetting("txtCyan");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b9);

var b10 = new styleButton();
            b10.setText("Darkgray button text");       
            b10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIText = GUIText10;
			//saveSetting("txtDkgray");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b10);

var b11 = new styleButton();
            b11.setText("Green button text");       
            b11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIText = GUIText11;
			//saveSetting("txtGreen");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b11);

var b12 = new styleButton();
            b12.setText("Magenta button text");       
            b12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIText = GUIText12;
			//saveSetting("txtMagenta");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b12);
	
	var cat5 = new android.widget.TextView(MainActivity);
            cat5.setText("Outline color");
            cat5.setTextColor(android.graphics.Color.BLACK);
			var textviewBg = new android.graphics.drawable.GradientDrawable();
			textviewBg.setColor(android.graphics.Color.WHITE);
			cat5.setBackgroundDrawable(textviewBg);
            settingsLayout.addView(cat5);
            
            var b1 = new styleButton();
            b1.setText("Default outline");       
            b1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke1
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b1);

var b2 = new styleButton();
            b2.setText("Black Outline");       
            b2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke2
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b2);

var b3 = new styleButton();
            b3.setText("White Outline");       
            b3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke3
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b3);

var b4 = new styleButton();
            b4.setText("Red Outline");       
            b4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke4
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b4);

var b5 = new styleButton();
            b5.setText("Blue Outline");       
            b5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke5
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b5);

var b6 = new styleButton();
            b6.setText("Gray Outline");       
            b6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke6
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b6);

var b7 = new styleButton();
            b7.setText("Light gray Outline");       
            b7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke7
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b7);

var b8 = new styleButton();
            b8.setText("Yellow Outline");       
            b8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke8
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b8);

var b9 = new styleButton();
            b9.setText("Cyan Outline");       
            b9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke9
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b9);

var b10 = new styleButton();
            b10.setText("Dark gray Outline");       
            b10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke10
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b10);

var b11 = new styleButton();
            b11.setText("Green Outline");       
            b11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke11
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b11);

var b12 = new styleButton();
            b12.setText("Magenta Outline");       
            b12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIStroke = GUIStroke12
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(b12);
	
	var cat6 = new android.widget.TextView(MainActivity);
            cat6.setText("Button background");
            cat6.setTextColor(android.graphics.Color.BLACK);
			var textviewBg = new android.graphics.drawable.GradientDrawable();
			textviewBg.setColor(android.graphics.Color.WHITE);
			cat6.setBackgroundDrawable(textviewBg);
            settingsLayout.addView(cat6);
	
	var btc1 = new styleButton();
            btc1.setText("Default Buttons");       
            btc1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
defaultbtnc = true;
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(btc1);
	
var btc0 = new styleButton();
            btc0.setText("Transparent Buttons");       
            btc0.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns1
defaultbtnc = false;
			//saveSetting("btnTrans");
		settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(btc0);

var btc2 = new styleButton();
            btc2.setText("Black Buttons");       
            btc2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns2
defaultbtnc = false;
			//saveSetting("btnBlack");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(btc2);

var btc3 = new styleButton();
            btc3.setText("White Buttons");       
            btc3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns3
defaultbtnc = false;
			//saveSetting("btnWhite");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(btc3);

var btc4 = new styleButton();
            btc4.setText("Red Buttons");       
            btc4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns4
defaultbtnc = false;
			//saveSetting("btnRed");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(btc4);

var btc5 = new styleButton();
            btc5.setText("Blue Buttons");       
            btc5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns5
defaultbtnc = false;
			//saveSetting("btnBlue");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(btc5);

var btc6 = new styleButton();
            btc6.setText("Gray Buttons");       
            btc6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns6
defaultbtnc = false;
			//saveSetting("btnGray");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(btc6);

var btc7 = new styleButton();
            btc7.setText("Light gray Buttons");       
            btc7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns7
defaultbtnc = false;
			//saveSetting("btnLtgray");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(btc7);

var btc8 = new styleButton();
            btc8.setText("Yellow Buttons");       
            btc8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns8
defaultbtnc = false;
			//saveSetting("btnYellow");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(btc8);

var btc9 = new styleButton();
            btc9.setText("Cyan Buttons");       
            btc9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns9
defaultbtnc = false;
			//saveSetting("btnCyan");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(btc9);

var btc10 = new styleButton();
            btc10.setText("Dark gray Buttons");       
            btc10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns10
defaultbtnc = false;
			//saveSetting("btnDkgray");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(btc10);

var btc11 = new styleButton();
            btc11.setText("Green Buttons");       
            btc11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns11
defaultbtnc = false;
			//saveSetting("btnGreen");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(btc11);

var btc12 = new styleButton();
            btc12.setText("Magenta Buttons");       
            btc12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIBtns = GUIBtns12;
defaultbtnc = false;
			//saveSetting("btnMagenta");
			                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(btc12);
	
	var exit2 = new styleButton();
		exit2.setText("Exit");
		exit2.setOnClickListener(new View.OnClickListener() {
			onClick: function(v){
             settings.dismiss();
             showMenuBtn();
			}
		});
		settingsLayout.addView(exit2)

            settings = new android.widget.PopupWindow(settingsLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)settings.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      if(default1==false)settings.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
settingsLayout1.setBackgroundDrawable(bg);
settingsLayout1.setPadding(20,0,20,0);
            settings.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}

function mainMenu(){
    MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var menuLayout = new android.widget.LinearLayout(MainActivity);
            var menuScroll = new android.widget.ScrollView(MainActivity);
            var menuLayout1 = new android.widget.LinearLayout(MainActivity);
            menuLayout.setOrientation(1);
            menuLayout1.setOrientation(1);
            menuScroll.addView(menuLayout);
            menuLayout1.addView(menuScroll);
            
            var title = new android.widget.TextView(MainActivity);
            title.setTextSize(20);
            title.setText(" AlphαHαck v2 (Beta)");
            title.setGravity(android.view.Gravity.CENTER);
            title.setTextColor(GUIName);
            menuLayout.addView(title);

            var title2 = new android.widget.TextView(MainActivity);
            title2.setTextSize(20);
            title2.setText("Made by: ArceusMαtt");
            title2.setGravity(android.view.Gravity.CENTER);
            title2.setTextColor(GUIName);
            menuLayout.addView(title2);
            
            var exit = new styleButton();
            exit.setText("Exit AlphαHαck");
            if(mcpetheme==true)exit.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
            exit.setTextColor(android.graphics.Color.RED);
            exit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
menu.dismiss(); 
showMenuBtn(); 
if(getLanguage=="en_US")android.widget.Toast.makeText(MainActivity, "Closed successfully", 1).show();
 if(getLanguage=="de_DE")android.widget.Toast.makeText(MainActivity, "Erfolgreich geschlossen", 1).show();
if(getLanguage=="ko_KR")android.widget.Toast.makeText(MainActivity, "성공적으로 닫았습니다", 1).show();
                }
            }));
            menuLayout.addView(exit);
            
        var line0 = new android.widget.LinearLayout(MainActivity);
	    line0.setOrientation(0);

        menuLayout.addView(line0);
	    
var group = new styleButton();
group.setText("Community");
group.setTextColor(GUIText);
group.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             var urls4 = new android.content.Intent(MainActivity);
	  urls4.setAction(android.content.Intent.ACTION_VIEW);
                    urls4.setData(android.net.Uri.parse("https://plus.google.com/communities/103695355587842948163"));
                    MainActivity.startActivity(urls4);
			}
		});
		menuLayout.addView(group);

var settings = new styleButton();
settings.setText("Settings");
	    if(getLanguage=="it_IT")settings.setText("Impostazioni");
	    if(getLanguage=="es_MX")settings.setText("Configuracion");
	    if(getLanguage=="ko_KR")settings.setText("설정");
settings.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             settings_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(settings);

var misc = new styleButton();
misc.setText("Misc");
if(getLanguage=="ko_KR")misc.setText("기타");
misc.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             misc_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(misc);
		
		function misc_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var miscLayout = new android.widget.LinearLayout(MainActivity);
            var miscScroll = new android.widget.ScrollView(MainActivity);
            var miscLayout1 = new android.widget.LinearLayout(MainActivity);
            miscLayout.setOrientation(1);
            miscLayout1.setOrientation(1);
            miscScroll.addView(miscLayout);
            miscLayout1.addView(miscScroll);
            
            var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             misc.dismiss();
             showMenuBtn();
			}
		});
		miscLayout.addView(exit);
		
		var credits = new styleButton();
		credits.setText("Credits");
		credits.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             misc.dismiss();
             credit_menu();
			}
		});
		miscLayout.addView(credits);
		
		function credit_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var creditLayout = new android.widget.LinearLayout(MainActivity);
            var creditScroll = new android.widget.ScrollView(MainActivity);
            var creditLayout1 = new android.widget.LinearLayout(MainActivity);
            creditLayout.setOrientation(1);
            creditLayout1.setOrientation(1);
            creditScroll.addView(creditLayout);
            creditLayout1.addView(creditScroll);

			var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             credit.dismiss();
             showMenuBtn();
			}
		});
		creditLayout.addView(exit);
		
	    var credit1 = new android.widget.TextView(MainActivity);
            credit1.setTextSize(20);
            credit1.setText("Godsoft029 for providing JS support & some of his scripts.");
            credit1.setTextColor(android.graphics.Color.GREEN);
            creditLayout.addView(credit1);
            
            var credit2 = new android.widget.TextView(MainActivity);
            credit2.setTextSize(20);
            credit2.setText("Peacestorm / vertex for some of their scripts & ideas.");
            credit2.setTextColor(android.graphics.Color.BLUE);
            creditLayout.addView(credit2);
            
            var credit3 = new android.widget.TextView(MainActivity);
            credit3.setTextSize(20);
            credit3.setText("AJ170 for ideas & adding 'clear inventory'.");
            credit3.setTextColor(android.graphics.Color.YELLOW);
            creditLayout.addView(credit3);
            
            var credit4 = new android.widget.TextView(MainActivity);
            credit4.setTextSize(20);
            credit4.setText("APRIC0CKS for ideas & adding 'glide'.");
            credit4.setTextColor(android.graphics.Color.WHITE);
            creditLayout.addView(credit4);
            
            var credit5 = new android.widget.TextView(MainActivity);
            credit5.setTextSize(20);
            credit5.setText("Johnmacrocraft for korean translate & adding 'block protect'.");
            credit5.setTextColor(android.graphics.Color.RED);
            creditLayout.addView(credit5);
			
credit = new android.widget.PopupWindow(creditLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/1, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            credit.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#000000")));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
creditLayout1.setBackgroundDrawable(bg);
creditLayout1.setPadding(20,0,20,0);
            credit.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}

var pass = new styleButton();
		pass.setText("Brute force (Numbers)");
		pass.setTextColor(android.graphics.Color.RED);
if(hackk==true)pass.setTextColor(android.graphics.Color.GREEN);
		pass.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             hackk?hackk=false:hackk=true;
pass.setText("Brute force (Numbers)");
if(hackk == true){
pass.setTextColor(android.graphics.Color.GREEN);
hackk = true;
}
if(hackk == false){
pass.setTextColor(android.graphics.Color.RED);

hackk = false;
}
			}
		});
		miscLayout.addView(pass);
		
		var pass2 = new styleButton();
		pass2.setText("SQL Inject (Numbers)");
		pass2.setTextColor(android.graphics.Color.RED);
if(hackk2==true)pass2.setTextColor(android.graphics.Color.GREEN);
		pass2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             hackk2?hackk2=false:hackk2=true;
pass2.setText("SQL Inject (Numbers)");
if(hackk2 == true){
pass2.setTextColor(android.graphics.Color.GREEN);
hackk2 = true;
}
if(hackk2 == false){
pass2.setTextColor(android.graphics.Color.RED);

hackk2 = false;
}
			}
		});
		miscLayout.addView(pass2);
		
		var ht1 = new styleButton();
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
	showMenuBtn();
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

var ht2 = new styleButton();
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
	showMenuBtn();
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

var ht3 = new styleButton();
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
	showMenuBtn();
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
		
		var ht4 = new styleButton();
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
	showMenuBtn();
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

var ht5 = new styleButton();
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
	showMenuBtn();
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
		
var ht6 = new styleButton();
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
	showMenuBtn();
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

var ht7 = new styleButton();
		ht7.setText("How to get into claim land");
		ht7.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(MainActivity); 
/*alert.setTitle(""); */

var scroll = new android.widget.ScrollView(MainActivity); 
var layout = new android.widget.LinearLayout(MainActivity); 
layout.setOrientation(1);

alert.setTitle("How to get into claim land");
 alert.setMessage("If you're using AH V2 Open the single player menu\nOnce it's opened turn on grief, pick ID 0\nFace the way you want inside the land then turn it off\nPut blocks behind you then go inside the land and relog.\nOnce you join you should be inside the claimed house/base/land.-ArceusMatt\n(This may get patched soon last checked was 12/10/2016)");

alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
misc.dismiss();
	showMenuBtn();
      }});

alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){

dialog.dismiss();
      }});
var dialog = alert.create();
dialog.show();
			}
		});
		miscLayout.addView(ht7);
		
var ht8 = new styleButton();
		ht8.setText("How to get players XYZ");
		ht8.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
var alert = new android.app.AlertDialog.Builder(MainActivity); 
/*alert.setTitle(""); */

var scroll = new android.widget.ScrollView(MainActivity); 
var layout = new android.widget.LinearLayout(MainActivity); 
layout.setOrientation(1);

alert.setTitle("How to get players XYZ");
 alert.setMessage("If you're using AH V2 Open the online menu\nOnce open pick coords OR use toolboxs mini map coords\nChange your username to the player you want XYZ of\nOnce you join you should see their coords. -ArceusMatt\nThis cant be used if the server has:\nAlways spawn or xbox login only.");

alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
    
dialog.dismiss();
misc.dismiss();
	showMenuBtn();
      }});

alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){

dialog.dismiss();
      }});
var dialog = alert.create();
dialog.show();
			}
		});
		miscLayout.addView(ht8);

var cidban = new styleButton();
            cidban.setText("CID/dev pardon"); 
            cidban.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
			devpardon();
                }
            }));
            miscLayout.addView(cidban);
            
            var sit = new styleButton();
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
      var urls2 = new android.content.Intent(MainActivity);
	  urls2.setAction(android.content.Intent.ACTION_VIEW);
	  urls2.setData(android.net.Uri.parse("http://www.tineye.com"));
	  MainActivity.startActivity(urls2);
      }

var sid = new styleButton();
		sid.setText("View website code");
		sid.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             misc.dismiss();
             scc();
			}
		});
		miscLayout.addView(sid);

                var aniview = new styleButton();
		aniview.setText("Watch anime on MCPE");
		aniview.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
			misc.dismiss();
			betterWebview('https://watch-anime.net');
			android.widget.Toast.makeText(MainActivity, "Please avoid ads & adjust your zoom", 1).show();
			}
		});
		miscLayout.addView(aniview);
		
		/*
		*
		*added a new webview
		*
		function animeView(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var animeLayout = new android.widget.LinearLayout(MainActivity);
            
            var animeScroll = new android.widget.ScrollView(MainActivity);
            
            var animeLayout1 = new android.widget.LinearLayout(MainActivity);
            animeLayout.setOrientation(1);
            animeLayout1.setOrientation(1);
            
            animeScroll.addView(animeLayout);
            animeLayout1.addView(animeScroll);

var exit = new styleButton();
            exit.setText("Exit");
exit.setTextColor(android.graphics.Color.RED);
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
      	webset.setSupportZoom(true);
      	webset.setBuiltInZoomControls(true);
      	webset.setDisplayZoomControls(false);
      webs.loadUrl('https://watch-anime.net');
      animeLayout.addView(webs);

anime = new android.widget.PopupWindow(animeLayout1, dip2px(500), dip2px(500));

anime = new android.widget.PopupWindow(animeLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/1.4, MainActivity.getWindowManager().getDefaultDisplay().getHeight()/1.3);
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
animeLayout1.setBackgroundDrawable(bg);
animeLayout1.setPadding(20,0,20,0);
anime.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
            anime.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}*/

var ip0 = new styleButton();
            ip0.setText("IP lookup");
            ip0.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
misc.dismiss();
iplu();
                }
            }));
            miscLayout.addView(ip0);
      
      var ip1 = new styleButton();
            ip1.setText("Players list");
            ip1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
misc.dismiss();
pip();
                }
            }));
            miscLayout.addView(ip1);

var getCid = new styleButton();
            getCid.setText("What's my CID?");
            getCid.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
				onBackground.returnClient();
                }
            }));
            miscLayout.addView(getCid);

var yrip = new styleButton();
            yrip.setText("What's my IP?");
            yrip.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
			onBackground.returnAddress();
clientMessage("§cDo Not Share! for your safety.");
                }
            }));
            miscLayout.addView(yrip);

var dejs = new styleButton();
            dejs.setText("Decrypt JavaScript");
            dejs.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
			betterWebview('http://alexstar.ru/tools/jsunpack/');
			misc.dismiss();
                }
            }));
            miscLayout.addView(dejs);

function djs()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('http://alexstar.ru/tools/jsunpack/');
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }
	  
var doping = new styleButton();
doping.setText("Ping / fps");
doping.setTextColor(android.graphics.Color.RED);
if(checkping==true)doping.setTextColor(android.graphics.Color.GREEN);
            doping.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             checkping?checkping=false:checkping=true;
doping.setText("Ping / fps");
if(checkping == true){
doping.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Ping / fps on");
checkping = true;
}
if(checkping == false){
doping.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Ping / fps off");
checkping = false;
}
                }
            }));
            miscLayout.addView(doping);

            misc = new android.widget.PopupWindow(miscLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)misc.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      if(default1==false)misc.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
miscLayout1.setBackgroundDrawable(bg);
miscLayout1.setPadding(20,0,20,0);
            misc.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}
	    
var cheats = new styleButton();
cheats.setText("Online & offline mods");
if(getLanguage=="ko_KR")cheats.setText("온라인 모드");
cheats.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             cheat_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(cheats);
		
		function cheat_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var cheatLayout = new android.widget.LinearLayout(MainActivity);
            var cheatScroll = new android.widget.ScrollView(MainActivity);
            var cheatLayout1 = new android.widget.LinearLayout(MainActivity);
            cheatLayout.setOrientation(1);
            cheatLayout1.setOrientation(1);
            cheatScroll.addView(cheatLayout);
            cheatLayout1.addView(cheatScroll);
            
            var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             cheat.dismiss();
             showMenuBtn();
			}
		});
		cheatLayout.addView(exit);
		
		var combat1 = new android.widget.TextView(MainActivity);
            combat1.setText("Combat");
            combat1.setTextColor(android.graphics.Color.BLACK);
			var textviewBg = new android.graphics.drawable.GradientDrawable();
			textviewBg.setColor(android.graphics.Color.WHITE);
			combat1.setBackgroundDrawable(textviewBg);
            cheatLayout.addView(combat1);
			
			var killaura1 = new styleButton();
killaura1.setText("Player aim aura");
killaura1.setTextColor(android.graphics.Color.RED);
if(paimaura==true)killaura1.setTextColor(android.graphics.Color.GREEN);
            killaura1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             paimaura?paimaura=false:paimaura=true;
killaura1.setText("Player aim aura");
if(paimaura == true){
killaura1.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Player aim aura on");
/*
actually from dragop
android.widget.Toast.makeText(MainActivity, "Credit: Firepro9978 from flame client!", 1).show();*/
aimbot = true;
aimed = true;
paimaura = true;
}
if(paimaura == false){
killaura1.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Player aim aura off");
aimbot = false;
aimed = false;
paimaura = false;
}
                }
            }));
            cheatLayout.addView(killaura1);
	
	var killaura2 = new styleButton();
killaura2.setText("Mob aim aura");
killaura2.setTextColor(android.graphics.Color.RED);
if(maimaura==true)killaura2.setTextColor(android.graphics.Color.GREEN);
            killaura2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             maimaura?maimaura=false:maimaura=true;
killaura2.setText("Mob aim aura");
if(maimaura == true){
killaura2.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Mob aim aura on");
	/*
	actually from dragop aimaura but i split mobs into a different aura from aimaura
android.widget.Toast.makeText(MainActivity, "Credit: Firepro9978 from flame client!", 1).show();*/
aimbot2 = true;
aimed2 = true;
maimaura = true;
}
if(maimaura == false){
killaura2.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Mob aim aura off");
aimbot2 = false;
aimed2 = false;
maimaura = false;
}
                }
            }));
            cheatLayout.addView(killaura2);

var jhit = new styleButton();
jhit.setText("Hit'n'jump");
jhit.setTextColor(android.graphics.Color.RED);
if(hitJump==true)jhit.setTextColor(android.graphics.Color.GREEN);
            jhit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             hitJump?hitJump=false:hitJump=true;
jhit.setText("Hit'n'jump");
if(hitJump == true){
jhit.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Hit'n'jump on");

hitJump = true;
}
if(hitJump == false){
jhit.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Hit'n'jump off");

hitJump = false;
}
                }
            }));
            cheatLayout.addView(jhit);
			
var afkspawn = new styleButton();
afkspawn.setText("Low health action");
afkspawn.setTextColor(android.graphics.Color.RED);
if(lowhealth==true)afkspawn.setTextColor(android.graphics.Color.GREEN);
            afkspawn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             lowhealth?lowhealth=false:lowhealth=true;
afkspawn.setText("Low health action");
if(lowhealth == true){
afkspawn.setTextColor(android.graphics.Color.GREEN);
atact2();
cheat.dismiss();
lowhealth = true;
}
if(lowhealth == false){
afkspawn.setTextColor(android.graphics.Color.RED);

afkspawn = false;
}
                }
            }));
            cheatLayout.addView(afkspawn);
			
var atkact = new styleButton();
atkact.setText("Attack action");
atkact.setTextColor(android.graphics.Color.RED);
if(attackActions==true)atkact.setTextColor(android.graphics.Color.GREEN);
            atkact.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             attackActions?attackActions=false:attackActions=true;
atkact.setText("Attack action");
if(attackActions == true){
atkact.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Attack action on");
atact();
cheat.dismiss();
attackActions = true;
}
if(attackActions == false){
atkact.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Attack action off");

attackActions = false;
}
                }
            }));
            cheatLayout.addView(atkact);
	
	var bowbut = new styleButton();
bowbut.setText("Auto bow aim");
bowbut.setTextColor(android.graphics.Color.RED);
if(bowaura==true)bowbut.setTextColor(android.graphics.Color.GREEN);
            bowbut.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             bowaura?bowaura=false:bowaura=true;
bowbut.setText("Auto bow aim");
if(bowaura == true){
bowbut.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Auto bow aim on");
bowaura = true;
}
if(bowaura == false){
bowbut.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Auto bow aim off");
bowaura = false;
}
                }
            }));
            cheatLayout.addView(bowbut);
	
	var hitbutton = new styleButton();
hitbutton.setText("Hitbox increase");
hitbutton.setTextColor(android.graphics.Color.RED);
if(hitbox1==true)hitbutton.setTextColor(android.graphics.Color.GREEN);
            hitbutton.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             hitbox1?hitbox1=false:hitbox1=true;
hitbutton.setText("Hitbox increase");
if(hitbox1 == true){
hitbutton.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Hitbox increase on");
hitbox1 = true;
}
if(hitbox1 == false){
hitbutton.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Hitbox increase off");
	for(var i = 0; i < 5; i++){
		var ent = getNearestEntity3(aimrange + 2);
		if(ent != getPlayerEnt()){
		Entity.setCollisionSize(ent, 2, 1);
		}
	}
hitbox1 = false;
}
                }
            }));
            cheatLayout.addView(hitbutton);

	/*
	* WIP
	*
var gltrace1 = new styleButton();
gltrace1.setText("Player tracers");
gltrace1.setTextColor(android.graphics.Color.RED);
if(tracers1==true)gltrace1.setTextColor(android.graphics.Color.GREEN);
            gltrace1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tracers1?tracers1=false:tracers1=true;
gltrace1.setText("Player tracers");
if(tracers1 == true){
gltrace1.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Player tracers on");
		
tracers1 = true;
}
if(tracers1 == false){
gltrace1.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Player tracers off");
tracers1 = false;
}
                }
            }));
            cheatLayout.addView(gltrace1);
*/

/*
* WIP
*	
var asword = new styleButton();
asword.setText("Auto sword");
asword.setTextColor(android.graphics.Color.RED);
if(autosword==true)asword.setTextColor(android.graphics.Color.GREEN);
            asword.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             autosword?autosword=false:autosword=true;
asword.setText("Auto sword");
if(autosword == true){
asword.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Auto sword on");
autosword = true;
}
if(autosword == false){
asword.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Auto sword off");
autosword = false;
}
                }
            }));
            cheatLayout.addView(asword);
			*/
	
var nknock = new styleButton();
nknock.setText("No knockback");
nknock.setTextColor(android.graphics.Color.RED);
if(noknock==true)nknock.setTextColor(android.graphics.Color.GREEN);
            nknock.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             noknock?noknock=false:noknock=true;
nknock.setText("No knockback");
if(noknock == true){
nknock.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"No knockback on");
noknock = true;
}
if(noknock == false){
nknock.setTextColor(android.graphics.Color.RED);
clientMessage(client+"No knockback off");
noknock = false;
}
                }
            }));
            cheatLayout.addView(nknock);
			
			var hacks1 = new android.widget.TextView(MainActivity);
            hacks1.setText("Hacks");
            hacks1.setTextColor(android.graphics.Color.BLACK);
			var textviewBg = new android.graphics.drawable.GradientDrawable();
			textviewBg.setColor(android.graphics.Color.WHITE);
			hacks1.setBackgroundDrawable(textviewBg);
            cheatLayout.addView(hacks1);
			
var liquidhack = new styleButton();
liquidhack.setText("Walk on liquid");
liquidhack.setTextColor(android.graphics.Color.RED);
if(liquidwalk==true)liquidhack.setTextColor(android.graphics.Color.GREEN);
            liquidhack.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             liquidwalk?liquidwalk=false:liquidwalk=true;
liquidhack.setText("Walk on liquid");
if(liquidwalk == true){
liquidhack.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Walk on liquid on");
android.widget.Toast.makeText(MainActivity, "Credit: GodSoft029!", 1).show();
Block.setShape(8, 0, 0, 0, 1, 1, 1);
Block.setShape(9, 0, 0, 0, 1, 1, 1);
Block.setShape(10, 0, 0, 0, 1, 1, 1);
Block.setShape(11, 0, 0, 0, 1, 1, 1);
/*
*
* RIP Godsoft029's method
*
Block.defineBlock(8, "Water", [["still_water", 0]], 8, false, 4);
Block.defineBlock(9, "Stationary Water", [["still_water", 0]], 9, false, 4);
Block.defineBlock(10, "Lava", [["still_lava", 0]], 10, false, 4);
Block.defineBlock(11, "Stationary Lava", [["still_lava", 0]], 11, false, 4);
*/
liquidwalk = true;
}
if(liquidwalk == false){
liquidhack.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Walk on liquid off");
Block.setShape(8, null, null, null, null, null, null);
Block.setShape(9, null, null, null, null, null, null);
Block.setShape(10, null, null, null, null, null, null);
Block.setShape(11, null, null, null, null, null, null);
liquidwalk = false;
}
                }
            }));
            cheatLayout.addView(liquidhack);
            
            var creative = new styleButton();
            creative.setText("Creative");        
            creative.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(1);
                    Player.setCanFly(true);
clientMessage(client + "§7Your gamemode was updated to creative mode!");
                }
            }));
            cheatLayout.addView(creative);
            
            var survival = new styleButton();
            survival.setText("Survival");
            survival.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(0);
                    Player.setCanFly(false);
clientMessage(client + "§7Your gamemode was updated to survival mode!");
                }
            }));
            cheatLayout.addView(survival);
            
            var adventure = new styleButton();
            adventure.setText("Adventure");       
            adventure.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(2);
                    Player.setCanFly(false);
clientMessage(client + "§7Your gamemode was updated to adventure mode!");
                }
            }));
            cheatLayout.addView(adventure);
            
            var spectator = new styleButton();
            spectator.setText("Spectator");     
            spectator.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(3);
                    Player.setCanFly(true);
clientMessage(client + "§7Your gamemode was updated to spectator mode!");
                }
            }));
            cheatLayout.addView(spectator);
            
            var button6 = new styleButton();
button6.setText("Glide");
button6.setTextColor(android.graphics.Color.RED);
if(glide==true)button6.setTextColor(android.graphics.Color.GREEN);
            button6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             glide?glide=false:glide=true;
button6.setText("Glide");
if(glide == true){
button6.setTextColor(android.graphics.Color.GREEN);
android.widget.Toast.makeText(MainActivity, "Credit: Apric0cks from maximus mod!", 1).show();
glide = true;
}
if(glide == false){
button6.setTextColor(android.graphics.Color.RED);

glide = false;
}
                }
            }));
            cheatLayout.addView(button6);
            
            var walkonair = new styleButton();
walkonair.setText("Walk on air");
walkonair.setTextColor(android.graphics.Color.RED);
if(airwalk==true)walkonair.setTextColor(android.graphics.Color.GREEN);
            walkonair.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             airwalk?airwalk=false:airwalk=true;
walkonair.setText("Walk on air");
if(airwalk == true){
walkonair.setTextColor(android.graphics.Color.GREEN);
Block.setShape(95, 0, 0, 0, 1, 1, 1);
clientMessage(client + "You may get detected as flying becareful!")
airwalk = true;
}
if(airwalk == false){
walkonair.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Walk on air is off")
airwalk = false;
}
                }
            }));
            cheatLayout.addView(walkonair);
			
var button2 = new styleButton();
button2.setText("X-Ray");
button2.setTextColor(android.graphics.Color.RED);
if(xray==true)button2.setTextColor(android.graphics.Color.GREEN);
            button2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             xray?xray=false:xray=true;
button2.setText("X-Ray");
if(xray == true){
button2.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "You may crash!\nchange on/off fancy graphics for better view.\nAlso try relogging from the world.");

xray = true;
}
if(xray == false){
button2.setTextColor(android.graphics.Color.RED);
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
	
/*
* WIP
*
var rideall = new styleButton();
rideall.setText("Ride nearest");
rideall.setTextColor(android.graphics.Color.RED);
if(ridenear==true)rideall.setTextColor(android.graphics.Color.GREEN);
            rideall.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             ridenear?ridenear=false:ridenear=true;
rideall.setText("Ride nearest");
if(ridenear == true){
rideall.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Ride nearest on");
ridenear = true;
}
if(ridenear == false){
rideall.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Ride nearest off");
ridenear = false;
}
                }
            }));
            cheatLayout.addView(rideall);*/
            
            var speedup = new styleButton();
speedup.setText("No friction");
speedup.setTextColor(android.graphics.Color.RED);
if(changeSpeed==true)speedup.setTextColor(android.graphics.Color.GREEN);
            speedup.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             changeSpeed?changeSpeed=false:changeSpeed=true;
speedup.setText("No friction");
if(changeSpeed == true){
speedup.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "No friction on,\nThis adds no friction when you're on ice, soul sand etc");

changeSpeed = true;
}
if(changeSpeed == false){
speedup.setTextColor(android.graphics.Color.RED);
clientMessage(client + "No friction off");
Block.setShape(30, 0, 0, 0, 1, null, 1);
	Block.setFriction(79, 0.9800000190734863);
	Block.setFriction(267, 0.9800000190734863);
changeSpeed = false;
}
                }
            }));
            cheatLayout.addView(speedup);
			
var button8 = new styleButton();
button8.setText("Anti break");
button8.setTextColor(android.graphics.Color.RED);
if(block==true)button8.setTextColor(android.graphics.Color.GREEN);
            button8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             block?block=false:block=true;
button8.setText("Anti break");
if(block == true){
button8.setTextColor(android.graphics.Color.GREEN);
android.widget.Toast.makeText(MainActivity, "Credit: Johnmacrocraft!", 1).show();
block = true;
}
if(block == false){
button8.setTextColor(android.graphics.Color.RED);

block = false;
}
                }
            }));
            cheatLayout.addView(button8);
			
            var button10 = new styleButton();
button10.setText("Tap destroy");
button10.setTextColor(android.graphics.Color.RED);
if(tapdestroy==true)button10.setTextColor(android.graphics.Color.GREEN);
            button10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tapdestroy?tapdestroy=false:tapdestroy=true;
button10.setText("Tap destroy");
if(tapdestroy == true){
button10.setTextColor(android.graphics.Color.GREEN);

tapdestroy = true;
}
if(tapdestroy == false){
button10.setTextColor(android.graphics.Color.RED);

tapdestroy = false;
}
                }
            }));
            cheatLayout.addView(button10);
			
            var button11 = new styleButton();
button11.setText("Storage ESP");
button11.setTextColor(android.graphics.Color.RED);
if(chestesp==true)button11.setTextColor(android.graphics.Color.GREEN);
            button11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             chestesp?chestesp=false:chestesp=true;
button11.setText("Storage ESP");
if(chestesp == true){
button11.setTextColor(android.graphics.Color.GREEN);
android.widget.Toast.makeText(MainActivity, "Credit: Vertex Client team!", 1).show();
chestesp = true;
}
if(chestesp == false){
button11.setTextColor(android.graphics.Color.RED);

chestesp = false;
}
                }
            }));
            cheatLayout.addView(button11);
			
var button13 = new styleButton();
button13.setText("Auto destroy");
button13.setTextColor(android.graphics.Color.RED);
if(autodestroy2==true)button13.setTextColor(android.graphics.Color.GREEN);
            button13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
	autodestroy2?autodestroy2=false:autodestroy2=true;
button13.setText("Auto destroy");
if(autodestroy2 == true){
button13.setTextColor(android.graphics.Color.GREEN);
dig1();
cheat.dismiss();
autodestroy2 = true;
}
if(autodestroy2 == false){
button13.setTextColor(android.graphics.Color.RED);
autodestroy = false;
extraj = false;
autodestroy2 = false;
}
                }
            }));
            cheatLayout.addView(button13);
            
var nowall = new styleButton();
nowall.setText("No clip");
nowall.setTextColor(android.graphics.Color.RED);
if(noclip==true)nowall.setTextColor(android.graphics.Color.GREEN);
            nowall.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             noclip?noclip=false:noclip=true;
nowall.setText("No clip");
if(noclip == true){
nowall.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"No clip on");
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
nowall.setTextColor(android.graphics.Color.RED);
clientMessage(client+"No clip off");
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
			
            var barrier = new styleButton();
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
            
            var light = new styleButton();
light.setText("Brightness");
light.setTextColor(android.graphics.Color.RED);
if(brightness==true)light.setTextColor(android.graphics.Color.GREEN);
            light.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             brightness?brightness=false:brightness=true;
light.setText("Brightness");
if(brightness == true){
light.setTextColor(android.graphics.Color.GREEN);

brightness = true;
}
if(brightness == false){
light.setTextColor(android.graphics.Color.RED);

brightness = false;
}
                }
            }));
            cheatLayout.addView(light);
			
            var anti2void = new styleButton();
anti2void.setText("Anti void");
anti2void.setTextColor(android.graphics.Color.RED);
if(antivoid==true)anti2void.setTextColor(android.graphics.Color.GREEN);
            anti2void.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             antivoid?antivoid=false:antivoid=true;
anti2void.setText("Anti void");
if(antivoid == true){
anti2void.setTextColor(android.graphics.Color.GREEN);

antivoid = true;
}
if(antivoid == false){
anti2void.setTextColor(android.graphics.Color.RED);

antivoid = false;
}
                }
            }));
            cheatLayout.addView(anti2void);
			
var zmmm = new styleButton();
      zmmm.setText("Instant break");
zmmm.setTextColor(android.graphics.Color.RED);
if(instabreak==true)zmmm.setTextColor(android.graphics.Color.GREEN);
		zmmm.setOnClickListener(new android.view.View.OnClickListener() {
		 onClick: function(v){
 instabreak?instabreak=false:instabreak=true;
zmmm.setText("Instant break");
if(instabreak == true){
zmmm.setTextColor(android.graphics.Color.GREEN);
instaDestroy();
clientMessage(client + "§7Instant break is on");
}
if(instabreak == false){
zmmm.setTextColor(android.graphics.Color.RED);
clientMessage(client + "§7Instant break is off");
defaultDestroy();
                }
			}
		});
		cheatLayout.addView(zmmm);
		
		var tju = new styleButton();
tju.setText("Tap jump");
tju.setTextColor(android.graphics.Color.RED);
if(tapjump==true)tju.setTextColor(android.graphics.Color.GREEN);
            tju.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tapjump?tapjump=false:tapjump=true;
tju.setText("Tap jump");
if(tapjump == true){
tju.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Tap jump on\nTap ground to jump!");

tapjump = true;
}
if(tapjump == false){
tju.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Tap jump is off");

tapjump = false;
}
                }
            }));
            cheatLayout.addView(tju);
            
            var spiderman = new styleButton();
spiderman.setText("Spider");
spiderman.setTextColor(android.graphics.Color.RED);
if(spider==true)spiderman.setTextColor(android.graphics.Color.GREEN);
            spiderman.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             spider?spider=false:spider=true;
spiderman.setText("Spider");
if(spider == true){
spiderman.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Spider on");
android.widget.Toast.makeText(MainActivity, "Credit: Firepro9978 from VoidClient!", 1).show();
Utils.Player.isCollidedHorizontally();
spider = true;
}
if(spider == false){
spiderman.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Spider off");

spider = false;
}
                }
            }));
            cheatLayout.addView(spiderman);
            
            var jumps = new styleButton();
jumps.setText("Higher jumps");
jumps.setTextColor(android.graphics.Color.RED);
if(jump==true)jumps.setTextColor(android.graphics.Color.GREEN);
            jumps.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             jump?jump=false:jump=true;
jumps.setText("Higher jumps");
if(jump == true){
jumps.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Higher jumps on");

jump = true;
}
if(jump == false){
jumps.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Higher jumps off");

jump = false;
}
                }
            }));
            cheatLayout.addView(jumps);
            
            var autow = new styleButton();
autow.setText("Auto walk");
autow.setTextColor(android.graphics.Color.RED);
if(autowalk==true)autow.setTextColor(android.graphics.Color.GREEN);
            autow.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             autowalk?autowalk=false:autowalk=true;
autow.setText("Auto walk");
if(autowalk == true){
autow.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Auto walk on");

autowalk = true;
}
if(autowalk == false){
autow.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Auto walk off");

autowalk = false;
}
                }
            }));
            cheatLayout.addView(autow);
			
var twek = new styleButton();
twek.setText("Twerk");
twek.setTextColor(android.graphics.Color.RED);
if(twerk==true)twek.setTextColor(android.graphics.Color.GREEN);
            twek.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             twerk?twerk=false:twerk=true;
twek.setText("Twerk");
if(twerk == true){
twek.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Auto twerk on");

twerk = true;
}
if(twerk == false){
twek.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Auto twerk off");

twerk = false;
}
                }
            }));
            cheatLayout.addView(twek);

var taura = new styleButton();
taura.setText("TP Aura");
taura.setTextColor(android.graphics.Color.RED);
if(tpAura==true)taura.setTextColor(android.graphics.Color.GREEN);
            taura.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tpAura?tpAura=false:tpAura=true;
taura.setText("TP Aura");
if(tpAura == true){
taura.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "TP Aura on");
android.widget.Toast.makeText(MainActivity, "Credit: Apric0cks for the idea!", 1).show();

tpAura = true;
}
if(tpAura == false){
taura.setTextColor(android.graphics.Color.RED);
clientMessage(client + "TP Aura off");

tpAura = false;
}
                }
            }));
            cheatLayout.addView(taura);
			
var butfuon2 = new styleButton();
butfuon2.setText("Bunny hop");
butfuon2.setTextColor(android.graphics.Color.RED);
if(bhop==true)butfuon2.setTextColor(android.graphics.Color.GREEN);
            butfuon2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             bhop?bhop=false:bhop=true;
butfuon2.setText("Bunny hop");
if(bhop== true){
butfuon2.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Bunny hop on");
	android.widget.Toast.makeText(MainActivity, "Credit: Apric0cks from maximus mod!", 1).show();
bhop= true;
}
if(bhop== false){
butfuon2.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Bunny hop off");
bhop= false;
}
                }
            }));
            cheatLayout.addView(butfuon2);
			
var walkonice = new styleButton();
walkonice.setText("Ice walk");
walkonice.setTextColor(android.graphics.Color.RED);
if(icewalk==true)walkonice.setTextColor(android.graphics.Color.GREEN);
            walkonice.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             icewalk?icewalk=false:icewalk=true;
walkonice.setText("Ice walk");
if(icewalk == true){
walkonice.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "You may get detected as flying becareful!")
icewalk = true;
}
if(icewalk == false){
walkonice.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Ice walk is off")
icewalk = false;
}
                }
            }));
            cheatLayout.addView(walkonice);

var frictme = new styleButton();
frictme.setText("Only friction");
frictme.setTextColor(android.graphics.Color.RED);
if(onfriction==true)frictme.setTextColor(android.graphics.Color.GREEN);
            frictme.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             onfriction?onfriction=false:onfriction=true;
frictme.setText("Only friction");
if(onfriction == true){
frictme.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Only friction on");

onfriction = true;
}
if(onfriction == false){
frictme.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Only friction off");
for(var i = 0; i < 100; i++){
Block.setFriction(i, 0.6000000238418579);
}
	Block.setFriction(79, 0.9800000190734863);
	Block.setFriction(267, 0.9800000190734863);
onfriction = false;
}
                }
            }));
            cheatLayout.addView(frictme);
			
			var misc1 = new android.widget.TextView(MainActivity);
            misc1.setText("Misc");
            misc1.setTextColor(android.graphics.Color.BLACK);
			var textviewBg = new android.graphics.drawable.GradientDrawable();
			textviewBg.setColor(android.graphics.Color.WHITE);
			misc1.setBackgroundDrawable(textviewBg);
            cheatLayout.addView(misc1);
			
var bypass1 = new styleButton();
bypass1.setText("Anti-spam bypass");
bypass1.setTextColor(android.graphics.Color.RED);
if(antispam2==true)bypass1.setTextColor(android.graphics.Color.GREEN);
            bypass1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             antispam2?antispam2=false:antispam2=true;
bypass1.setText("Anti-spam bypass");
if(antispam2 == true){
bypass1.setTextColor(android.graphics.Color.GREEN);
spa2();
cheat.dismiss();
antispam2 = true;
}
if(antispam2 == false){
bypass1.setTextColor(android.graphics.Color.RED);
antispam = false;
antispam2 = false;
}
                }
            }));
            cheatLayout.addView(bypass1);
			
	    var button9 = new styleButton();
button9.setText("Tap spam");
button9.setTextColor(android.graphics.Color.RED);
if(tapspam==true)button9.setTextColor(android.graphics.Color.GREEN);
            button9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tapspam?tapspam=false:tapspam=true;
button9.setText("Tap spam");
if(tapspam == true){
button9.setTextColor(android.graphics.Color.GREEN);
spa();
cheat.dismiss();
tapspam = true;
}
if(tapspam == false){
button9.setTextColor(android.graphics.Color.RED);
autospam = false;
autospam2 = false;
tapspam = false;
}
                }
            }));
            cheatLayout.addView(button9);

			
var button12 = new styleButton();
button12.setText("Auto spam");
button12.setTextColor(android.graphics.Color.RED);
if(autospam2==true)button12.setTextColor(android.graphics.Color.GREEN);
            button12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
	autospam2?autospam2=false:autospam2=true;
button12.setText("Auto spam");
if(autospam2==true){
button12.setTextColor(android.graphics.Color.GREEN);
spa();
cheat.dismiss();
autospam2= true;
}
if(autospam2==false){
button12.setTextColor(android.graphics.Color.RED);
autospam = false;
autospam2= false;
}
                }
            }));
            cheatLayout.addView(button12);

var info = new styleButton();
            info.setText("Game info");
            info.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    infoView();
                    
		    cheat.dismiss();
		    
		    android.widget.Toast.makeText(MainActivity, "Scroll down", 1).show();
                }
            }));
            cheatLayout.addView(info);

var autore1 = new styleButton();
autore1.setText("Auto reply (yee)");
autore1.setTextColor(android.graphics.Color.RED);
if(autoply1==true)autore1.setTextColor(android.graphics.Color.GREEN);
            autore1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             autoply1?autoply1=false:autoply1=true;
autore1.setText("Auto reply (yee)");
if(autoply1 == true){
autore1.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Auto reply (yee) on");
autoply1 = true;
}
if(autoply1 == false){
autore1.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Auto reply (yee) off");
autoply1 = false;
}
                }
            }));
            cheatLayout.addView(autore1);

var svr = new styleButton();
            svr.setText("Server IP:Port");
            svr.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage(client + "§lIP:§r " + Server.getAddress() + " §lPort:§r " + Server.getPort());
			/*no need to do anything with this, it shows server IP:Port anyways incase the user is on a realm.*/
if(Server.getAddress()=="null" || Server.getPort()=="0")clientMessage(client + "You are not on a server!");
                }
            }));
            cheatLayout.addView(svr);
	
	var butfuon1 = new styleButton();
butfuon1.setText("Item indicator");
butfuon1.setTextColor(android.graphics.Color.RED);
if(itemIndi==true)butfuon1.setTextColor(android.graphics.Color.GREEN);
            butfuon1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             itemIndi?itemIndi=false:itemIndi=true;
butfuon1.setText("Item indicator");
if(itemIndi== true){
butfuon1.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Item info on");
itemIndi= true;
}
if(itemIndi== false){
butfuon1.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Item info off");
itemIndi= false;
}
                }
            }));
            cheatLayout.addView(butfuon1);
	    
	    var button4 = new styleButton();
button4.setText("Armor indicator");
button4.setTextColor(android.graphics.Color.RED);
if(armor==true)button4.setTextColor(android.graphics.Color.GREEN);
            button4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             armor?armor=false:armor=true;
button4.setText("Armor indicator");
if(armor == true){
button4.setTextColor(android.graphics.Color.GREEN);
if(coords==true)coords==false;
if(yawpitch==true)yawpitch==false;
if(getvel==true)getvel==false;
armor = true;
}
if(armor == false){
button4.setTextColor(android.graphics.Color.RED);

armor = false;
}
                }
            }));
            cheatLayout.addView(button4);
            
            var button5 = new styleButton();
button5.setText("Coordinates");
button5.setTextColor(android.graphics.Color.RED);
if(coords==true)button5.setTextColor(android.graphics.Color.GREEN);
            button5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             coords?coords=false:coords=true;
button5.setText("Coordinates");
if(coords == true){
button5.setTextColor(android.graphics.Color.GREEN);
if(armor==true)armor==false;
if(yawpitch==true)yawpitch==false;
if(getvel==true)getvel==false;
coords = true;
}
if(coords == false){
button5.setTextColor(android.graphics.Color.RED);

coords = false;
}
                }
            }));
            cheatLayout.addView(button5);

var srent = new styleButton();
srent.setText("Entity indicator");
srent.setTextColor(android.graphics.Color.RED);
if(entind==true)srent.setTextColor(android.graphics.Color.GREEN);
            srent.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             entind?entind=false:entind=true;
srent.setText("Entity indicator");
if(entind == true){
srent.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Entity indicator on\nThis shows you which entity/player/mob has been spawned or removed.");
entind = true;
}
if(entind == false){
srent.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Entity indicator off");
entind = false;
}
                }
            }));
            cheatLayout.addView(srent);

var dropsin = new styleButton();
dropsin.setText("Drops indicator");
dropsin.setTextColor(android.graphics.Color.RED);
if(dropind==true)dropsin.setTextColor(android.graphics.Color.GREEN);
            dropsin.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             dropind?dropind=false:dropind=true;
dropsin.setText("Drops indicator");
if(dropind == true){
dropsin.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Drops indicator on\nThis shows you item drops that has been spawned or removed.");
dropind = true;
}
if(dropind == false){
dropsin.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Drops indicator off");
dropind = false;
}
                }
            }));
            cheatLayout.addView(dropsin);
            
            var seevel = new styleButton();
seevel.setText("Velocity indicator");
seevel.setTextColor(android.graphics.Color.RED);
if(getvel==true)seevel.setTextColor(android.graphics.Color.GREEN);
            seevel.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             getvel?getvel=false:getvel=true;
seevel.setText("Velocity indicator");
if(getvel == true){
seevel.setTextColor(android.graphics.Color.GREEN);
if(yawpitch==true)yawpitch==false;
if(armor==true)armor==false;
if(coords==true)coords==false;
getvel = true;
}
if(getvel == false){
seevel.setTextColor(android.graphics.Color.RED);

getvel = false;
}
                }
            }));
            cheatLayout.addView(seevel);
            
            var seeyaw = new styleButton();
seeyaw.setText("Pitch & yaw");
seeyaw.setTextColor(android.graphics.Color.RED);
if(yawpitch==true)seeyaw.setTextColor(android.graphics.Color.GREEN);
            seeyaw.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             yawpitch?yawpitch=false:yawpitch=true;
seeyaw.setText("Pitch & yaw");
if(yawpitch == true){
seeyaw.setTextColor(android.graphics.Color.GREEN);
if(getvel==true)getvel==false;
if(armor==true)armor==false;
if(coords==true)coords==false;
yawpitch = true;
}
if(yawpitch == false){
seeyaw.setTextColor(android.graphics.Color.RED);

yawpitch = false;
}
                }
            }));
            cheatLayout.addView(seeyaw);
            
            var button7 = new styleButton();
button7.setText("Text to toast");
button7.setTextColor(android.graphics.Color.RED);
if(ttot==true)button7.setTextColor(android.graphics.Color.GREEN);
            button7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             ttot?ttot=false:ttot=true;
button7.setText("Text to toast");
if(ttot == true){
button7.setTextColor(android.graphics.Color.GREEN);

ttot = true;
}
if(ttot == false){
button7.setTextColor(android.graphics.Color.RED);

ttot = false;
}
                }
            }));
            cheatLayout.addView(button7);
			
            var taptoid = new styleButton();
taptoid.setText("Tap block for ID");
taptoid.setTextColor(android.graphics.Color.RED);
if(tapid==true)taptoid.setTextColor(android.graphics.Color.GREEN);
            taptoid.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tapid?tapid=false:tapid=true;
taptoid.setText("Tap block for ID");
if(tapid == true){
taptoid.setTextColor(android.graphics.Color.GREEN);

tapid = true;
}
if(tapid == false){
taptoid.setTextColor(android.graphics.Color.RED);

tapid = false;
}
                }
            }));
            cheatLayout.addView(taptoid);
			
            var online = new styleButton();
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
			
            var ecd = new styleButton();
            ecd.setText("Easy commands");       
            ecd.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
             cmd_menu();
             cheat.dismiss();
                }
            }));
            cheatLayout.addView(ecd);
            
            function cmd_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var cmdLayout = new android.widget.LinearLayout(MainActivity);
            var cmdScroll = new android.widget.ScrollView(MainActivity);
            var cmdLayout1 = new android.widget.LinearLayout(MainActivity);
            cmdLayout.setOrientation(1);
            cmdLayout1.setOrientation(1);
            cmdScroll.addView(cmdLayout);
            cmdLayout1.addView(cmdScroll);
            
            var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             cmd.dismiss();
             showMenuBtn();
			}
		});
		cmdLayout.addView(exit);
		
		var cmd1 = new styleButton();
		cmd1.setText("Creative");
		cmd1.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
			if(Server.getPort() != 0){
				Server.sendChat("./gamemode 1");
				Server.sendChat("./gamemode creative");
				android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
			if(Server.getPort() == 0){
				Server.sendChat("/gamemode 1 @p");
				Server.sendChat("/gamemode creative @p");
				android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
			}
		});
		cmdLayout.addView(cmd1);
					 
		var cmd2 = new styleButton();
		cmd2.setText("Survival");
		cmd2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
						   if(Server.getPort() != 0){
				Server.sendChat("./gamemode 0");
				Server.sendChat("./gamemode survival");
				android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
						  }
						  if(Server.getPort() == 0){
				clientMessage("/gamemode 0 @p");
				clientMessage("/gamemode survival @p");
				android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
}
			}
		});
		cmdLayout.addView(cmd2);
		
		var cmd3 = new styleButton();
		cmd3.setText("Adventure");
		cmd3.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
			if(Server.getPort() != 0){
				Server.sendChat("./gamemode 2");
				Server.sendChat("./gamemode adventure");
				android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
			if(Server.getPort() == 0){
				clientMessage("/gamemode 2 @p");
				clientMessage("/gamemode adventure @p");
				android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
			}
		});
		cmdLayout.addView(cmd3);
		
		var cmd4 = new styleButton();
		cmd4.setText("Spectator");
		cmd4.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
			if(Server.getPort() != 0){
				Server.sendChat("./gamemode 3");
				Server.sendChat("./gamemode spectator");
				android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
			if(Server.getPort() == 0){
				clientMessage("/gamemode 3 @p");
				clientMessage("/gamemode spectator @p");
				android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
			}
		});
		cmdLayout.addView(cmd4);
		
		var cmd5 = new styleButton();
		cmd5.setText("List");
		cmd5.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
			if(Server.getPort != 0){
				Server.sendChat("./list");
				android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
			if(Server.getPort() == 0){
				clientMessage("/list");
				android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
			}
		});
		cmdLayout.addView(cmd5);
		
	    var opp = new styleButton();
            opp.setText("OP perm (Not hack)");        
            opp.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
Server.sendChat("./setuperm " + Player.getName(Player.getEntity()) + space + perm);
Server.sendChat("./setuperm " + Player.getName(Player.getEntity()) + space + perm);
android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			clientMessage(client + "gives you permanent op if you were op before, if server closes you can op yourself instead of losing it after server closes.");
                }
            }));
            cmdLayout.addView(opp);
			
	var vpl = new styleButton();
            vpl.setText("View plugins");        
            vpl.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
Server.sendChat("./ver a");
Server.sendChat("./ver b");
android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(vpl);
            
            var a1 = new styleButton();
            a1.setText("Time: 6:00am");
            a1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){   
			clientMessage("/time set 0");
Server.sendChat("./time set 0");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a1);

var a2 = new styleButton();
            a2.setText("Time: 7:00am");
            a2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 1000");
Server.sendChat("./time set 1000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a2);

var a3 = new styleButton();
            a3.setText("Time: 8:00am");
            a3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 2000");
Server.sendChat("./time set 2000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a3);

var a4 = new styleButton();
            a4.setText("Time: 9:00am");
            a4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 3000");
Server.sendChat("./time set 3000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a4);

var a5 = new styleButton();
            a5.setText("Time: 10:00am");
            a5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 4000");
Server.sendChat("./time set 4000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a5);

var a6 = new styleButton();
            a6.setText("Time: 11:00am");
            a6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 5000");
Server.sendChat("./time set 5000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a6);

var a7 = new styleButton();
            a7.setText("Time: 12:00pm");
            a7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 6000");
Server.sendChat("./time set 6000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a7);

var a8 = new styleButton();
            a8.setText("Time: 1:00pm");
            a8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 7000");
Server.sendChat("./time set 7000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a8);

var a9 = new styleButton();
            a9.setText("Time: 2:00pm");
            a9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 8000");
Server.sendChat("./time set 8000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a9);

var a10 = new styleButton();
            a10.setText("Time: 3:00pm");
            a10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 9000");
Server.sendChat("./time set 9000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a10);

var a11 = new styleButton();
            a11.setText("Time: 4:00pm");
            a11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 10000");
Server.sendChat("./time set 10000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a11);

var a12 = new styleButton();
            a12.setText("Time: 5:00pm");
            a12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 11000");
Server.sendChat("./time set 11000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a12);

var a13 = new styleButton();
            a13.setText("Time: 6:00pm");
            a13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 12000");
Server.sendChat("./time set 12000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a13);

var a14 = new styleButton();
            a14.setText("Time: 7:00pm");
            a14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 13000");
Server.sendChat("./time set 13000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a14);

var a15 = new styleButton();
            a15.setText("Time: 8:00pm");
            a15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 14000");
Server.sendChat("./time set 14000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a15);

var a16 = new styleButton();
            a16.setText("Time: 9:00pm");
            a16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 15000");
Server.sendChat("./time set 15000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a16);

var a17 = new styleButton();
            a17.setText("Time: 10:00pm");
            a17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 16000");
Server.sendChat("./time set 16000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a17);

var a18 = new styleButton();
            a18.setText("Time: 11:00pm");
            a18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 17000");
Server.sendChat("./time set 17000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a18);

var a19 = new styleButton();
            a19.setText("Time: 12:00am");
            
            a19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 18000");
Server.sendChat("./time set 18000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a19);

var a20 = new styleButton();
            a20.setText("Time: 1:00am");
            a20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 19000");
Server.sendChat("./time set 19000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a20);

var a21 = new styleButton();
            a21.setText("Time: 2:00am");
            a21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 20000");
Server.sendChat("./time set 20000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a21);

var a22 = new styleButton();
            a22.setText("Time: 3:00am");
            a22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 21000");
Server.sendChat("./time set 21000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a22);

var a23 = new styleButton();
            a23.setText("Time: 4:00am");
            a23.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 22000");
Server.sendChat("./time set 22000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a23);

var a24 = new styleButton();
            a24.setText("Time: 5:00am");          
            a24.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
			clientMessage("/time set 23000");
Server.sendChat("./time set 23000");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
                }
            }));
            cmdLayout.addView(a24);

var rainy = new styleButton();
            rainy.setText("Weather rain");
            rainy.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
			if(Server.getPort() != 0){
Server.sendChat("./weather rain");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
			if(Server.getPort() == 0){
			clientMessage("/weather rain");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
                }
            }));
            cmdLayout.addView(rainy);
			
var clearain = new styleButton();
            clearain.setText("Weather clear");
            clearain.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
			if(Server.getPort() != 0){
Server.sendChat("./weather clear");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
			if(Server.getPort() == 0){
			clientMessage("/weather clear");
			android.widget.Toast.makeText(MainActivity, "Command has been sent.", 1).show();
			}
                }
            }));
            cmdLayout.addView(clearain);
            
            cmd = new android.widget.PopupWindow(cmdLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            cmd.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
cmdLayout1.setBackgroundDrawable(bg);
cmdLayout1.setPadding(20,0,20,0);
            cmd.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}

            var xz = new styleButton();
            xz.setText("Other XYZ");
            xz.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    XYZView();
                    
		    cheat.dismiss();
		    
		    android.widget.Toast.makeText(MainActivity, "Scroll down", 1).show();
                }
            }));
            cheatLayout.addView(xz);
            
            function XYZView(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var XYZLayout = new android.widget.LinearLayout(MainActivity);
            
            var XYZScroll = new android.widget.ScrollView(MainActivity);
            
            var XYZLayout1 = new android.widget.LinearLayout(MainActivity);
            XYZLayout.setOrientation(1);
            XYZLayout1.setOrientation(1);
            
            XYZScroll.addView(XYZLayout);
            XYZLayout1.addView(XYZScroll);

var exit = new styleButton();
            exit.setText("Exit");
exit.setTextColor(android.graphics.Color.RED);
            exit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){

                XYZ.dismiss();

		showMenuBtn();
                }
            }));
            XYZLayout.addView(exit);
			
            var refresh = new styleButton();
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
			
			var xyZ_title = new android.widget.TextView(MainActivity);
            xyZ_title.setTextSize(15);
	    xyZ_title.setText("Showing 5 players XYZ:");
            xyZ_title.setTextColor(android.graphics.Color.WHITE);
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
	    var xyZ_show = new android.widget.TextView(MainActivity);
            xyZ_show.setTextSize(15);
	    xyZ_show.setText(names[0]+"\n"+Math.round(x0)+" "+Math.round(y0)+" "+Math.round(z0)+"\n"+names[1]+"\n"+Math.round(x1)+" "+Math.round(y1)+" "+Math.round(z1)+"\n"+names[2]+"\n"+Math.round(x2)+" "+Math.round(y2)+" "+Math.round(z2)+"\n"+names[3]+"\n"+Math.round(x3)+" "+Math.round(y3)+" "+Math.round(z3)+"\n"+names[4]+"\n"+Math.round(x4)+" "+Math.round(y4)+" "+Math.round(z4)+"\n"+names[5]+"\n"+Math.round(x5)+" "+Math.round(y5)+" "+Math.round(z5)+"\n");
            xyZ_show.setTextColor(android.graphics.Color.YELLOW);
            XYZLayout.addView(xyZ_show);
			
XYZ = new android.widget.PopupWindow(XYZLayout1, dip2px(500), dip2px(500));

XYZ = new android.widget.PopupWindow(XYZLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/2, MainActivity.getWindowManager().getDefaultDisplay().getHeight()/1);
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
XYZLayout1.setBackgroundDrawable(bg);
XYZLayout1.setPadding(20,0,20,0);
XYZ.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
            XYZ.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}

var nameit = new styleButton();
nameit.setText("Mob nametags");
nameit.setTextColor(android.graphics.Color.RED);
if(nametags==true)nameit.setTextColor(android.graphics.Color.GREEN);
            nameit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             nametags?nametags=false:nametags=true;
nameit.setText("Mob nametags");
if(nametags == true){
nameit.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Mob nametags on");

nametags = true;
}
if(nametags == false){
nameit.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Mob nametags off");

nametags = false;
}
                }
            }));
            cheatLayout.addView(nameit);
			
var keeps = new styleButton();
keeps.setText("Keep hotbar");
keeps.setTextColor(android.graphics.Color.RED);
if(keepHotbar==true)keeps.setTextColor(android.graphics.Color.GREEN);
            keeps.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             keepHotbar?keepHotbar=false:keepHotbar=true;
keeps.setText("Keep hotbar");
if(keepHotbar == true){
keeps.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Keep hotbar on, \nThis allows you to keep holding an item so it does not fall out of your hotbar.");

keepHotbar = true;
}
if(keepHotbar == false){
keeps.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Keep hotbar off");

keepHotbar = false;
}
                }
            }));
            cheatLayout.addView(keeps);
			
var butfuon3 = new styleButton();
butfuon3.setText("Alpha Text");
butfuon3.setTextColor(android.graphics.Color.RED);
if(alphatext==true)butfuon3.setTextColor(android.graphics.Color.GREEN);
            butfuon3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             alphatext?alphatext=false:alphatext=true;
butfuon3.setText("Alpha Text");
if(alphatext== true){
butfuon3.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"AlphaText on, send a message in chat!");
alphatext= true;
}
if(alphatext== false){
butfuon3.setTextColor(android.graphics.Color.RED);
clientMessage(client+"AlphaText off");
alphatext= false;
}
                }
            }));
            cheatLayout.addView(butfuon3);

var butfuon4 = new styleButton();
butfuon4.setText("Binary text");
butfuon4.setTextColor(android.graphics.Color.RED);
if(binarytext==true)butfuon4.setTextColor(android.graphics.Color.GREEN);
            butfuon4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             binarytext?binarytext=false:binarytext=true;
butfuon4.setText("Binary text");
if(binarytext == true){
butfuon4.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Binary text on");
binarytext = true;
}
if(binarytext == false){
butfuon4.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Binary text off");
binarytext = false;
}
                }
            }));
            cheatLayout.addView(butfuon4);

var butfuon5 = new styleButton();
butfuon5.setText("Zalgo text");
butfuon5.setTextColor(android.graphics.Color.RED);
if(zalgotext==true)butfuon5.setTextColor(android.graphics.Color.GREEN);
            butfuon5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             zalgotext?zalgotext=false:zalgotext=true;
butfuon5.setText("Zalgo text");
if(zalgotext == true){
butfuon5.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Zalgo text on");
zalgotext = true;
}
if(zalgotext == false){
butfuon5.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Zalgo text off");
zalgotext = false;
}
                }
            }));
            cheatLayout.addView(butfuon5);

var butfuon6 = new styleButton();
butfuon6.setText("Strike text");
butfuon6.setTextColor(android.graphics.Color.RED);
if(striketext==true)butfuon6.setTextColor(android.graphics.Color.GREEN);
            butfuon6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             striketext?striketext=false:striketext=true;
butfuon6.setText("Strike text");
if(striketext == true){
butfuon6.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Strike text on");
striketext = true;
}
if(striketext == false){
butfuon6.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Strike text off");
striketext = false;
}
                }
            }));
            cheatLayout.addView(butfuon6);

var butfuon8 = new styleButton();
butfuon8.setText("Prevent same message");
butfuon8.setTextColor(android.graphics.Color.RED);
if(preventsame==true)butfuon8.setTextColor(android.graphics.Color.GREEN);
            butfuon8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             preventsame?preventsame=false:preventsame=true;
butfuon8.setText("Prevent same message");
if(preventsame == true){
butfuon8.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Prevent same message on,\nyou can now bypass ChatDefender");
preventsame = true;
}
if(preventsame == false){
butfuon8.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Prevent same message off");
preventsame = false;
}
                }
            }));       
            cheatLayout.addView(butfuon8);


var cc = new styleButton();
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
            cheatLayout.addView(cc);

var ui = new styleButton();
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
            cheatLayout.addView(ui);

var fovy = new styleButton();
            fovy.setText("Fov editor");        
            fovy.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 

fov();
cheat.dismiss();
                }
            }));
            cheatLayout.addView(fovy);
			
		var sbn = new styleButton();
            sbn.setText("Set block brightness");        
            sbn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
block1(); 
cheat.dismiss();

                }
            }));
            cheatLayout.addView(sbn);

var info2 = new styleButton();
info2.setText("Faced player info");
info2.setTextColor(android.graphics.Color.RED);
if(facedInfo==true)info2.setTextColor(android.graphics.Color.GREEN);
            info2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             facedInfo?facedInfo=false:facedInfo=true;
info2.setText("Faced player info");
if(facedInfo == true){
info2.setTextColor(android.graphics.Color.GREEN);
	clientMessage(client + "Face the player to see info!");

facedInfo = true;
}
if(facedInfo == false){
info2.setTextColor(android.graphics.Color.RED);

facedInfo = false;
}
                }
            }));
            cheatLayout.addView(info2);
			
var info3 = new styleButton();
info3.setText("Faced mob info");
info3.setTextColor(android.graphics.Color.RED);
if(facedInfo2==true)info3.setTextColor(android.graphics.Color.GREEN);
            info3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             facedInfo2?facedInfo2=false:facedInfo2=true;
info3.setText("Faced mob info");
if(facedInfo2 == true){
info3.setTextColor(android.graphics.Color.GREEN);
	clientMessage(client + "Face the mob to see info!");

facedInfo2 = true;
}
if(facedInfo2 == false){
info3.setTextColor(android.graphics.Color.RED);

facedInfo2 = false;
}
                }
            }));
            cheatLayout.addView(info3);
			
var stap1 = new styleButton();
            stap1.setText("Send to all");        
            stap1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
sendEtc(); 
cheat.dismiss();

                }
            }));
            cheatLayout.addView(stap1);

var censor = new styleButton();
censor.setText("Swear censor bypass");
censor.setTextColor(android.graphics.Color.RED);
if(censorbypass==true)censor.setTextColor(android.graphics.Color.GREEN);
            censor.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             censorbypass?censorbypass=false:censorbypass=true;
censor.setText("Swear censor bypass");
if(censorbypass == true){
censor.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Swear censor bypass on");
censorbypass = true;
}
if(censorbypass == false){
censor.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Swear censor bypass off");
censorbypass = false;
}
                }
            }));
            cheatLayout.addView(censor);

	/*
*
*TODO: (IMPROVE) food checking
*
*
var fe1 = new styleButton();
fe1.setText("Fast eat");
fe1.setTextColor(android.graphics.Color.RED);
if(fasteat==true)fe1.setTextColor(android.graphics.Color.GREEN);
            fe1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             fasteat?fasteat=false:fasteat=true;
fe1.setText("Fast eat");
if(fasteat == true){
fe1.setTextColor(android.graphics.Color.GREEN);

fasteat = true;
}
if(fasteat == false){
fe1.setTextColor(android.graphics.Color.RED);

fasteat = false;
}
                }
            }));
            cheatLayout.addView(fe1);
	    */
/*var oreTrace = new styleButton();
oreTrace.setText("Ore ESP");
oreTrace.setTextColor(android.graphics.Color.RED);
if(oreEsp2==true)oreTrace.setTextColor(android.graphics.Color.GREEN);
            oreTrace.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             oreEsp2?oreEsp2=false:oreEsp2=true;
oreTrace.setText("Ore ESP");
if(oreEsp2 == true){
oreTrace.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Ore ESP on");
oreDialog();
oreEsp2 = true;
}
if(oreEsp2 == false){
oreTrace.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Ore ESP off");
oreEsp = false;
oreEsp2 = false;
}
                }
            }));
            cheatLayout.addView(oreTrace);
			
var playerTracer = new styleButton();
playerTracer.setText("Player ESP");
playerTracer.setTextColor(android.graphics.Color.RED);
if(playeresp==true)playerTracer.setTextColor(android.graphics.Color.GREEN);
            playerTracer.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             playeresp?playeresp=false:playeresp=true;
playerTracer.setText("Player ESP");
if(playeresp == true){
playerTracer.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Player esp on");

playeresp = true;
}
if(playeresp == false){
playerTracer.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Player esp off");

playeresp = false;
}
                }
            }));
            cheatLayout.addView(playerTracer);*/
/*
*
*TODO Better hit behind handle
*
*
var hitme = new styleButton();
hitme.setText("Hit behind");
hitme.setTextColor(android.graphics.Color.RED);
if(hitBehind==true)hitme.setTextColor(android.graphics.Color.GREEN);
            hitme.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             hitBehind?hitBehind=false:hitBehind=true;
hitme.setText("Hit behind");
if(hitBehind == true){
hitme.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Hit behind on");

hitBehind = true;
}
if(hitBehind == false){
hitme.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Hit behind off");

hitBehind = false;
}
                }
            }));
            cheatLayout.addView(hitme);
	    */

var screnid = new styleButton();
screnid.setText("Screen indicator");
screnid.setTextColor(android.graphics.Color.RED);
if(screenind==true)screnid.setTextColor(android.graphics.Color.GREEN);
            screnid.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             screenind?screenind=false:screenind=true;
screnid.setText("Screen indicator");
if(screenind == true){
screnid.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Screen indicator on");
screenind = true;
}
if(screenind == false){
screnid.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Screen indicator off");
screenind = false;
}
                }
            }));
            cheatLayout.addView(screnid);

var destroyy = new styleButton();
destroyy.setText("Destroy indicator");
destroyy.setTextColor(android.graphics.Color.RED);
if(destroyind==true)destroyy.setTextColor(android.graphics.Color.GREEN);
            destroyy.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             destroyind?destroyind=false:destroyind=true;
destroyy.setText("Destroy indicator");
if(destroyind == true){
destroyy.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Destroy indicator on");
destroyind = true;
}
if(destroyind == false){
destroyy.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Destroy indicator off");
destroyind = false;
}
                }
            }));
            cheatLayout.addView(destroyy);
 
var exit2 = new styleButton();
		exit2.setText("Exit");
		exit2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             cheat.dismiss();
             showMenuBtn();
			}
		});
		cheatLayout.addView(exit2);
            
            cheat = new android.widget.PopupWindow(cheatLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)cheat.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      if(default1==false)cheat.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
cheatLayout1.setBackgroundDrawable(bg);
cheatLayout1.setPadding(20,0,20,0);
            cheat.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}
            
var mods = new styleButton();
mods.setText("Single player mods");
if(getLanguage=="ko_KR")mods.setText("오프라인 모드");
mods.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             mod_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(mods);
		
		function mod_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var modLayout = new android.widget.LinearLayout(MainActivity);
            var modScroll = new android.widget.ScrollView(MainActivity);
            var modLayout1 = new android.widget.LinearLayout(MainActivity);
            modLayout.setOrientation(1);
            modLayout1.setOrientation(1);
            modScroll.addView(modLayout);
            modLayout1.addView(modScroll);
            
            var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             mod.dismiss();
             showMenuBtn();
			}
		});
		modLayout.addView(exit);
		
		var endHack = new styleButton();
endHack.setText("End portal");
            endHack.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
				/*front*/
				Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ() -4, 120, 4);
				Level.setTile(getPlayerX() -1, getPlayerY() -1, getPlayerZ() -4, 120, 4);
				Level.setTile(getPlayerX() +1, getPlayerY() -1, getPlayerZ() -4, 120, 4);
				Level.setTile(getPlayerX() -2, getPlayerY() -1, getPlayerZ() -4, 0, 0);
				Level.setTile(getPlayerX() +2, getPlayerY() -1, getPlayerZ() -4, 0, 0);
			/*middle*/
			Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ() -5, 119, 0);
				Level.setTile(getPlayerX() -1, getPlayerY() -1, getPlayerZ() -5, 119, 0);
				Level.setTile(getPlayerX() +1, getPlayerY() -1, getPlayerZ() -5, 119, 0);
				Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ() -6, 119, 0);
				Level.setTile(getPlayerX() -1, getPlayerY() -1, getPlayerZ() -6, 119, 0);
				Level.setTile(getPlayerX() +1, getPlayerY() -1, getPlayerZ() -6, 119, 0);
				Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ() -7, 119, 0);
				Level.setTile(getPlayerX() -1, getPlayerY() -1, getPlayerZ() -7, 119, 0);
				Level.setTile(getPlayerX() +1, getPlayerY() -1, getPlayerZ() -7, 119, 0);
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
		
		var portal = new styleButton();
portal.setText("Nether portal");
            portal.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                new9();
				mod.dismiss();
                }
            }));
            modLayout.addView(portal);
		
		var button13 = new styleButton();
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
            
            var button14 = new styleButton();
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
	
var endHack2 = new styleButton();
endHack2.setText("End gateway");
            endHack2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
		Level.setTile(getPlayerX(), 75, getPlayerZ(), 7, 0); //bottom
		Level.setTile(getPlayerX(), 76, getPlayerZ(), 7, 0); //bottom middle
		Level.setTile(getPlayerX() -1, 76, getPlayerZ(), 7, 0); //front
		Level.setTile(getPlayerX(), 76, getPlayerZ() -1, 7, 0); //right
		Level.setTile(getPlayerX() +1, 76, getPlayerZ(), 7, 0); //back
		Level.setTile(getPlayerX(), 76, getPlayerZ() +1, 7, 0); //left
		Level.setTile(getPlayerX(), 77, getPlayerZ(), 209, 0); //middle
		Level.setTile(getPlayerX(), 78, getPlayerZ(), 7, 0); //top middle
		Level.setTile(getPlayerX() -1, 78, getPlayerZ(), 7, 0); //front
		Level.setTile(getPlayerX(), 78, getPlayerZ() -1, 7, 0); //right
		Level.setTile(getPlayerX() +1, 78, getPlayerZ(), 7, 0); //back
		Level.setTile(getPlayerX(), 78, getPlayerZ() +1, 7, 0); //left
		Level.setTile(getPlayerX(), 79, getPlayerZ(), 7, 0); //top
		clientMessage(client+"End gateway has spawned above you at x"+Math.round(getPlayerX())+", y77, z"+Math.round(getPlayerZ())+"\nThrow an ender pearl in it to go to a end city or island.");
				}
            }));
            modLayout.addView(endHack2);

var df = new styleButton();
df.setText("Disable up/down fly");
df.setTextColor(android.graphics.Color.RED);
if(nofly==true)df.setTextColor(android.graphics.Color.GREEN);
            df.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             nofly?nofly=false:nofly=true;
df.setText("Disable up/down fly");
if(nofly == true){
df.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Disable up/down fly on");
Player.setCanFly(false);
nofly = true;
}
if(nofly == false){
df.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Disable up/down fly off");
Player.setCanFly(true);
nofly = false;
}
                }
            }));
            modLayout.addView(df);

var es = new styleButton();
            es.setText("Entity spawner");        
            es.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
				new3();
				mod.dismiss();
                }
            }));
            modLayout.addView(es);

var rr = new styleButton();
rr.setText("Night mode");
rr.setTextColor(android.graphics.Color.RED);
if(remode==true)rr.setTextColor(android.graphics.Color.GREEN);
            rr.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             remode?remode=false:remode=true;
rr.setText("Night mode");
if(remode == true){
rr.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Night mode on");
setNightMode(true);
remode = true;
}
if(remode == false){
rr.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Night mode off");
setNightMode(false);
remode = false;
}
                }
            }));
            modLayout.addView(rr);

var cs = new styleButton();
cs.setText("Sign Editor");
cs.setTextColor(android.graphics.Color.RED);
if(deadchat==true)cs.setTextColor(android.graphics.Color.GREEN);
            cs.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             deadchat?deadchat=false:deadchat=true;
cs.setText("Sign Editor");
if(deadchat == true){
cs.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Sign Editor on");
deadchat = true;
}
if(deadchat == false){
cs.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Sign Editor off");
deadchat = false;
}
                }
            }));
            modLayout.addView(cs);

var killme = new styleButton();
            killme.setText("Kill yourself");        
            killme.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
				
Player.setHealth(0);

                }
            }));
            modLayout.addView(killme);

var hea = new styleButton();
      hea.setText("Heal hearts");
		hea.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             Player.setHealth(20);
             clientMessage(client + "§7Health healed");
			}
		});
		modLayout.addView(hea);

var hun = new styleButton();
      hun.setText("Heal hunger");
		hun.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             Player.setHunger(25);
             clientMessage(client + "§7Hunger healed");
			}
		});
		modLayout.addView(hun);

var mm = new styleButton();
mm.setText("Anti health");
mm.setTextColor(android.graphics.Color.RED);
if(stackheart==true)mm.setTextColor(android.graphics.Color.GREEN);
            mm.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             stackheart?stackheart=false:stackheart=true;
mm.setText("Anti health");
if(stackheart == true){
mm.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Anti health on");
stackheart = true;
}
if(stackheart == false){
mm.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Anti health off");
stackheart = false;
}
                }
            }));
            modLayout.addView(mm);

var mm2 = new styleButton();
mm2.setText("Anti hunger");
mm2.setTextColor(android.graphics.Color.RED);
if(infhun==true)mm2.setTextColor(android.graphics.Color.GREEN);
            mm2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             infhun?infhun=false:infhun=true;
mm2.setText("Anti hunger");
if(infhun == true){
mm2.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Anti hunger on");
infhun = true;
}
if(infhun == false){
mm2.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Anti hunger off");
infhun = false;
}
                }
            }));
            modLayout.addView(mm2);

var zm = new styleButton();
zm.setText("1 hit kill");
zm.setTextColor(android.graphics.Color.RED);
if(instakilled==true)zm.setTextColor(android.graphics.Color.GREEN);
            zm.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             instakilled?instakilled=false:instakilled=true;
zm.setText("1 hit kill");
if(instakilled == true){
zm.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"1 hit kill on");
instakilled = true;
}
if(instakilled == false){
zm.setTextColor(android.graphics.Color.RED);
clientMessage(client+"1 hit kill off");
instakilled = false;
}
                }
            }));
            modLayout.addView(zm);

var zmm = new styleButton();
zmm.setText("Ride mobs");
zmm.setTextColor(android.graphics.Color.RED);
if(saddle==true)zmm.setTextColor(android.graphics.Color.GREEN);
            zmm.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             saddle?saddle=false:saddle=true;
zmm.setText("Ride mobs");
if(saddle == true){
zmm.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Ride mobs on");
saddle = true;
}
if(saddle == false){
zmm.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Ride mobs off");
saddle = false;
}
                }
            }));
            modLayout.addView(zmm);

var fis = new styleButton();
fis.setText("Fly in survival");
fis.setTextColor(android.graphics.Color.RED);
if(fch==true)fis.setTextColor(android.graphics.Color.GREEN);
            fis.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             fch?fch=false:fch=true;
fis.setText("Fly in survival");
if(fch == true){
fis.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Fly in survival on");
Player.setCanFly(true);
fch = true;
}
if(fch == false){
fis.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Fly in survival off");
Player.setCanFly(false);
fch = false;
}
                }
            }));
            modLayout.addView(fis);
			
			
var nomore = new styleButton();
nomore.setText("No new mobs");
nomore.setTextColor(android.graphics.Color.RED);
if(noentity==true)nomore.setTextColor(android.graphics.Color.GREEN);
            nomore.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             noentity?noentity=false:noentity=true;
nomore.setText("No new mobs");
if(noentity == true){
nomore.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"No new mobs on");
noentity = true;
}
if(noentity == false){
nomore.setTextColor(android.graphics.Color.RED);
clientMessage(client+"No new mobs off");
noentity = false;
}
                }
            }));
            modLayout.addView(nomore);
			
var grif = new styleButton();
grif.setText("Grief");
grif.setTextColor(android.graphics.Color.RED);
if(grief==true)grif.setTextColor(android.graphics.Color.GREEN);
            grif.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             grief?grief=false:grief=true;
grif.setText("Grief");
if(grief == true){
grif.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Grief on");
new2();
grief = true;
}
if(grief == false){
grif.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Grief off");
grief = false;
}
                }
            }));
            modLayout.addView(grif);

var k1l = new styleButton();
k1l.setText("Killaura");
k1l.setTextColor(android.graphics.Color.RED);
if(killaura==true)k1l.setTextColor(android.graphics.Color.GREEN);
            k1l.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             killaura?killaura=false:killaura=true;
k1l.setText("Killaura");
if(killaura == true){
k1l.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Killaura on");
killaura = true;
}
if(killaura == false){
k1l.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Killaura off");
killaura = false;
}
                }
            }));
            modLayout.addView(k1l);

var k2l = new styleButton();
k2l.setText("FreezeAura");
k2l.setTextColor(android.graphics.Color.RED);
if(killfaura==true)k2l.setTextColor(android.graphics.Color.GREEN);
            k2l.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             killfaura?killfaura=false:killfaura=true;
k2l.setText("FreezeAura");
if(killfaura == true){
k2l.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"FreezeAura on");
killfaura = true;
}
if(killfaura == false){
k2l.setTextColor(android.graphics.Color.RED);
clientMessage(client+"FreezeAura off");
killfaura = false;
}
                }
            }));
            modLayout.addView(k2l);

var attd = new styleButton();
            attd.setText("Set difficulty");        
            attd.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
named(); 
			mod.dismiss();

                }
            }));
            modLayout.addView(attd);

var att = new styleButton();
            att.setText("Set nametag");        
            att.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
nameMe(); 
			mod.dismiss();

                }
            }));
            modLayout.addView(att);

var fp = new styleButton();
fp.setText("FirePunch");
fp.setTextColor(android.graphics.Color.RED);
if(firepunch==true)fp.setTextColor(android.graphics.Color.GREEN);
            fp.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             firepunch?firepunch=false:firepunch=true;
fp.setText("FirePunch");
if(firepunch == true){
fp.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"FirePunch on");
firepunch = true;
}
if(firepunch == false){
fp.setTextColor(android.graphics.Color.RED);
clientMessage(client+"FirePunch off");
firepunch = false;
}
                }
            }));
            modLayout.addView(fp);

var sbr = new styleButton();
            sbr.setText("Set block Resistance");        
            sbr.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
block2(); 
			mod.dismiss();

                }
            }));
            modLayout.addView(sbr);

var saysome = new styleButton();
saysome.setText("BurnAura");
saysome.setTextColor(android.graphics.Color.RED);
if(killdaura==true)saysome.setTextColor(android.graphics.Color.GREEN);
            saysome.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             killdaura?killdaura=false:killdaura=true;
saysome.setText("BurnAura");
if(killdaura == true){
saysome.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"BurnAura on");
killdaura = true;
}
if(killdaura == false){
saysome.setTextColor(android.graphics.Color.RED);
clientMessage(client+"BurnAura off");
killdaura = false;
}
                }
            }));
            modLayout.addView(saysome);

var nh = new styleButton();
            nh.setText("Add more hearts");        
            nh.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
newhealth(); 
mod.dismiss();

                }
            }));
            modLayout.addView(nh);

var horse = new styleButton();
horse.setText("Set mob health");
            horse.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
horsehealth1();
mod.dismiss();
                }
            }));
            modLayout.addView(horse);

			/*
			* i'll add this in a later feature
			*
var gage = new styleButton();
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
		*/
		
var sage = new styleButton();
sage.setText("Set mob age");
            sage.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
new4();
mod.dismiss();
                }
            }));
            modLayout.addView(sage);
		
		var dropbutton = new styleButton(MainActivity);
dropbutton.setText("Double drops");
dropbutton.setTextColor(android.graphics.Color.RED);
if(doubledrop==true)dropbutton.setTextColor(android.graphics.Color.GREEN);
            dropbutton.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             doubledrop?doubledrop=false:doubledrop=true;
dropbutton.setText("Double drops");
if(doubledrop == true){
dropbutton.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Double drops on\nThis allows you to pick up x2 the amount of the item you placed or broke.");
doubledrop = true;
}
if(doubledrop == false){
dropbutton.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Double drops off");
doubledrop = false;
}
                }
            }));
            modLayout.addView(dropbutton);

            mod = new android.widget.PopupWindow(modLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)mod.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      if(default1==false)mod.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
modLayout1.setBackgroundDrawable(bg);
modLayout1.setPadding(20,0,20,0);
            mod.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}

var effect = new styleButton();
effect.setText("Effect menu");
if(getLanguage=="it_IT")effect.setText("Menu effetti");
if(getLanguage=="es_MX")effect.setText("Menu de efectos");
if(getLanguage=="ko_KR")effect.setText("효과 메뉴");
effect.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             effect_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(effect);
		
		function effect_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var effectLayout = new android.widget.LinearLayout(MainActivity);
            var effectScroll = new android.widget.ScrollView(MainActivity);
            var effectLayout1 = new android.widget.LinearLayout(MainActivity);
            effectLayout.setOrientation(1);
            effectLayout1.setOrientation(1);
            effectScroll.addView(effectLayout);
            effectLayout1.addView(effectScroll);
            
            var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             effect.dismiss();
             showMenuBtn();
			}
		});
		effectLayout.addView(exit);
		
		var mov = new styleButton();
            mov.setText("Remove all effect");
            mov.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                 //Entity.removeAllEffects(player);
Entity.removeAllEffects(getPlayerEnt());
                }
            }));
            effectLayout.addView(mov);
	
	var rmeft = new styleButton();
rmeft.setText("Hit remove effects");
rmeft.setTextColor(android.graphics.Color.RED);
if(hitrmef==true)rmeft.setTextColor(android.graphics.Color.GREEN);
            rmeft.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             hitrmef?hitrmef=false:hitrmef=true;
rmeft.setText("Hit remove effects");
if(hitrmef == true){
rmeft.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Hit remove effects on");

hitrmef = true;
}
if(hitrmef == false){
rmeft.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Hit remove effects off");

hitrmef = false;
}
                }
            }));
            effectLayout.addView(rmeft);

var e1 = new styleButton();
            e1.setText("saturation");
            e1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ea();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e1);

function ea() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
            
            var e2 = new styleButton();
            e2.setText("Absorption");
            e2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eb();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e2);

function eb() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e3 = new styleButton();
            e3.setText("Health boost");
            e3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
  ec();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e3);

function ec() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e4 = new styleButton();
            e4.setText("Wither");
            e4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ed();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e4);

function ed() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
            
            var e5 = new styleButton();
            e5.setText("Poison");
            e5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ee();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e5);

function ee() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e6 = new styleButton();
            e6.setText("Weakness");
            e6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    ef();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e6);

function ef() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e7 = new styleButton();
            e7.setText("Hunger");
            e7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eg();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e7);

function eg() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e8 = new styleButton();
            e8.setText("Night vision");
            e8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eh();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e8);

function eh() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e9 = new styleButton();
            e9.setText("Blindness");
            e9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ei();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e9);

function ei() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e10 = new styleButton();
            e10.setText("Invisibility");
            e10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 ej();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e10);

function ej() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e11 = new styleButton();
            e11.setText("Water breathing");
            e11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ek();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e11);

function ek() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e12 = new styleButton();
            e12.setText("Fire resistance");
            e12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
el();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e12);

function el() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e13 = new styleButton();
            e13.setText("Resistance");
            e13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
em();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e13);

function em() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e14 = new styleButton();
            e14.setText("Regeneration");
            e14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e14);

function en() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e15 = new styleButton();
            e15.setText("Nausea");
            e15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 eo();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e15);

function eo() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e16 = new styleButton();
            e16.setText("Jump boost");
            e16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 ep();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e16);

function ep() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e17 = new styleButton();
            e17.setText("harm");
            e17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eq();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e17);

function eq() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e18 = new styleButton();
            e18.setText("heal");
            e18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
er();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e18);

function er() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e19 = new styleButton();
            e19.setText("Strength");
            e19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
es();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e19);

function es() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e20 = new styleButton();
            e20.setText("Mining fatigue");
            e20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
et();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e20);

function et() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e21 = new styleButton();
            e21.setText("Haste");
            e21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eu();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e21);

function eu() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e22 = new styleButton();
            e22.setText("Slowness");
            e22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ev();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e22);

function ev() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

var e23 = new styleButton();
            e23.setText("Speed boost");
            e23.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ew();
			effect.dismiss();
                }
            }));
            effectLayout.addView(e23);

function ew() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var sec = new styleInput(); sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

            effect = new android.widget.PopupWindow(effectLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)effect.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      if(default1==false)effect.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
effectLayout1.setBackgroundDrawable(bg);
effectLayout1.setPadding(20,0,20,0);
            effect.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}
		
var enchant = new styleButton();
enchant.setText("Enchant menu");
if(getLanguage=="it_IT")enchant.setText("Menu incantamenti");
if(getLanguage=="es_MX")enchant.setText("Menu de experiencia");
if(getLanguage=="ko_KR")enchant.setText("마법 부여 메뉴");
if(getLanguage=="de_DE")enchant.setText("Verzauberungs menu");
enchant.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             enchant_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(enchant);
		
		function enchant_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var enchantLayout = new android.widget.LinearLayout(MainActivity);
            var enchantScroll = new android.widget.ScrollView(MainActivity);
            var enchantLayout1 = new android.widget.LinearLayout(MainActivity);
            enchantLayout.setOrientation(1);
            enchantLayout1.setOrientation(1);
            enchantScroll.addView(enchantLayout);
            enchantLayout1.addView(enchantScroll);
            
            var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             enchant.dismiss();
             showMenuBtn();
			}
		});
		enchantLayout.addView(exit);
		
		var button = new styleButton();
            button.setText("Add experience");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
XGive();
enchant.dismiss();
                }
            }));
            enchantLayout.addView(button);
			
var checker = new styleButton();
checker.setText("illegal enchant checker");
checker.setTextColor(android.graphics.Color.RED);
if(legalenchant==true)checker.setTextColor(android.graphics.Color.GREEN);
            checker.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             legalenchant?legalenchant=false:legalenchant=true;
checker.setText("illegal enchant checker");
if(legalenchant == true){
checker.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"illegal enchant checker on");
legalenchant = true;
}
if(legalenchant == false){
checker.setTextColor(android.graphics.Color.RED);
clientMessage(client+"illegal enchant checker off");
legalenchant = false;
}
                }
            }));
            enchantLayout.addView(checker);

var god1 = new styleButton();
            god1.setText("God sword");
            god1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                godsword()	
                }
            }));
            enchantLayout.addView(god1);
            
            function godsword(){
		    if(Player.getSelectedSlotId() != null){
            	var tysplvl = "29000";
Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING,tysplvl);
		    //Player.setLevel(Math.round(tysplvl));
		    Player.setItemCustomName(Player.getSelectedSlotId(), "God sword");
		    }
            }
            
        var god2 = new styleButton();
            god2.setText("God pickaxe");
            god2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                godpickaxe()	
                }
            }));
            enchantLayout.addView(god2);
            
            function godpickaxe(){
		    if(Player.getSelectedSlotId() != null){
            	var tysplvl = "29000";
		var fortuneLvl = "80";
Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE,fortuneLvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING,tysplvl);
		    //Player.setLevel(Math.round(tysplvl));
		    Player.setItemCustomName(Player.getSelectedSlotId(), "God pickaxe");
		    }
            }
	
	var god4 = new styleButton();
            god4.setText("God axe");
            god4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                godaxe()	
                }
            }));
            enchantLayout.addView(god4);
            
            function godaxe(){
		    if(Player.getSelectedSlotId() != null){
            	var tysplvl = "29000";
		var fortuneLvl = "80";
Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE,fortuneLvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING,tysplvl);
		    //Player.setLevel(Math.round(tysplvl));
		    Player.setItemCustomName(Player.getSelectedSlotId(), "God axe");
		    }
            }
	
	var god5 = new styleButton();
            god5.setText("God bow");
            god5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                godbow();	
                }
            }));
            enchantLayout.addView(god5);
            
            function godbow(){
		    if(Player.getSelectedSlotId() != null){
            	var tysplvl = "29000";
		var flamelvl = '80';
Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME,flamelvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING,tysplvl);
		    //Player.setLevel(Math.round(tysplvl));
		    Player.setItemCustomName(Player.getSelectedSlotId(), "God bow");
		    }
            }
			
var god3 = new styleButton();
            god3.setText("God armor");
            god3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                godarmor()	
                }
            }));
            enchantLayout.addView(god3);
            
            function godarmor(){
		    if(Player.getSelectedSlotId() != null){
            	var tysplvl = "29000";
Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS,tysplvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING,tysplvl);
		    //Player.setLevel(Math.round(tysplvl));
		    Player.setItemCustomName(Player.getSelectedSlotId(), "God armor");
		    }
		    
	    }
	
	var wearing = new styleButton(MainActivity);
            wearing.setText("God armor (wearing)");
            wearing.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
				wearGodArmor()
                }
            }));
            enchantLayout.addView(wearing);
	
	function wearGodArmor(){
		var tysplvl = "29000";
		if(Player.getArmorSlot(0) != null){
				Player.enchant(Player.getArmorSlot(0), Enchantment.PROTECTION,tysplvl);
				Player.enchant(Player.getArmorSlot(0), Enchantment.THORNS,tysplvl);
				Player.enchant(Player.getArmorSlot(0), Enchantment.UNBREAKING,tysplvl);
				Player.setItemCustomName(Player.getArmorSlot(0), "God armor");
				}
				if(Player.getArmorSlot(1) != null){
				Player.enchant(Player.getArmorSlot(1), Enchantment.PROTECTION,tysplvl);
				Player.enchant(Player.getArmorSlot(1), Enchantment.THORNS,tysplvl);
				Player.enchant(Player.getArmorSlot(1), Enchantment.UNBREAKING,tysplvl);
				Player.setItemCustomName(Player.getArmorSlot(1), "God armor");
				}
				if(Player.getArmorSlot(2) != null){
				Player.enchant(Player.getArmorSlot(2), Enchantment.PROTECTION,tysplvl);
				Player.enchant(Player.getArmorSlot(2), Enchantment.THORNS,tysplvl);
				Player.enchant(Player.getArmorSlot(2), Enchantment.UNBREAKING,tysplvl);
				Player.setItemCustomName(Player.getArmorSlot(2), "God armor");
				}
				if(Player.getArmorSlot(3) != null){
				Player.enchant(Player.getArmorSlot(3), Enchantment.PROTECTION,tysplvl);
				Player.enchant(Player.getArmorSlot(3), Enchantment.THORNS,tysplvl);
				Player.enchant(Player.getArmorSlot(3), Enchantment.UNBREAKING,tysplvl);
				Player.setItemCustomName(Player.getArmorSlot(3), "God armor");
				}
	}

var ena = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add1();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add1();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add1();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.AQUA_AFFINITY,ench);
}

var enb = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add2();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add2();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add2();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.BANE_OF_ARTHROPODS,ench);
}

var enc = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add3();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add3();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add3();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.BLAST_PROTECTION,ench);
}

var enf = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add5();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add5();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add5();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.DEPTH_STRIDER,ench);
}

var ene = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add6();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add6();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add6();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY,ench);
}

var eng = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add7();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add7();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add7();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.FEATHER_FALLING,ench);
}

var enh = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add8();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add8();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add8();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT,ench);
}

var eni = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add9();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add9();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add9();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_PROTECTION,ench);
}

var enj = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add10();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add10();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add10();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME,ench);
}

var enk = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add11();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add11();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add11();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE,ench);
}

var enl = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add12();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add12();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add12();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY,ench);
}

var enm = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add13();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add13();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add13();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK,ench);
}

var enn = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add14();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add14();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add14();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING,ench);
}

var eno = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add15();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add15();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add15();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.LUCK_OF_THE_SEA,ench);
}

var enp = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add16();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add16();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add16();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.LURE,ench);
}

var enq = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add17();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add17();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add17();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.POWER,ench);
}

var enr = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add18();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add18();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add18();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.PROJECTILE_PROTECTION,ench);
}

var ens = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add19();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add19();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add19();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION,ench);
}

var ent = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add20();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add20();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add20();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH,ench);
}

var enu = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add21();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add21();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add21();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.RESPIRATION,ench);
}

var env = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add22();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add22();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add22();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS,ench);
}

var enw = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add23();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add23();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add23();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.SILK_TOUCH,ench);
}

var enx = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add24();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add24();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add24();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.SMITE,ench);
}

var eny = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add25();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add25();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add25();
}
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
Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS,ench);
}

var enz = new styleButton();
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
var lvl = new styleInput(); lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
if(legalenchant==true){
ench =lvl.getText();
if(ench >= 5){
ench = 5;
Dialog.dismiss();
add26();
clientMessage(client+"That enchantment is illegal in vanilla.");
}
if(ench <= 5){
Dialog.dismiss();
add26();
}
}
if(legalenchant==false){
ench =lvl.getText();
Dialog.dismiss();
add26();
}
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Enchant Dialog :"+e);
}
}});
}

function add26() {
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING,ench);
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

            enchant = new android.widget.PopupWindow(enchantLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)enchant.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      if(default1==false)enchant.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
enchantLayout1.setBackgroundDrawable(bg);
enchantLayout1.setPadding(20,0,20,0);
            enchant.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}
		
var give = new styleButton();
give.setText("Give menu");
if(getLanguage=="it_IT")give.setText("Menu give");
if(getLanguage=="es_MX")give.setText("Menu de dar");
if(getLanguage=="ko_KR")give.setText("아이템 주기 메뉴");
if(getLanguage=="de_DE")give.setText("Geben menu");
give.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             give_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(give);
		
		function give_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var giveLayout = new android.widget.LinearLayout(MainActivity);
            var giveScroll = new android.widget.ScrollView(MainActivity);
            var giveLayout1 = new android.widget.LinearLayout(MainActivity);
            giveLayout.setOrientation(1);
            giveLayout1.setOrientation(1);
            giveScroll.addView(giveLayout);
            giveLayout1.addView(giveScroll);
            
            var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             give.dismiss();
             showMenuBtn();
			}
		});
		giveLayout.addView(exit);
		
		var button = new styleButton();
            button.setText("Custom Give");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Give();
give.dismiss();
                }
            }));
            giveLayout.addView(button);

var button90 = new styleButton();
            button90.setText("Block ID list");
            button90.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
				/*betterWebview('https://arceusmatt.github.io/minecraftid.html');*/
var alert = new android.app.AlertDialog.Builder(MainActivity); 
var scroll = new android.widget.ScrollView(MainActivity); 
var layout = new android.widget.LinearLayout(MainActivity); 
layout.setOrientation(1);
alert.setTitle("MCPE "+getVer+" blocks");
var ids = Block.getAllBlockIds();
			for (var i = 0; i < ids.length; i++) {
				alert.setMessage(ids.join("\n"));
			}
alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
dialog.dismiss();
give.dismiss();
showMenuBtn();
      }});
alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){
dialog.dismiss();
      }});
var dialog = alert.create();
dialog.show();
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

var butto = new styleButton();
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

var clear = new styleButton();
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

var k1 = new styleButton();
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

var k2 = new styleButton();
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

var k3 = new styleButton();
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

var k4 = new styleButton();
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

var k5 = new styleButton();
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

            give = new android.widget.PopupWindow(giveLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)give.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      if(default1==false)give.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
giveLayout1.setBackgroundDrawable(bg);
giveLayout1.setPadding(20,0,20,0);
            give.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}
		
var morph = new styleButton();
morph.setText("Morph menu");
if(getLanguage=="it_IT")morph.setText("Menu trasformazioni");
if(getLanguage=="es_MX")morph.setText("Menu de morph");
if(getLanguage=="ko_KR")morph.setText("변신 메뉴");
if(getLanguage=="de_DE")morph.setText("Verwandelungs menu");
morph.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             morph_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(morph);
		
		function morph_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var morphLayout = new android.widget.LinearLayout(MainActivity);
            var morphScroll = new android.widget.ScrollView(MainActivity);
            var morphLayout1 = new android.widget.LinearLayout(MainActivity);
            morphLayout.setOrientation(1);
            morphLayout1.setOrientation(1);
            morphScroll.addView(morphLayout);
            morphLayout1.addView(morphScroll);
            
            var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             morph.dismiss();
             showMenuBtn();
			}
		});
		morphLayout.addView(exit);
		
		var mne = new styleButton();
mne.setText("Morph enhance");
mne.setTextColor(android.graphics.Color.RED);
if(morphEnhance==true)mne.setTextColor(android.graphics.Color.GREEN);
            mne.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             morphEnhance?morphEnhance=false:morphEnhance=true;
mne.setText("Morph enhance");
if(morphEnhance == true){
mne.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Morph enhance adds effects and more to what mob you morph into!");

morphEnhance = true;
}
if(morphEnhance == false){
mne.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Morph enhance off");

morphEnhance = false;
}
                }
            }));
            morphLayout.addView(mne);
	
	var morphit = new styleButton();
morphit.setText("Hit'n'morph");
morphit.setTextColor(android.graphics.Color.RED);
if(hitmorph==true)morphit.setTextColor(android.graphics.Color.GREEN);
            morphit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             hitmorph?hitmorph=false:hitmorph=true;
morphit.setText("Hit'n'morph");
if(hitmorph == true){
morphit.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Hit'n'morph on, hit a mob to morph!");

hitmorph = true;
}
if(hitmorph == false){
morphit.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Hit'n'morph off");

hitmorph = false;
}
                }
            }));
            morphLayout.addView(morphit);
		
		var mm1 = new styleButton();
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

var mm = new styleButton();
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

var mm0 = new styleButton();
            mm0.setText("Blaze");
            mm0.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
	Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
	Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 20);
/*Entity.setMobSkin(Player.getEntity(),"mob/blaze.png");*/
                }
            }));
            morphLayout.addView(mm0);

var mm2 = new styleButton();
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

var mm3 = new styleButton();
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

var mm4 = new styleButton();
            mm4.setText("Creeper");
            mm4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
}
Entity.setRenderType(Player.getEntity(), 24);
/*Entity.setMobSkin(Player.getEntity(),"mob/creeper.png");*/
                }
            }));
            morphLayout.addView(mm4);
	
	var mn4 = new styleButton();
            mn4.setText("Ender dragon");
            mn4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setRenderType(Player.getEntity(), 12);
                }
            }));
            morphLayout.addView(mn4);

var mm5 = new styleButton();
            mm5.setText("Enderman");
            mm5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.7, 3, 0.7);
}
Entity.setRenderType(Player.getEntity(), 26);
/*Entity.setMobSkin(Player.getEntity(),"mob/enderman.tga");*/
                }
            }));
            morphLayout.addView(mm5);
	
	var mn1 = new styleButton();
            mn1.setText("Endermite");
            mn1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setRenderType(Player.getEntity(), 71);
                }
            }));
            morphLayout.addView(mn1);

var mm6 = new styleButton();
            mm6.setText("Ghast");
            mm6.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 4, 4, 4);
Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 19);
/*Entity.setMobSkin(Player.getEntity(),"mob/ghast.png");*/
                }
            }));
            morphLayout.addView(mm6);
            
        var mmH = new styleButton();
            mmH.setText("Horse");
            mmH.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
	Entity.addEffect(getPlayerEnt(), MobEffect.jump, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 54);
/*Entity.setMobSkin(Player.getEntity(),"mob/horse.png");*/
                }
            }));
            morphLayout.addView(mmH);
            
        var mmH2 = new styleButton();
            mmH2.setText("Husk");
            mmH2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
	Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25*10, 0, false, true);
	Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25*10, 0, false, true);
}
	Entity.setRenderType(Player.getEntity(), 66);
/*Entity.setMobSkin(Player.getEntity(),"mob/husk.png");*/
                }
            }));
            morphLayout.addView(mmH2);

var mm7 = new styleButton();
            mm7.setText("Iron golem");
            mm7.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 1, 3, 1);
}
Entity.setRenderType(Player.getEntity(), 47);
/*Entity.setMobSkin(Player.getEntity(),"mob/iron_golem.png");*/
                }
            }));
            morphLayout.addView(mm7);

var mm8 = new styleButton();
            mm8.setText("Magma cube");
            mm8.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 2, 2, 2);
Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 25*10, 0, false, true);
Entity.addEffect(getPlayerEnt(), MobEffect.jump, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 18);
/*Entity.setMobSkin(Player.getEntity(),"mob/magmacube.png");*/
                }
            }));
            morphLayout.addView(mm8);

var mm9 = new styleButton();
            mm9.setText("Ocelot");
            mm9.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.5, 0.5, 0.5);
Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 48);
/*Entity.setMobSkin(Player.getEntity(),"mob/cat/ocelot.png");*/
                }
            }));
            morphLayout.addView(mm9);

var mm10 = new styleButton();
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
	
	var mn2 = new styleButton();
            mn2.setText("Polar bear");
            mn2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setRenderType(Player.getEntity(), 13);
                }
            }));
            morphLayout.addView(mn2);
            
            var mmR = new styleButton();
            mmR.setText("Rabbit");
            mmR.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
        if(morphEnhance==true){
        Entity.addEffect(getPlayerEnt(), MobEffect.jump, 25*10, 0, false, true);
        }
Entity.setRenderType(Player.getEntity(), 52);
/*Entity.setMobSkin(Player.getEntity(),"mob/rabbit.png");*/
                }
            }));
            morphLayout.addView(mmR);

var mm11 = new styleButton();
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
	
	var mn3 = new styleButton();
            mn3.setText("Shulker");
            mn3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setRenderType(Player.getEntity(), 50);
                }
            }));
            morphLayout.addView(mn3);

var mm12 = new styleButton();
            mm12.setText("Silverfish");
            mm12.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.3, 0.4, 0.3);
Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 23);
/*Entity.setMobSkin(Player.getEntity(),"mob/silverfish.png");*/
                }
            }));
            morphLayout.addView(mm12);

var mm13 = new styleButton();
            mm13.setText("Skeleton");
            mm13.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25*10, 0, false, true);
Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 21);
/*Entity.setMobSkin(Player.getEntity(),"mob/skeleton.png");*/
                }
            }));
            morphLayout.addView(mm13);

var mm14 = new styleButton();
            mm14.setText("Slime");
            mm14.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 2, 2, 2);
Entity.addEffect(getPlayerEnt(), MobEffect.jump, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 25);
/*Entity.setMobSkin(Player.getEntity(),"mob/slime.png");*/
                }
            }));
            morphLayout.addView(mm14);

var mm15 = new styleButton();
            mm15.setText("Snow golem");
            mm15.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.7, 2, 0.7);
}
Entity.setRenderType(Player.getEntity(), 49);
/*Entity.setMobSkin(Player.getEntity(),"mob/snow_golem.png");*/
                }
            }));
            morphLayout.addView(mm15);
            
        var mmS = new styleButton();
            mmS.setText("Stray");
            mmS.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                	if(morphEnhance==true){
        Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25*10, 0, false, true);
	Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25*10, 0, false, true);
                	}
Entity.setRenderType(Player.getEntity(), 67);
/*Entity.setMobSkin(Player.getEntity(),"mob/stray.png");*/
                }
            }));
            morphLayout.addView(mmS);

var mm16 = new styleButton();
            mm16.setText("Spider");
            mm16.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 1, 0.4, 1);
}
Entity.setRenderType(Player.getEntity(), 22);
/*Entity.setMobSkin(Player.getEntity(),"mob/spider.tga");*/
                }
            }));
            morphLayout.addView(mm16);

var mm17 = new styleButton();
            mm17.setText("Squid");
            mm17.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.5, 0.5, 0.5);
Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 40);
/*Entity.setMobSkin(Player.getEntity(),"mob/squid.png");*/
                }
            }));
            morphLayout.addView(mm17);

var mm18 = new styleButton();
            mm18.setText("Villager");
            mm18.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
}
Entity.setRenderType(Player.getEntity(), 14);
/*Entity.setMobSkin(Player.getEntity(),"mob/villager/villager.png");*/
                }
            }));
            morphLayout.addView(mm18);

var mm19 = new styleButton();
            mm19.setText("Villager zombie");
            mm19.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25*10, 0, false, true);
Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 44);
/*Entity.setMobSkin(Player.getEntity(),"mob/zombieVillager.png");*/
                }
            }));
            morphLayout.addView(mm19);
            
        var mmW = new styleButton();
            mmW.setText("Witch");
            mmW.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setRenderType(Player.getEntity(), 53);
/*Entity.setMobSkin(Player.getEntity(),"mob/witch.png");*/
                }
            }));
            morphLayout.addView(mmW);

var mm20 = new styleButton();
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
	
	var mn5 = new styleButton();
            mn5.setText("Wither");
            mn5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setRenderType(Player.getEntity(), 63);
                }
            }));
            morphLayout.addView(mn5);
            
        var mmW2 = new styleButton();
            mmW2.setText("Wither skeleton");
            mmW2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                	if(morphEnhance==true){
                	Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 25*10, 0, false, true);
                	Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25*10, 0, false, true);
	                Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25*10, 0, false, true);
                	}
Entity.setRenderType(Player.getEntity(), 68);
/*Entity.setMobSkin(Player.getEntity(),"mob/witherSkeleton.tga");*/
                }
            }));
            morphLayout.addView(mmW2);

var mm21 = new styleButton();
            mm21.setText("Zombie");
            mm21.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25*10, 0, false, true);
Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 16);
/*Entity.setMobSkin(Player.getEntity(),"mob/zombie.png");*/
                }
            }));
            morphLayout.addView(mm21);

var mm22 = new styleButton();
            mm22.setText("Zombie pigman");
            mm22.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(morphEnhance==true){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 25*10, 0, false, true);
}
Entity.setRenderType(Player.getEntity(), 17);
/*Entity.setMobSkin(Player.getEntity(),"mob/pigzombie.png*/
                }
            }));
            morphLayout.addView(mm22);

            morph = new android.widget.PopupWindow(morphLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)morph.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
			if(default1==false)morph.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
morphLayout1.setBackgroundDrawable(bg);
morphLayout1.setPadding(20,0,20,0);
            morph.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}
		
var nuke = new styleButton();
nuke.setText("Nuke menu");
if(getLanguage=="it_IT")nuke.setText("Menu esplosioni");
if(getLanguage=="es_MX")nuke.setText("Menu de bomba nuclear");
if(getLanguage=="ko_KR")nuke.setText("핵폭탄 메뉴");
if(getLanguage=="de_DE")nuke.setText("Vernichtungs menu");
nuke.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             nuke_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(nuke);
		
		function nuke_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var nukeLayout = new android.widget.LinearLayout(MainActivity);
            var nukeScroll = new android.widget.ScrollView(MainActivity);
            var nukeLayout1 = new android.widget.LinearLayout(MainActivity);
            nukeLayout.setOrientation(1);
            nukeLayout1.setOrientation(1);
            nukeScroll.addView(nukeLayout);
            nukeLayout1.addView(nukeScroll);
            
            var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             nuke.dismiss();
             showMenuBtn();
			}
		});
		nukeLayout.addView(exit);
		
var tn = new styleButton();
tn.setText("Tap nuke");
tn.setTextColor(android.graphics.Color.RED);
if(tapnuke==true)tn.setTextColor(android.graphics.Color.GREEN);
            tn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tapnuke?tapnuke=false:tapnuke=true;
tn.setText("Tap nuke");
if(tapnuke == true){
tn.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Tap nuke on");
tapnuke = true;
}
if(tapnuke == false){
tn.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Tap nuke off");
tapnuke = false;
}
                }
            }));
            nukeLayout.addView(tn);
			
var ann = new styleButton();
ann.setText("Auto nuke");
ann.setTextColor(android.graphics.Color.RED);
if(autonuke==true)ann.setTextColor(android.graphics.Color.GREEN);
            ann.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             autonuke?autonuke=false:autonuke=true;
ann.setText("Auto nuke");
if(autonuke == true){
ann.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Auto nuke on");
autonuke = true;
}
if(autonuke == false){
ann.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Auto nuke off");
autonuke = false;
}
                }
            }));
            nukeLayout.addView(ann);
		
		var n1 = new styleButton();
            n1.setText("Nuke 1%");  
            n1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),1);
                }
            }));
            nukeLayout.addView(n1);

     var n2 = new styleButton();
            n2.setText("Nuke 5%");
            n2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),5);
                }
            }));
            nukeLayout.addView(n2);

var n3 = new styleButton();
            n3.setText("Nuke 10%");
            n3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),10);
                }
            }));
            nukeLayout.addView(n3);

var n4 = new styleButton();
            n4.setText("Nuke 15%");
            n4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),15);
                }
            }));
            nukeLayout.addView(n4);

var n5 = new styleButton();
            n5.setText("Nuke 20%");
            n5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),20);
                }
            }));
            nukeLayout.addView(n5);

var n6 = new styleButton();
            n6.setText("Nuke 25%");
            n6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),25);
                }
            }));
            nukeLayout.addView(n6);

var n7 = new styleButton();
            n7.setText("Nuke 30%");
            n7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),30);
                }
            }));
            nukeLayout.addView(n7);

var n8 = new styleButton();
            n8.setText("Nuke 35%");
            n8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),35);
                }
            }));
            nukeLayout.addView(n8);

var n9 = new styleButton();
            n9.setText("Nuke 40%");
            n9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),40);
                }
            }));
            nukeLayout.addView(n9);

var n10 = new styleButton();
            n10.setText("Nuke 45%");
            n10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),45);
                }
            }));
            nukeLayout.addView(n10);

var n11 = new styleButton();
            n11.setText("Nuke 50%");
            n11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	explode(getPlayerX(),getPlayerY(),getPlayerZ(),50);
                }
            }));
            nukeLayout.addView(n11);
	
	var cn = new styleButton();
            cn.setText("Custom nuke");
            cn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                nuke.dismiss();
                newn();
                }
            }));
            nukeLayout.addView(cn);

            nuke = new android.widget.PopupWindow(nukeLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)nuke.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      if(default1==false)nuke.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
nukeLayout1.setBackgroundDrawable(bg);
nukeLayout1.setPadding(20,0,20,0);
            nuke.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}
		
var particle = new styleButton();
particle.setText("Particle menu");
if(getLanguage=="it_IT")particle.setText("Menu particelle");
if(getLanguage=="es_MX")particle.setText("Menu de partícula");
if(getLanguage=="ko_KR")particle.setText("파티클 메뉴");
if(getLanguage=="de_DE")particle.setText("Partikel menu");
particle.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             particle_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(particle);
		
		function particle_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var particleLayout = new android.widget.LinearLayout(MainActivity);
            var particleScroll = new android.widget.ScrollView(MainActivity);
            var particleLayout1 = new android.widget.LinearLayout(MainActivity);
            particleLayout.setOrientation(1);
            particleLayout1.setOrientation(1);
            particleScroll.addView(particleLayout);
            particleLayout1.addView(particleScroll);
            
            var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             particle.dismiss();
             showMenuBtn();
			}
		});
		particleLayout.addView(exit);
	
	var hitpart = new styleButton();
hitpart.setText("Hit particles");
hitpart.setTextColor(android.graphics.Color.RED);
if(hitparticles==true)hitpart.setTextColor(android.graphics.Color.GREEN);
            hitpart.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             hitparticles?hitparticles=false:hitparticles=true;
hitpart.setText("Hit particles");
if(hitparticles == true){
hitpart.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Hit particles enables the selected particle to show when you hit a player~");

hitparticles = true;
}
if(hitparticles == false){
hitpart.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Hit particles off");

hitparticles = false;
}
                }
            }));
            particleLayout.addView(hitpart);
	
	var parti2l = new styleButton();
parti2l.setText("Tap particles");
parti2l.setTextColor(android.graphics.Color.RED);
if(tapParti==true)parti2l.setTextColor(android.graphics.Color.GREEN);
            parti2l.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tapParti?tapParti=false:tapParti=true;
parti2l.setText("Tap particles");
if(tapParti == true){
parti2l.setTextColor(android.graphics.Color.GREEN);
clientMessage(client + "Tap particles on, enable a particle!");

tapParti = true;
}
if(tapParti == false){
parti2l.setTextColor(android.graphics.Color.RED);
clientMessage(client + "Tap particles off");

tapParti = false;
}
                }
            }));
            particleLayout.addView(parti2l);
		
var p1 = new styleButton();
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

var p2 = new styleButton();
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

var p3 = new styleButton();
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

var p4 = new styleButton();
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

var p5 = new styleButton();
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

var p6 = new styleButton();
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

var p7 = new styleButton();
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

var p8 = new styleButton();
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

var p9 = new styleButton();
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

var p10 = new styleButton();
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

var p11 = new styleButton();
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

var p12 = new styleButton();
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

var p13 = new styleButton();
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

var p14 = new styleButton();
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

var p15 = new styleButton();
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

var p16 = new styleButton();
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

var p17 = new styleButton();
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

var p18 = new styleButton();
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

var p19 = new styleButton();
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

var p20 = new styleButton();
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

var p21 = new styleButton();
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

var p22 = new styleButton();
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

var p23 = new styleButton();
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

var p24 = new styleButton();
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

var p25 = new styleButton();
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

var p26 = new styleButton();
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

var p27 = new styleButton();
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

var p28 = new styleButton();
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

var p29 = new styleButton();
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

var p30 = new styleButton();
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

var p31 = new styleButton();
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

var p32 = new styleButton();
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
			
var p33 = new styleButton();
            p33.setText("Carrot boost: "+(particle33?"on":"off"));
            p33.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle33?particle33=false:particle33=true;
p33.setText("Carrot boost: "+(particle33?"on":"off"));
if(particle33 == true){
clientMessage(client + "§7Particle 33 is true");
}
if(particle33 == false){
clientMessage(client + "§7Particle 33 is false");
                }
}
            }));
            particleLayout.addView(p33);
			
var p34 = new styleButton();
            p34.setText("Witch spell: "+(particle34?"on":"off"));
            p34.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
particle34?particle34=false:particle34=true;
p34.setText("Witch spell: "+(particle34?"on":"off"));
if(particle34 == true){
clientMessage(client + "§7Particle 34 is true");
}
if(particle34 == false){
clientMessage(client + "§7Particle 34 is false");
                }
}
            }));
            particleLayout.addView(p34);

            particle = new android.widget.PopupWindow(particleLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)particle.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      if(default1==false)particle.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
particleLayout1.setBackgroundDrawable(bg);
particleLayout1.setPadding(20,0,20,0);
            particle.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}
		
var spawn = new styleButton();
spawn.setText("Spawn menu");
if(getLanguage=="it_IT")spawn.setText("Menu spawner");
if(getLanguage=="es_MX")spawn.setText("Menu de spawn");
if(getLanguage=="ko_KR")spawn.setText("생성 메뉴");
if(getLanguage=="de_DE")spawn.setText("Erschaffungs menu");
spawn.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             spawn_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(spawn);
		
		function spawn_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var spawnLayout = new android.widget.LinearLayout(MainActivity);
            var spawnScroll = new android.widget.ScrollView(MainActivity);
            var spawnLayout1 = new android.widget.LinearLayout(MainActivity);
            spawnLayout.setOrientation(1);
            spawnLayout1.setOrientation(1);
            spawnScroll.addView(spawnLayout);
            spawnLayout1.addView(spawnScroll);
            
            var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             spawn.dismiss();
             showMenuBtn();
			}
		});
		spawnLayout.addView(exit);
		
		var spawn10 = new styleButton();
            spawn10.setText("Spawn Chicken");      
            spawn10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 10);
                }
            }));
            spawnLayout.addView(spawn10);

var spawn11 = new styleButton();
            spawn11.setText("Spawn Cow");
            spawn11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 11);
                }
            }));
            spawnLayout.addView(spawn11);
            
            var spawn12 = new styleButton();
            spawn12.setText("Spawn Pig");
            spawn12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 12);
                }
            }));
            spawnLayout.addView(spawn12);
            
            var spawn13 = new styleButton();
            spawn13.setText("Spawn Sheep");
            spawn13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 13);
                }
            }));
            spawnLayout.addView(spawn13);
            
            var spawn14 = new styleButton();
            spawn14.setText("Spawn Wolf");
            spawn14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 14);
                }
            }));
            spawnLayout.addView(spawn14);
            
            var spawn15 = new styleButton();
            spawn15.setText("Spawn Villager");
            spawn15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 15);
                }
            }));
            spawnLayout.addView(spawn15);
            
            var spawn16 = new styleButton();
            spawn16.setText("Spawn Mushrom cow");
            spawn16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 16);
                }
            }));
            spawnLayout.addView(spawn16);
            
            var spawn17 = new styleButton();
            spawn17.setText("Spawn Squid");
            spawn17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 17);
                }
            }));
            spawnLayout.addView(spawn17);
            
            var spawn18 = new styleButton();
            spawn18.setText("Spawn Rabbit");
            spawn18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 18);
                }
            }));
            spawnLayout.addView(spawn18);
            
            var spawn19 = new styleButton();
            spawn19.setText("Spawn Bat");
            spawn19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 19);
                }
            }));
            spawnLayout.addView(spawn19);
            
            var spawn20 = new styleButton();
            spawn20.setText("Spawn Iron golem");
            spawn20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 20);
                }
            }));
            spawnLayout.addView(spawn20);
            
            var spawn21 = new styleButton();
            spawn21.setText("Spawn Snow golem");
            spawn21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 21);
                }
            }));
            spawnLayout.addView(spawn21);
            
            var spawn22 = new styleButton();
            spawn22.setText("Spawn Ocelot");
            spawn22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 22);
                }
            }));
            spawnLayout.addView(spawn22);
	
	var spaw28 = new styleButton();
            spaw28.setText("Spawn polar bear");
            spaw28.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 28);
                }
            }));
            spawnLayout.addView(spaw28);

var spawn32 = new styleButton();
            spawn32.setText("Spawn Zombie");
            spawn32.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 32);
                }
            }));
            spawnLayout.addView(spawn32);

var spawn33 = new styleButton();
            spawn33.setText("Spawn Creeper");
            spawn33.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 33);
                }
            }));
            spawnLayout.addView(spawn33);

var spawn34 = new styleButton();
            spawn34.setText("Spawn Skeleton");
            spawn34.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 34);
                }
            }));
            spawnLayout.addView(spawn34);
            
            var spawn35 = new styleButton();
            spawn35.setText("Spawn Spider");
            spawn35.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 35);
                }
            }));
            spawnLayout.addView(spawn35);
            
            var spawn36 = new styleButton();
            spawn36.setText("Spawn Zombie pigman");
            spawn36.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 36);
                }
            }));
            spawnLayout.addView(spawn36);
            
            var spawn37 = new styleButton();
            spawn37.setText("Spawn Slime");
            spawn37.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 37);
                }
            }));
            spawnLayout.addView(spawn37);
            
            var spawn38 = new styleButton();
            spawn38.setText("Spawn Enderman");     
            spawn38.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 38);
                }
            }));
            spawnLayout.addView(spawn38);
            
            var spawn39 = new styleButton();
            spawn39.setText("Spawn Silverfish");
            spawn39.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 39);
                }
            }));
            spawnLayout.addView(spawn39);

var spawn40 = new styleButton();
            spawn40.setText("Spawn Cave spider"); 
            spawn40.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 40);
                }
            }));
            spawnLayout.addView(spawn40);

var spawn41 = new styleButton();
            spawn41.setText("Spawn Ghast");      
            spawn41.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 41);
                }
            }));
            spawnLayout.addView(spawn41);

var spawn42 = new styleButton();
            spawn42.setText("Spawn Magma cube");
            spawn42.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 42);
                }
            }));
            spawnLayout.addView(spawn42);

var spawn43 = new styleButton();
            spawn43.setText("Spawn Blaze");       
            spawn43.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 43);
                }
            }));
            spawnLayout.addView(spawn43);

var spawn44 = new styleButton();
            spawn44.setText("Spawn Zombie villager");
            spawn44.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 44);
                }
            }));
            spawnLayout.addView(spawn44);

var spawn66 = new styleButton();
            spawn66.setText("Spawn Witch");            
            spawn66.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 45);
                }
            }));
            spawnLayout.addView(spawn66);
			
			var spawn68 = new styleButton();
            spawn68.setText("Spawn Guardian");            
            spawn68.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 49);
                }
            }));
            spawnLayout.addView(spawn68);
			
var spawn70 = new styleButton();
            spawn70.setText("Spawn Horse");            
            spawn70.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 23);
                }
            }));
            spawnLayout.addView(spawn70);
			
			var spawn71 = new styleButton();
            spawn71.setText("Spawn Donkey");            
            spawn71.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 24);
                }
            }));
            spawnLayout.addView(spawn71);
			
			var spawn72 = new styleButton();
            spawn72.setText("Spawn Mule");            
            spawn72.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 25);
                }
            }));
            spawnLayout.addView(spawn72);
			
			var spawn73 = new styleButton();
            spawn73.setText("Spawn Skeleton Horse");            
            spawn73.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 26);
                }
            }));
            spawnLayout.addView(spawn73);
			
			var spawn74 = new styleButton();
            spawn74.setText("Spawn Zombie Horse");            
            spawn74.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 27);
                }
            }));
            spawnLayout.addView(spawn74);
			
			var spawn75 = new styleButton();
            spawn75.setText("Spawn Wither skeleton");            
            spawn75.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 48);
                }
            }));
            spawnLayout.addView(spawn75);
			
			var spawn76 = new styleButton();
            spawn76.setText("Spawn Stray");            
            spawn76.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 46);
                }
            }));
            spawnLayout.addView(spawn76);
			
	    var spawn77 = new styleButton();
            spawn77.setText("Spawn Husk");            
            spawn77.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 47);
                }
            }));
            spawnLayout.addView(spawn77);
            
            var spawn78 = new styleButton();
            spawn78.setText("Spawn Elder guardian");            
            spawn78.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 50);
                }
            }));
            spawnLayout.addView(spawn78);
            
            var spawn79 = new styleButton();
            spawn79.setText("Spawn Wither");            
            spawn79.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 52);
                }
            }));
            spawnLayout.addView(spawn79);
            
            var spawn80 = new styleButton();
            spawn80.setText("Spawn NPC");            
            spawn80.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 51);
                }
            }));
            spawnLayout.addView(spawn80);
	
	var spawnP = new styleButton();
            spawnP.setText("Spawn Player");            
            spawnP.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 63);
                }
            }));
            spawnLayout.addView(spawnP);
	
	var spawnT = new styleButton();
            spawnT.setText("Spawn Item");            
            spawnT.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 64);
                }
            }));
            spawnLayout.addView(spawnT);
	
	var spaw54 = new styleButton();
            spaw54.setText("Spawn shulker");
            spaw54.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 54);
                }
            }));
            spawnLayout.addView(spaw54);
	
	var spaw55 = new styleButton();
            spaw55.setText("Spawn endermite");
            spaw55.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 55);
                }
            }));
            spawnLayout.addView(spaw55);
	
	var spawn53 = new styleButton();
            spawn53.setText("Spawn ender dragon");
            spawn53.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 53);
                }
            }));
            spawnLayout.addView(spawn53);

            spawn = new android.widget.PopupWindow(spawnLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)spawn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      if(default1==false)spawn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
spawnLayout1.setBackgroundDrawable(bg);
spawnLayout1.setPadding(20,0,20,0);
            spawn.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}
		
var speed = new styleButton();
speed.setText("Speed menu");
if(getLanguage=="it_IT")speed.setText("Menu velocita");
if(getLanguage=="es_MX")speed.setText("Menu de velocidad");
if(getLanguage=="ko_KR")speed.setText("속도 메뉴");
if(getLanguage=="de_DE")speed.setText("Schnelligkeits menu");
speed.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             speed_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(speed);
		
		function speed_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var speedLayout = new android.widget.LinearLayout(MainActivity);
            var speedScroll = new android.widget.ScrollView(MainActivity);
            var speedLayout1 = new android.widget.LinearLayout(MainActivity);
            speedLayout.setOrientation(1);
            speedLayout1.setOrientation(1);
            speedScroll.addView(speedLayout);
            speedLayout1.addView(speedScroll);
            
            var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             speed.dismiss();
             showMenuBtn();
			}
		});
		speedLayout.addView(exit);
		
		var d1 = new styleButton();
            d1.setText("Normal speed");       
            d1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(20);
                }
            }));
            speedLayout.addView(d1);
			
			var d0 = new styleButton();
            d0.setText("Speed 0%");       
            d0.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(0);
                }
            }));
            speedLayout.addView(d0);
            
            var d2 = new styleButton();
            d2.setText("Speed 5%");       
            d2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(5);
                }
            }));
            speedLayout.addView(d2);
            
            var d3 = new styleButton();
            d3.setText("Speed 10%");       
            d3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(10);
                }
            }));
            speedLayout.addView(d3);
            
            var d4 = new styleButton();
            d4.setText("Speed 15%");       
            d4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(15);
                }
            }));
            speedLayout.addView(d4);
            
            var d5 = new styleButton();
            d5.setText("Speed 20%");       
            d5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(20);
                }
            }));
            speedLayout.addView(d5);
            
            var d6 = new styleButton();
            d6.setText("Speed 25%");       
            d6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(25);
                }
            }));
            speedLayout.addView(d6);
            
            var d7 = new styleButton();
            d7.setText("Speed 30%");       
            d7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(30);
                }
            }));
            speedLayout.addView(d7);
            
            var d8 = new styleButton();
            d8.setText("Speed 35%");       
            d8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(35);
                }
            }));
            speedLayout.addView(d8);
            
            var d9 = new styleButton();
            d9.setText("Speed 40%");       
            d9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(40);
                }
            }));
            speedLayout.addView(d9);

var d10 = new styleButton();
            d10.setText("Speed 45%");       
            d10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(45);
                }
            }));
            speedLayout.addView(d10);

var d11 = new styleButton();
            d11.setText("Speed 50%");       
            d11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(50);
                }
            }));
            speedLayout.addView(d11);

var d12 = new styleButton();
            d12.setText("Speed 55%");       
            d12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(55);
                }
            }));
            speedLayout.addView(d12);

var d13 = new styleButton();
            d13.setText("Speed 60%");       
            d13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(60);
                }
            }));
            speedLayout.addView(d13);

var d14 = new styleButton();
            d14.setText("Speed 65%");       
            d14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(65);
                }
            }));
            speedLayout.addView(d14);

var d15 = new styleButton();
            d15.setText("Speed 70%");       
            d15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(70);
                }
            }));
            speedLayout.addView(d15);

var d16 = new styleButton();
            d16.setText("Speed 75%");       
            d16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(75);
                }
            }));
            speedLayout.addView(d16);

var d17 = new styleButton();
            d17.setText("Speed 80%");       
            d17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(80);
                }
            }));
            speedLayout.addView(d17);

var d18 = new styleButton();
            d18.setText("Speed 85%");       
            d18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(85);
                }
            }));
            speedLayout.addView(d18);

var d19 = new styleButton();
            d19.setText("Speed 90%");       
            d19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(90);
                }
            }));
            speedLayout.addView(d19);

var d20 = new styleButton();
            d20.setText("Speed 95%");       
            d20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(95);
                }
            }));
            speedLayout.addView(d20);

var d21 = new styleButton();
            d21.setText("Speed 100%");       
            d21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(100);
                }
            }));
            speedLayout.addView(d21);
			
			var d22 = new styleButton();
            d22.setText("Custom speed");        
            d22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
newspeed(); 

                }
            }));
            speedLayout.addView(d22);

            speed = new android.widget.PopupWindow(speedLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)speed.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      if(default1==false)speed.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
speedLayout1.setBackgroundDrawable(bg);
speedLayout1.setPadding(20,0,20,0);
            speed.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}
		
var teleport = new styleButton();
teleport.setText("Teleport menu");
if(getLanguage=="it_IT")teleport.setText("Menu teletrasporto");
if(getLanguage=="es_MX")teleport.setText("Menu de teletransportacion");
if(getLanguage=="ko_KR")teleport.setText("순간이동 메뉴");
if(getLanguage=="de_DE")teleport.setText("Teleportierungs menu");
teleport.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             teleport_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(teleport);
		
		function teleport_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var teleportLayout = new android.widget.LinearLayout(MainActivity);
            var teleportScroll = new android.widget.ScrollView(MainActivity);
            var teleportLayout1 = new android.widget.LinearLayout(MainActivity);
            teleportLayout.setOrientation(1);
            teleportLayout1.setOrientation(1);
            teleportScroll.addView(teleportLayout);
            teleportLayout1.addView(teleportScroll);
            
            var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             teleport.dismiss();
             showMenuBtn();
			}
		});
		teleportLayout.addView(exit);
		
		var button = new styleButton();
            button.setText("Select coords");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Tsele();
teleport.dismiss();
                }
            }));
            teleportLayout.addView(button);

var Uspawn = new styleButton();
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

var Rspawn = new styleButton();
            Rspawn.setText("Return to home");       
            Rspawn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
load();
clientMessage(client + "§7Returning to your saved home file");
                }
            }));
            teleportLayout.addView(Rspawn);

var sspawn = new styleButton();
            sspawn.setText("Set spawn");       
            sspawn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
        Level.setSpawn(getPlayerX(), getPlayerY(), getPlayerZ())
clientMessage(client + "§7Spawn set to " + Math.round(getPlayerX()) + ", " + Math.round(getPlayerY()) + ", " + Math.round(getPlayerZ()) + ".");
                }
            }));
            teleportLayout.addView(sspawn);
			
			var randomtp = new styleButton();
            randomtp.setText("Random TP");       
            randomtp.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 Entity.setPosition(Player.getEntity(), (Math.floor(Math.random() * (5000 - 100 + 1)) + 100), 70, (Math.floor(Math.random() * (5000 - 100 + 1)) + 100));
clientMessage(client + "Woah!\n"+"Teleported to: "+getPlayerX()+" "+getPlayerY()+" "+getPlayerZ());
                }
            }));
            teleportLayout.addView(randomtp);
			
var ttp = new styleButton();
ttp.setText("Tap teleport");
ttp.setTextColor(android.graphics.Color.RED);
if(taptp==true)ttp.setTextColor(android.graphics.Color.GREEN);
            ttp.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             taptp?taptp=false:taptp=true;
ttp.setText("Tap teleport");
if(taptp == true){
ttp.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Tap teleport on");
taptp = true;
}
if(taptp == false){
ttp.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Tap teleport off");
taptp = false;
}
                }
            }));
            teleportLayout.addView(ttp);
			
		var et = new android.widget.TextView(MainActivity);
		et.setGravity(android.view.Gravity.CENTER);
		et.setText("You may crash while tping because blocks do not load correctly.");
		et.setTextColor(android.graphics.Color.BLACK);
		var textviewBg = new android.graphics.drawable.GradientDrawable();
		textviewBg.setColor(android.graphics.Color.WHITE);
		et.setBackgroundDrawable(textviewBg);
		et.setTextSize(20);
		teleportLayout.addView(et);

            teleport = new android.widget.PopupWindow(teleportLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)teleport.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      if(default1==false)teleport.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
teleportLayout1.setBackgroundDrawable(bg);
teleportLayout1.setPadding(20,0,20,0);
            teleport.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}
		
var time = new styleButton();
time.setText("Time menu");
if(getLanguage=="it_IT")time.setText("Menu tempo");
if(getLanguage=="es_MX")time.setText("Menu de momento");
if(getLanguage=="ko_KR")time.setText("시간 메뉴");
if(getLanguage=="de_DE")time.setText("Zeit menu");
time.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             time_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(time);
		
		function time_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var timeLayout = new android.widget.LinearLayout(MainActivity);
            var timeScroll = new android.widget.ScrollView(MainActivity);
            var timeLayout1 = new android.widget.LinearLayout(MainActivity);
            timeLayout.setOrientation(1);
            timeLayout1.setOrientation(1);
            timeScroll.addView(timeLayout);
            timeLayout1.addView(timeScroll);
            
            var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             time.dismiss();
             showMenuBtn();
			}
		});
		timeLayout.addView(exit);
			
var aa = new styleButton();
aa.setText("Only day");
aa.setTextColor(android.graphics.Color.RED);
if(onlyday==true)aa.setTextColor(android.graphics.Color.GREEN);
            aa.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             onlyday?onlyday=false:onlyday=true;
aa.setText("Only day");
if(onlyday == true){
aa.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Only day on");
onlyday = true;
}
if(onlyday == false){
aa.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Only day off");
onlyday = false;
}
                }
            }));
            timeLayout.addView(aa);

var aa2 = new styleButton();
aa2.setText("Only night");
aa2.setTextColor(android.graphics.Color.RED);
if(onlynight==true)aa2.setTextColor(android.graphics.Color.GREEN);
            aa2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             onlynight?onlynight=false:onlynight=true;
aa2.setText("Only night");
if(onlynight == true){
aa2.setTextColor(android.graphics.Color.GREEN);
clientMessage(client+"Only night on");
onlynight = true;
}
if(onlynight == false){
aa2.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Only night off");
onlynight = false;
}
                }
            }));
            timeLayout.addView(aa2);

var a1 = new styleButton();
            a1.setText("Time: 6:00am");
            a1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(0);
                }
            }));
            timeLayout.addView(a1);

var a2 = new styleButton();
            a2.setText("Time: 7:00am");
            a2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(1000);
                }
            }));
            timeLayout.addView(a2);

var a3 = new styleButton();
            a3.setText("Time: 8:00am");
            a3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(2000);
                }
            }));
            timeLayout.addView(a3);

var a4 = new styleButton();
            a4.setText("Time: 9:00am");
            a4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(3000);
                }
            }));
            timeLayout.addView(a4);

var a5 = new styleButton();
            a5.setText("Time: 10:00am");
            a5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(4000);
                }
            }));
            timeLayout.addView(a5);

var a6 = new styleButton();
            a6.setText("Time: 11:00am");
            a6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(5000);
                }
            }));
            timeLayout.addView(a6);

var a7 = new styleButton();
            a7.setText("Time: 12:00pm");
            a7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(6000);
                }
            }));
            timeLayout.addView(a7);

var a8 = new styleButton();
            a8.setText("Time: 1:00pm");
            a8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(7000);
                }
            }));
            timeLayout.addView(a8);

var a9 = new styleButton();
            a9.setText("Time: 2:00pm");
            a9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(8000);
                }
            }));
            timeLayout.addView(a9);

var a10 = new styleButton();
            a10.setText("Time: 3:00pm");
            a10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(9000);
                }
            }));
            timeLayout.addView(a10);

var a11 = new styleButton();
            a11.setText("Time: 4:00pm");
            a11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(10000);
                }
            }));
            timeLayout.addView(a11);

var a12 = new styleButton();
            a12.setText("Time: 5:00pm");
            a12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(11000);
                }
            }));
            timeLayout.addView(a12);

var a13 = new styleButton();
            a13.setText("Time: 6:00pm");
            a13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(12000);
                }
            }));
            timeLayout.addView(a13);

var a14 = new styleButton();
            a14.setText("Time: 7:00pm");
            a14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(13000);
                }
            }));
            timeLayout.addView(a14);

var a15 = new styleButton();
            a15.setText("Time: 8:00pm");
            a15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(14000);
                }
            }));
            timeLayout.addView(a15);

var a16 = new styleButton();
            a16.setText("Time: 9:00pm");
            a16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(15000);
                }
            }));
            timeLayout.addView(a16);

var a17 = new styleButton();
            a17.setText("Time: 10:00pm");
            a17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(16000);
                }
            }));
            timeLayout.addView(a17);

var a18 = new styleButton();
            a18.setText("Time: 11:00pm");
            a18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(17000);
                }
            }));
            timeLayout.addView(a18);

var a19 = new styleButton();
            a19.setText("Time: 12:00am");
            
            a19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(18000);
                }
            }));
            timeLayout.addView(a19);

var a20 = new styleButton();
            a20.setText("Time: 1:00am");
            a20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(19000);
                }
            }));
            timeLayout.addView(a20);

var a21 = new styleButton();
            a21.setText("Time: 2:00am");
            a21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(20000);
                }
            }));
            timeLayout.addView(a21);

var a22 = new styleButton();
            a22.setText("Time: 3:00am");
            a22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(21000);
                }
            }));
            timeLayout.addView(a22);

var a23 = new styleButton();
            a23.setText("Time: 4:00am");
            a23.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(22000);
                }
            }));
            timeLayout.addView(a23);

var a24 = new styleButton();
            a24.setText("Time: 5:00am");          
            a24.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(23000);
                }
            }));
            timeLayout.addView(a24);
	
var ct1 = new styleButton();
            ct1.setText("Custom time");        
            ct1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
custime();
			time.dismiss();
                }
            }));
            timeLayout.addView(ct1);

            time = new android.widget.PopupWindow(timeLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)time.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      if(default1==false)time.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
timeLayout1.setBackgroundDrawable(bg);
timeLayout1.setPadding(20,0,20,0);
            time.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}
		
var weather = new styleButton();
weather.setText("Weather menu");
if(getLanguage=="it_IT")weather.setText("Menu del tempo");
if(getLanguage=="es_MX")weather.setText("Menu de tiempo");
if(getLanguage=="ko_KR")weather.setText("날씨 메뉴");
if(getLanguage=="de_DE")weather.setText("Wetter menu");
weather.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             weather_menu();
             menu.dismiss();
			}
		});
		menuLayout.addView(weather);
		
		function weather_menu(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var weatherLayout = new android.widget.LinearLayout(MainActivity);
            var weatherScroll = new android.widget.ScrollView(MainActivity);
            var weatherLayout1 = new android.widget.LinearLayout(MainActivity);
            weatherLayout.setOrientation(1);
            weatherLayout1.setOrientation(1);
            weatherScroll.addView(weatherLayout);
            weatherLayout1.addView(weatherScroll);
            
            var exit = new styleButton();
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             weather.dismiss();
             showMenuBtn();
			}
		});
		weatherLayout.addView(exit);
		
		var button = new styleButton();
            button.setText("Custom weather");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
			setDialogW();
			weather.dismiss();
                }
            }));
            weatherLayout.addView(button);
			
	    var button3 = new styleButton();
            button3.setText("Rain");
            button3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setRainLevel(1);
                }
            }));
            weatherLayout.addView(button3);
			
var button4 = new styleButton();
            button4.setText("Lightning");
            button4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setLightningLevel(1);
                }
            }));
            weatherLayout.addView(button4);

var button2 = new styleButton();
            button2.setText("Clear weather");
            button2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setRainLevel(0);
Level.setLightningLevel(0);
                }
            }));
            weatherLayout.addView(button2);
	
	var itembutton = new styleButton();
itembutton.setText("Item rain");
itembutton.setTextColor(android.graphics.Color.RED);
if(itemrain==true)itembutton.setTextColor(android.graphics.Color.GREEN);
            itembutton.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             itemrain?itemrain=false:itemrain=true;
itembutton.setText("Item rain");
if(itemrain == true){
itembutton.setTextColor(android.graphics.Color.GREEN);
itementer();
weather.dismiss();
itemrain = true;
}
if(itemrain == false){
itembutton.setTextColor(android.graphics.Color.RED);
clientMessage(client+"Item rain off");
itemrain = false;
rainitem = false;
}
                }
            }));
            weatherLayout.addView(itembutton);

            weather = new android.widget.PopupWindow(weatherLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
            if(default1==true)weather.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
      if(default1==false)weather.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
weatherLayout1.setBackgroundDrawable(bg);
weatherLayout1.setPadding(20,0,20,0);
            weather.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}
            
            menu = new android.widget.PopupWindow(menuLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
           if(default1==true)menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
           if(mcpetheme==true)menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#94857f")));
		   if(default1==false)menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
		   var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
menuLayout1.setBackgroundDrawable(bg);
menuLayout1.setPadding(20,0,20,0);
            menu.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}

/********************************/

function infoView(){
MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var infoLayout = new android.widget.LinearLayout(MainActivity);
            
            var infoScroll = new android.widget.ScrollView(MainActivity);
            
            var infoLayout1 = new android.widget.LinearLayout(MainActivity);
            infoLayout.setOrientation(1);
            infoLayout1.setOrientation(1);
            
            infoScroll.addView(infoLayout);
            infoLayout1.addView(infoScroll);

var exit = new styleButton();
            exit.setText("Exit");
exit.setTextColor(android.graphics.Color.RED);
            exit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){

                info.dismiss();

		showMenuBtn();
                }
            }));
            infoLayout.addView(exit);
			
            var refresh = new styleButton();
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
			
	    var username = new android.widget.TextView(MainActivity);
            username.setTextSize(15);
	    username.setText("Username: "+Player.getName(Player.getEntity()));
            username.setTextColor(android.graphics.Color.WHITE);
            infoLayout.addView(username);
			
	    var dimension = new android.widget.TextView(MainActivity);
            dimension.setTextSize(15);
            dimension.setText("Dimension: "+Player.getDimension());
            dimension.setTextColor(android.graphics.Color.WHITE);
            infoLayout.addView(dimension);
			
	    var world = new android.widget.TextView(MainActivity);
            world.setTextSize(15);
            world.setText("World: "+Level.getWorldName());
            world.setTextColor(android.graphics.Color.WHITE);
            infoLayout.addView(world);
			
	    var biome = new android.widget.TextView(MainActivity);
            biome.setTextSize(15);
            biome.setText("Biome: "+Level.getBiomeName());
            biome.setTextColor(android.graphics.Color.WHITE);
            infoLayout.addView(biome);
			
			Level.getRainLevel();
	    var rain = new android.widget.TextView(MainActivity);
            rain.setTextSize(15);
	    rain.setText("Weather: "+Math.round(Level.getRainLevel()));
            rain.setTextColor(android.graphics.Color.WHITE);
            infoLayout.addView(rain);
			
	    var time = new android.widget.TextView(MainActivity);
            time.setTextSize(15);
	    time.setText("Time: "+Level.getTime());
            time.setTextColor(android.graphics.Color.WHITE);
            infoLayout.addView(time);
			
	    var difficulty = new android.widget.TextView(MainActivity);
            difficulty.setTextSize(15);
	    difficulty.setText("Difficulty: "+Level.getDifficulty());
            difficulty.setTextColor(android.graphics.Color.WHITE);
            infoLayout.addView(difficulty);
            
            var maxHearts = new android.widget.TextView(MainActivity);
            maxHearts.setTextSize(15);
	    maxHearts.setText("Max hearts: "+Entity.getMaxHealth(getPlayerEnt()));
            maxHearts.setTextColor(android.graphics.Color.WHITE);
            infoLayout.addView(maxHearts);
		
		var renderType = new android.widget.TextView(MainActivity);
            renderType.setTextSize(15);
	    renderType.setText("Render type: "+Entity.getRenderType(getPlayerEnt()));
            renderType.setTextColor(android.graphics.Color.WHITE);
            infoLayout.addView(renderType);
		
		var gameType = new android.widget.TextView(MainActivity);
            gameType.setTextSize(15);
	    gameType.setText("Game mode: "+Level.getGameMode());
            gameType.setTextColor(android.graphics.Color.WHITE);
            infoLayout.addView(gameType);
		
		var lang = new android.widget.TextView(MainActivity);
            lang.setTextSize(15);
	    lang.setText("Language: "+ModPE.getLanguage());
            lang.setTextColor(android.graphics.Color.WHITE);
            infoLayout.addView(lang);
		
		var vere = new android.widget.TextView(MainActivity);
            vere.setTextSize(15);
	    vere.setText("Version: "+ModPE.getMinecraftVersion());
            vere.setTextColor(android.graphics.Color.WHITE);
            infoLayout.addView(vere);
		
		var skin = new android.widget.TextView(MainActivity);
            skin.setTextSize(15);
	    skin.setText("Mob skin: "+Entity.getMobSkin(getPlayerEnt()));
            skin.setTextColor(android.graphics.Color.WHITE);
            infoLayout.addView(skin);

info = new android.widget.PopupWindow(infoLayout1, dip2px(500), dip2px(500));

info = new android.widget.PopupWindow(infoLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth()/2, MainActivity.getWindowManager().getDefaultDisplay().getHeight()/1);
	  var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(android.graphics.Color.TRANSPARENT);
      bg.setStroke(10,GUIStroke);
infoLayout1.setBackgroundDrawable(bg);
infoLayout1.setPadding(20,0,20,0);
info.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
            info.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
            }catch(error){
                android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
    }}));
}

function entityAddedHook(entity){
if(entind){
var x = Entity.getX(entity);
var y = Entity.getY(entity);
var z = Entity.getZ(entity);
var name = Entity.getNameTag(entity);
	if(name != null){
	if(!name.match(' ') && Entity.getEntityTypeId(entity) != 64 && entity != null){
clientMessage(client+"Entity added:\n"+Entity.getNameTag(entity)+" / "+Entity.getEntityTypeId(entity)+"\nx "+Math.round(x)+" y "+Math.round(y)+" z "+Math.round(z));
	}
	}
}
	if(dropind){
var x = Entity.getX(entity);
var y = Entity.getY(entity);
var z = Entity.getZ(entity);
	if(Entity.getEntityTypeId(entity) == 64){
clientMessage(client+"Entity added:\n(Dropped item) / "+Entity.getEntityTypeId(entity)+"\nx "+Math.round(x)+" y "+Math.round(y)+" z "+Math.round(z));
	}
}
	if(noentity){
		for(var i = 0; i < 5; i++){
		if(entity != getPlayerEnt()){
		//Entity.setHealth(entity, 0); setting this more than once can glitch the entity
		Entity.setFireTicks(entity, 5);
			if(i==2)i = 0;
		}
		}
	}
}

function entityRemovedHook(entity){
if(entind){
var x = Entity.getX(entity);
var y = Entity.getY(entity);
var z = Entity.getZ(entity);
var name = Entity.getNameTag(entity);
	if(!name.match(' ') && Entity.getEntityTypeId(entity) != 64 && entity != null){
clientMessage(client+"Entity removed:\n"+Entity.getNameTag(entity)+" / "+Entity.getEntityTypeId(entity)+"\nx "+Math.round(x)+" y "+Math.round(y)+" z "+Math.round(z));
	}
}
	if(dropind){
var x = Entity.getX(entity);
var y = Entity.getY(entity);
var z = Entity.getZ(entity);
	if(Entity.getEntityTypeId(entity) == 64){
clientMessage(client+"Entity removed:\n(Dropped item) / "+Entity.getEntityTypeId(entity)+"\nx "+Math.round(x)+" y "+Math.round(y)+" z "+Math.round(z));
	}
}
}

function screenChangeHook(screenName){
if(screenind)android.widget.Toast.makeText(ctx, screenName, 1).show();
}

function serverMessageReceiveHook(str) {
	ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
	if(ttot)android.widget.Toast.makeText(ctx, str, 1).show();
	}});
	if(chatind){
	clientMessage(client+str);
	android.widget.Toast.makeText(ctx, str, 1).show();
	}
if(autoply1 && str != null){
if(Server.getPort() != "0")Server.sendChat("yee.");
}
}

function chatHook(str){
if(autoply1 && str != null){
if(Server.getPort() == "0")clientMessage("yee.");
}
	if(chatind){
	clientMessage(client+str);
	android.widget.Toast.makeText(ctx, str, 1).show();
	}
}


function attackHook(attacker, victim) {
	if(instakilled) {
		Entity.setHealth(victim, 1);
	}
	if(firepunch) {
Entity.setFireTicks(victim, 5);
	}
if(saddle)rideAnimal(attacker, victim);
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
	if(hitparticles){
		var x = Entity.getX(victim) - getPlayerX();
		var y = Entity.getY(victim) - getPlayerY();
		var z = Entity.getZ(victim) - getPlayerZ();
if(particle1)Level.addParticle(ParticleType.angryVillager, x, y, z, 0, 0, 0, 5);
if(particle2)Level.addParticle(ParticleType.bubble, x, y, z, 0, 0, 0, 150);
if(particle3)Level.addParticle(ParticleType.cloud, x, y, z, 0, 0, 0, 150);
if(particle4)Level.addParticle(ParticleType.crit, x, y, z, 0, 0, 0, 50);
if(particle5)Level.addParticle(ParticleType.dripLava, x, y, z, 0, 0, 0, 150);
if(particle6)Level.addParticle(ParticleType.dripWater, x, y, z, 0, 0, 0, 150);
if(particle7)Level.addParticle(ParticleType.enchantmenttable, x, y, z, 0, 0, 0, 150);
if(particle8)Level.addParticle(ParticleType.fallingDust, x, y, z, 0, 0, 0, 150);
if(particle9)Level.addParticle(ParticleType.flame, x, y, z, 0, 0, 0, 150);
if(particle10)Level.addParticle(ParticleType.happyVillager, x, y, z, 0, 0, 0, 50);
if(particle11)Level.addParticle(ParticleType.heart, x, y, z, 0, 0, 0, 5);
if(particle12)Level.addParticle(ParticleType.hugeexplosion, x, y, z, 0, 0, 0, 150);
if(particle13)Level.addParticle(ParticleType.hugeexplosionSeed, x, y, z, 0, 0, 0, 10);
if(particle14)Level.addParticle(ParticleType.ink, x, y, z, 0, 0, 0, 150);
if(particle15)Level.addParticle(ParticleType.itemBreak, x, y, z, 0, 0, 0, 150);
if(particle16)Level.addParticle(ParticleType.lava, x, y, z, 0, 0, 0, 150);
if(particle17)Level.addParticle(ParticleType.mobFlame, x, y, z, 0, 0, 0, 150);
if(particle18)Level.addParticle(ParticleType.note, x, y, z, 0, 0, 0, 150);
if(particle19)Level.addParticle(ParticleType.portal, x, y, z, 0, 0, 0, 150);
if(particle20)Level.addParticle(ParticleType.rainSplash, x, y, z, 0, 0, 0, 150);
if(particle21)Level.addParticle(ParticleType.redstone, x, y, z, 0, 0, 0, 10);
if(particle22)Level.addParticle(ParticleType.slime, x, y, z, 0, 0, 0, 150);
if(particle23)Level.addParticle(ParticleType.smoke, x, y, z, 0, 0, 0, 150);
if(particle24)Level.addParticle(ParticleType.snowballpoof, x, y, z, 0, 0, 0, 150);
if(particle25)Level.addParticle(ParticleType.spell, x, y, z, 0, 0, 0, 150);
if(particle26)Level.addParticle(ParticleType.splash, x, y, z, 0, 0, 0, 150);
if(particle27)Level.addParticle(ParticleType.suspendedTown, x, y, z, 0, 0, 0, 150);
if(particle28)Level.addParticle(ParticleType.terrain, x, y, z, 0, 0, 0, 150);
if(particle29)Level.addParticle(ParticleType.waterWake, x, y, z, 0, 0, 0, 150);
if(particle30)Level.addParticle(ParticleType.largeexplode, x, y, z, 0, 0, 0, 150);
if(particle31)Level.addParticle(ParticleType.spell2, x, y, z, 0, 0, 0, 150);
if(particle32)Level.addParticle(ParticleType.spell3, x, y, z, 0, 0, 0, 150);
if(particle33)Level.addParticle(ParticleType.carrotboost, x, y, z, 0, 0, 0, 150);
if(particle34)Level.addParticle(ParticleType.witchspell, x, y, z, 0, 0, 0, 150);
}
	if(hitmorph)Entity.setRenderType(Player.getEntity(), Entity.getRenderType(victim));
	if(hitrmef)Entity.removeAllEffects(victim);
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
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 11) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 12) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 13) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 14) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 15) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 16) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 17) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 18) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 19) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 20) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 21) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 22) {
			Entity.setHealth(mobs[a], 0);
			}
			if (Entity.getEntityTypeId(mobs[a]) == 23) {
			Entity.setHealth(mobs[a], 0);
			}
			if (Entity.getEntityTypeId(mobs[a]) == 24) {
			Entity.setHealth(mobs[a], 0);
			}
			if (Entity.getEntityTypeId(mobs[a]) == 25) {
			Entity.setHealth(mobs[a], 0);
			}
			if (Entity.getEntityTypeId(mobs[a]) == 26) {
			Entity.setHealth(mobs[a], 0);
			}
			if (Entity.getEntityTypeId(mobs[a]) == 27) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 32) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 33) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 34) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 35) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 36) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 37) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 38) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 39) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 40) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 41) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 42) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 43) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 44) {
			Entity.setHealth(mobs[a], 0);
			}
            if (Entity.getEntityTypeId(mobs[a]) == 45) {
			Entity.setHealth(mobs[a], 0);
			}
			if (Entity.getEntityTypeId(mobs[a]) == 46) {
			Entity.setHealth(mobs[a], 0);
			}
			if (Entity.getEntityTypeId(mobs[a]) == 47) {
			Entity.setHealth(mobs[a], 0);
			}
			if (Entity.getEntityTypeId(mobs[a]) == 48) {
			Entity.setHealth(mobs[a], 0);
			}
			if (Entity.getEntityTypeId(mobs[a]) == 49) {
			Entity.setHealth(mobs[a], 0);
			}
			if (Entity.getEntityTypeId(mobs[a]) == 50) {
			Entity.setHealth(mobs[a], 0);
			}
			if (Entity.getEntityTypeId(mobs[a]) == 51) {
			Entity.setHealth(mobs[a], 0);
			}
			if (Entity.getEntityTypeId(mobs[a]) == 52) {
			Entity.setHealth(mobs[a], 0);
			}
		if (Entity.getEntityTypeId(mobs[a]) == 28) {
			Entity.setHealth(mobs[a], 0);
			}
			if (Entity.getEntityTypeId(mobs[a]) == 54) {
			Entity.setHealth(mobs[a], 0);
			}
			if (Entity.getEntityTypeId(mobs[a]) == 55) {
			Entity.setHealth(mobs[a], 0);
			}
			if (Entity.getEntityTypeId(mobs[a]) == 53) {
			Entity.setHealth(mobs[a], 0);
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
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 11) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 12) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 13) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 14) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 15) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 16) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 17) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 18) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 19) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 20) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 21) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 22) {
			Entity.setImmobile(uuid,immobile);
			}
			if (Entity.getEntityTypeId(mobs[b]) == 23) {
			Entity.setImmobile(uuid,immobile);
			}
			if (Entity.getEntityTypeId(mobs[b]) == 24) {
			Entity.setImmobile(uuid,immobile);
			}
			if (Entity.getEntityTypeId(mobs[b]) == 25) {
			Entity.setImmobile(uuid,immobile);
			}
			if (Entity.getEntityTypeId(mobs[b]) == 26) {
			Entity.setImmobile(uuid,immobile);
			}
			if (Entity.getEntityTypeId(mobs[b]) == 27) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 32) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 33) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 34) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 35) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 36) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 37) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 38) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 39) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 40) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 41) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 42) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 43) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 44) {
			Entity.setImmobile(uuid,immobile);
			}
            if (Entity.getEntityTypeId(mobs[b]) == 45) {
			Entity.setImmobile(uuid,immobile);
			}
			if (Entity.getEntityTypeId(mobs[b]) == 46) {
			Entity.setImmobile(uuid,immobile);
			}
			if (Entity.getEntityTypeId(mobs[b]) == 47) {
			Entity.setImmobile(uuid,immobile);
			}
			if (Entity.getEntityTypeId(mobs[b]) == 48) {
			Entity.setImmobile(uuid,immobile);
			}
			if (Entity.getEntityTypeId(mobs[b]) == 49) {
			Entity.setImmobile(uuid,immobile);
			}
			if (Entity.getEntityTypeId(mobs[b]) == 50) {
			Entity.setImmobile(uuid,immobile);
			}
			if (Entity.getEntityTypeId(mobs[b]) == 51) {
			Entity.setImmobile(uuid,immobile);
			}
			if (Entity.getEntityTypeId(mobs[b]) == 52) {
			Entity.setImmobile(uuid,immobile);
			}
		if (Entity.getEntityTypeId(mobs[b]) == 28) {
			Entity.setImmobile(uuid,immobile);
			}
			if (Entity.getEntityTypeId(mobs[b]) == 54) {
			Entity.setImmobile(uuid,immobile);
			}
			if (Entity.getEntityTypeId(mobs[b]) == 55) {
			Entity.setImmobile(uuid,immobile);
			}
			if (Entity.getEntityTypeId(mobs[b]) == 53) {
			Entity.setImmobile(uuid,immobile);
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
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 11) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 12) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 13) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 14) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 15) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 16) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 17) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 18) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 19) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 20) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 21) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 22) {
			Entity.setFireTicks(mobs[c],5);
			}
			if (Entity.getEntityTypeId(mobs[c]) == 23) {
			Entity.setFireTicks(mobs[c],5);
			}
			if (Entity.getEntityTypeId(mobs[c]) == 24) {
			Entity.setFireTicks(mobs[c],5);
			}
			if (Entity.getEntityTypeId(mobs[c]) == 25) {
			Entity.setFireTicks(mobs[c],5);
			}
			if (Entity.getEntityTypeId(mobs[c]) == 26) {
			Entity.setFireTicks(mobs[c],5);
			}
			if (Entity.getEntityTypeId(mobs[c]) == 27) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 32) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 33) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 34) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 35) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 36) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 37) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 38) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 39) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 40) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 41) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 42) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 43) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 44) {
			Entity.setFireTicks(mobs[c],5);
			}
            if (Entity.getEntityTypeId(mobs[c]) == 45) {
			Entity.setFireTicks(mobs[c],5);
			}
			if (Entity.getEntityTypeId(mobs[c]) == 46) {
			Entity.setFireTicks(mobs[c],5);
			}
			if (Entity.getEntityTypeId(mobs[c]) == 47) {
			Entity.setFireTicks(mobs[c],5);
			}
			if (Entity.getEntityTypeId(mobs[c]) == 48) {
			Entity.setFireTicks(mobs[c],5);
			}
			if (Entity.getEntityTypeId(mobs[c]) == 49) {
			Entity.setFireTicks(mobs[c],5);
			}
			if (Entity.getEntityTypeId(mobs[c]) == 50) {
			Entity.setFireTicks(mobs[c],5);
			}
			if (Entity.getEntityTypeId(mobs[c]) == 51) {
			Entity.setFireTicks(mobs[c],5);
			}
			if (Entity.getEntityTypeId(mobs[c]) == 52) {
			Entity.setFireTicks(mobs[c],5);
			}
		if (Entity.getEntityTypeId(mobs[c]) == 28) {
			Entity.setFireTicks(mobs[c],5);
			}
			if (Entity.getEntityTypeId(mobs[c]) == 54) {
			Entity.setFireTicks(mobs[c],5);
			}
			if (Entity.getEntityTypeId(mobs[c]) == 55) {
			Entity.setFireTicks(mobs[c],5);
			}
			if (Entity.getEntityTypeId(mobs[c]) == 53) {
			Entity.setFireTicks(mobs[c],5);
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
		if (Entity.getEntityTypeId(mobs[n]) == 28) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Polar bear "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
			if (Entity.getEntityTypeId(mobs[n]) == 54) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Shulker "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
			if (Entity.getEntityTypeId(mobs[n]) == 55) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Endermite "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
            }
			}
			if (Entity.getEntityTypeId(mobs[n]) == 53) {
			if(Entity.getNameTag(mobs[n]) == ""){
                Entity.setNameTag(mobs[n], " Ender dragon "+Entity.getHealth(mobs[n])+"/"+Entity.getMaxHealth(mobs[n]));
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
	if(doubledrop == true){
		Level.getGameMode();
		if(Level.getGameMode() == 1 || Level.getGameMode() == 3){
		var broke = Level.getTile(x, y, z);
		Level.dropItem(x,y,z,0,broke,broke * 2);
		}
		if(Level.getGameMode() == 0 || Level.getGameMode() == 2){
		var broke = Level.getTile(x, y, z);
		Level.dropItem(x,y,z,0,broke,broke + 1);
		}
	}
	if(destroyind){
	var broke = Level.getTile(x, y, z);
	clientMessage(client+"broke: "+broke+"\nx "+Math.round(x)+" y "+Math.round(y)+" z "+Math.round(z)+"\nSide: "+side);
	}
}

function startDestroyBlock(x, y, z, side)
{
if(block == true)preventDefault()
}

function useItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage){
if(deadchat){
	if(blockId == 63 || blockId == 68){
	var notex = x;
	var notey = y;
	var notez = z;
	
	signEditor();
}
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
Entity.setPosition(Player.getEntity(), x, y + 2.62, z);
}
if(tapnuke)explode(x,y,z,5);
if(tapid)clientMessage(client + "Block ID: "+blockId+"\nTapped with: "+itemId+"\n"+" X: "+x+" Y: "+y+" Z: "+z+"\nFriction: "+Block.getFriction(blockId)+"\nSide: "+side+"\nBlock damage: "+blockDamage+"\nItem damage: "+itemDamage);
if(tapjump)setVelY(getPlayerEnt(),0.5);
	if(tapParti){
if(tapParti){
if(particle1)Level.addParticle(ParticleType.angryVillager, x, y+1, z, 0, 0, 0, 5);
if(particle2)Level.addParticle(ParticleType.bubble, x, y+1, z, 0, 0, 0, 150);
if(particle3)Level.addParticle(ParticleType.cloud, x, y+1, z, 0, 0, 0, 150);
if(particle4)Level.addParticle(ParticleType.crit, x, y+1, z, 0, 0, 0, 50);
if(particle5)Level.addParticle(ParticleType.dripLava, x, y+1, z, 0, 0, 0, 150);
if(particle6)Level.addParticle(ParticleType.dripWater, x, y+1, z, 0, 0, 0, 150);
if(particle7)Level.addParticle(ParticleType.enchantmenttable, x, y+1, z, 0, 0, 0, 150);
if(particle8)Level.addParticle(ParticleType.fallingDust, x, y+1, z, 0, 0, 0, 150);
if(particle9)Level.addParticle(ParticleType.flame, x, y+1, z, 0, 0, 0, 150);
if(particle10)Level.addParticle(ParticleType.happyVillager, x, y+1, z, 0, 0, 0, 50);
if(particle11)Level.addParticle(ParticleType.heart, x, y+1, z, 0, 0, 0, 5);
if(particle12)Level.addParticle(ParticleType.hugeexplosion, x, y+1, z, 0, 0, 0, 150);
if(particle13)Level.addParticle(ParticleType.hugeexplosionSeed, x, y+1, z, 0, 0, 0, 10);
if(particle14)Level.addParticle(ParticleType.ink, x, y+1, z, 0, 0, 0, 150);
if(particle15)Level.addParticle(ParticleType.itemBreak, x, y+1, z, 0, 0, 0, 150);
if(particle16)Level.addParticle(ParticleType.lava, x, y+1, z, 0, 0, 0, 150);
if(particle17)Level.addParticle(ParticleType.mobFlame, x, y+1, z, 0, 0, 0, 150);
if(particle18)Level.addParticle(ParticleType.note, x, y+1, z, 0, 0, 0, 150);
if(particle19)Level.addParticle(ParticleType.portal, x, y+1, z, 0, 0, 0, 150);
if(particle20)Level.addParticle(ParticleType.rainSplash, x, y+1, z, 0, 0, 0, 150);
if(particle21)Level.addParticle(ParticleType.redstone, x, y+1, z, 0, 0, 0, 10);
if(particle22)Level.addParticle(ParticleType.slime, x, y+1, z, 0, 0, 0, 150);
if(particle23)Level.addParticle(ParticleType.smoke, x, y+1, z, 0, 0, 0, 150);
if(particle24)Level.addParticle(ParticleType.snowballpoof, x, y+1, z, 0, 0, 0, 150);
if(particle25)Level.addParticle(ParticleType.spell, x, y+1, z, 0, 0, 0, 150);
if(particle26)Level.addParticle(ParticleType.splash, x, y+1, z, 0, 0, 0, 150);
if(particle27)Level.addParticle(ParticleType.suspendedTown, x, y+1, z, 0, 0, 0, 150);
if(particle28)Level.addParticle(ParticleType.terrain, x, y+1, z, 0, 0, 0, 150);
if(particle29)Level.addParticle(ParticleType.waterWake, x, y+1, z, 0, 0, 0, 150);
if(particle30)Level.addParticle(ParticleType.largeexplode, x, y+1, z, 0, 0, 0, 150);
if(particle31)Level.addParticle(ParticleType.spell2, x, y+1, z, 0, 0, 0, 150);
if(particle32)Level.addParticle(ParticleType.spell3, x, y+1, z, 0, 0, 0, 150);
if(particle33)Level.addParticle(ParticleType.carrotboost, x, y+1, z, 0, 0, 0, 150);
if(particle34)Level.addParticle(ParticleType.witchspell, x, y+1, z, 0, 0, 0, 150);
}
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
if(particle33)Level.addParticle(ParticleType.carrotboost, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(particle34)Level.addParticle(ParticleType.witchspell, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

if(onlynight)Level.setTime(15000);

if(onlyday)Level.setTime(0);
	
	if(antivoid){
		Math.round(getPlayerY());
		if(Math.round(getPlayerY())=="-3"){
			clientMessage(client + "You were at void!");
			Entity.setPosition(Player.getEntity(), getPlayerX(), 70, getPlayerZ()+5);
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
	if(icewalk){
if(Level.getTile(getPlayerX(), getPlayerY() -2, getPlayerZ())!="0" || Level.getTile(getPlayerX(), getPlayerY() -2, getPlayerZ())!="79"){
	Level.setTile(getPlayerX() +1, getPlayerY() -2, getPlayerZ(), 79, 0);
	 Level.setTile(getPlayerX() +2, getPlayerY() -2, getPlayerZ(), 79, 0);
	 Level.setTile(getPlayerX() +3, getPlayerY() -2, getPlayerZ(), 79, 0);
	 Level.setTile(getPlayerX() +4, getPlayerY() -2, getPlayerZ(), 79, 0);
	 Level.setTile(getPlayerX() -1, getPlayerY() -2, getPlayerZ(), 79, 0);
	 Level.setTile(getPlayerX() -2, getPlayerY() -2, getPlayerZ(), 79, 0);
	 Level.setTile(getPlayerX() -3, getPlayerY() -2, getPlayerZ(), 79, 0);
	 Level.setTile(getPlayerX() -4, getPlayerY() -2, getPlayerZ(), 79, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ(), 79, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ() +1, 79, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ() +2, 79, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ() +3, 79, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ() +4, 79, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ() -1, 79, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ() -2, 79, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ() -3, 79, 0);
	 Level.setTile(getPlayerX(), getPlayerY() -2, getPlayerZ() -4, 79, 0);
	}
}
if(changeSpeed==true)changeSpeedOnBlock();
if(brightness==true)bright();
if(lowhealth==true)spawnIfLowHealth();
if(fasteat==true)fastEat();
if(xray==true)xrayRepeat();
if (spider && Utils.Player.isCollidedHorizontally()) {
		if(getTile(Player.getX()+1, Player.getY(), Player.getZ())> 0 || getTile(Player.getX()-1, Player.getY(), Player.getZ())> 0 || getTile(Player.getX(), Player.getY(), Player.getZ()+1)> 0 || getTile(Player.getX(), Player.getY(), Player.getZ()-1)> 0 || getTile(Player.getX()+1, Player.getY(), Player.getZ()-1)> 0 || getTile(Player.getX()-1, Player.getY(), Player.getZ()+1)> 0) {
        setVelY(Player.getEntity(), 0.6);
              }
	    }
	    if(jump) {
		if(Entity.getVelY(getPlayerEnt())< -0.1) {
			setVelY(getPlayerEnt(),'-' + 0 + '.' + jumpheight);
		}
		if(Entity.getVelY(getPlayerEnt())< 0.35 && Entity.getVelY(getPlayerEnt())> 0.2 && can==1 && canGetHP==1) {
			setVelY(getPlayerEnt(), 0 + '.' + jumpheight);
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
			if(y!=0)Entity.setPosition(Player.getEntity(), x, y + 2.62, z);
		}
	}
	if(keepHotbar){
	Player.setSelectedSlotId(Player.getSelectedSlotId());
	Player.getCarriedItem();
	Player.setSelectedSlotId(Player.getCarriedItem());
	}
	if(itemIndi)ModPE.showTipMessage(client+"\nHeld: "+Player.getCarriedItem()+":"+Player.getCarriedItemData()+", Amount: "+Player.getCarriedItemCount());
	if(bhop){
		var x=getPlayerX();
		    var y=getPlayerY();
			    var z=getPlayerZ();
		if(Entity.getVelX(Player.getEntity())>0.1 && getTile(x, y +2, z) == 0){
			if(getTile(Player.getX(), Player.getY()-2, Player.getZ())>0){
				Entity.setVelY(Player.getEntity(), 0.4);
			}
		}
		if(Entity.getVelX(Player.getEntity())<-0.1 && getTile(x, y +2, z) == 0){
			if(getTile(Player.getX(), Player.getY()-2, Player.getZ())>0){
				Entity.setVelY(Player.getEntity(), 0.4);
			}
		}
		if(Entity.getVelZ(Player.getEntity())>0.1 && getTile(x, y +2, z) == 0){
			if(getTile(Player.getX(), Player.getY()-2, Player.getZ())>0){
				Entity.setVelY(Player.getEntity(), 0.4);
			}
		}
		if(Entity.getVelZ(Player.getEntity())<-0.1 && getTile(x, y +2, z) == 0){
			if(getTile(Player.getX(), Player.getY()-2, Player.getZ())>0){
				Entity.setVelY(Player.getEntity(), 0.4);
			}
		}
	}
	if(facedInfo){
		if(Entity.getEntityTypeId(Player.getPointedEntity()) == 63 && Entity.getArmorDamage(Player.getPointedEntity(), 0) != 0 || Entity.getArmorDamage(Player.getPointedEntity(), 1) != 0 || Entity.getArmorDamage(Player.getPointedEntity(), 2) != 0 || Entity.getArmorDamage(Player.getPointedEntity(), 3) != 0){
			ModPE.showTipMessage(client + "\nName: "+Player.getName(Player.getPointedEntity())+", RenderType: "+Entity.getRenderType(Player.getPointedEntity())+", Health: "+Entity.getHealth(Player.getPointedEntity())+"/"+Entity.getMaxHealth(Player.getPointedEntity())+"\nHead: "+Entity.getArmorDamage(Player.getPointedEntity(), 0)+", Chest: "+Entity.getArmorDamage(Player.getPointedEntity(), 1)+", Leggings: "+Entity.getArmorDamage(Player.getPointedEntity(), 2)+", Boots: "+Entity.getArmorDamage(Player.getPointedEntity(), 3));
		} else {
			ModPE.showTipMessage(client + "\nName: "+Player.getName(Player.getPointedEntity())+", RenderType: "+Entity.getRenderType(Player.getPointedEntity())+", Health: "+Entity.getHealth(Player.getPointedEntity())+"/"+Entity.getMaxHealth(Player.getPointedEntity())+"");
		}
	}
	if(facedInfo2){
	if(Entity.getEntityTypeId(Player.getPointedEntity()) <= 63){
			ModPE.showTipMessage(client + "\nName: "+Player.getName(Player.getPointedEntity())+", RenderType: "+Entity.getRenderType(Player.getPointedEntity())+", Health: "+Entity.getHealth(Player.getPointedEntity())+"/"+Entity.getMaxHealth(Player.getPointedEntity())+"");
		}
	}
	if(onfriction){
	Block.setFriction(79, 0.6000000238418579);
	Block.setFriction(174, 0.6000000238418579);
	Block.setFriction(88, 0.6000000238418579);
	for(var i = 0; i < 100; i++){
		Block.setFriction(i, 2); /**2 is very fast, looking for a smoother speed later on.*/
	}
	}
	if(rainitem==true){
Level.dropItem(getPlayerX()+3,getPlayerY()+11,getPlayerZ(),0,rainId,1);
Level.dropItem(getPlayerX()+7,getPlayerY()+11,getPlayerZ(),0,rainId,1);
Level.dropItem(getPlayerX(),getPlayerY()+11,getPlayerZ()+3,0,rainId,1);
Level.dropItem(getPlayerX(),getPlayerY()+11,getPlayerZ()+7,0,rainId,1);
Level.dropItem(getPlayerX()+3,getPlayerY()+11,getPlayerZ()+3,0,rainId,1);
Level.dropItem(getPlayerX()+7,getPlayerY()+11,getPlayerZ()+7,0,rainId,1);
Level.dropItem(getPlayerX()-3,getPlayerY()+11,getPlayerZ()-3,0,rainId,1);
Level.dropItem(getPlayerX()-7,getPlayerY()+11,getPlayerZ()-7,0,rainId,1);
Level.dropItem(getPlayerX()-3,getPlayerY()+11,getPlayerZ()+3,0,rainId,1);
Level.dropItem(getPlayerX()-7,getPlayerY()+11,getPlayerZ()+7,0,rainId,1);
Level.dropItem(getPlayerX()+3,getPlayerY()+11,getPlayerZ()-3,0,rainId,1);
Level.dropItem(getPlayerX()+7,getPlayerY()+11,getPlayerZ()-7,0,rainId,1);
}
if(autosword){
var swords = [268,272,267,283,276]; //swords
var slots = 51; //slots
for(var i = 0; i < slots; i++){
var items = Player.getInventorySlot(i); //items
if(Player.getInventorySlot(i) == swords[i]){ //if slot is a sword
var sword = Player.getInventorySlot(i); //define which slot that sword is in
var damage = Player.getInventorySlotData(sword); //get that swords damage
var itemsDamage = Player.getInventorySlotData(Player.getInventorySlot(i)); //get all swords damage
if(damage < itemsDamage){ //if damage is less than other damages
Player.setSelectedSlotId(sword); //set that sword
Player.setSelectedSlotId(sword);
if(i == 50)i = 0;
}
}
}
}
	if(noknock){
if(Entity.getVelY(Player.getEntity())>0.1){
Entity.setVelY(Player.getEntity(), -0.5);
		}
	}
	if(checkping){
	var ping = onBackground.ping();
	ModPE.showTipMessage(ping+" ms.");
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
        file.delete();
	android.widget.Toast.makeText(ctx, "Restart Minecraft PE", 1).show();
}

function getClient(){
 var line, string = "";
    var file = new java.io.File( android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/clientId.txt/");
    var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/clientId.txt/" ; 
    if(!file.exists()){
    clientMessage(client + "The file doesn't exist"); 
  java.io.File(path).mkdirs(); 
    }
    else {
    var readfile = new java.io.BufferedReader(new java.io.FileReader(file));
    while((line = readfile.readLine()) != null) {
        var t3 = line + java.lang.System.getProperty("line.seperator");
        string += t3.substring(0, t3.length - 4);
        var t4 = line;
        if((line = readfile.readLine()) != null) string += "\n";
        line = t4;
    } 
    cidm8=parseInt(string);
    clientMessage(client + cidm8);       
    }
}

function scc() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
sccD = new android.widget.PopupWindow();
var Layer5 = new android.widget.LinearLayout(MainActivity);
var sc1 = new styleInput();
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
betterWebview('view-source:' + sc2);
print("Loading web page");
}
});

sccD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
sccD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
sccD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("html dialog:"+e);
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
ipluD = new android.widget.PopupWindow();
var Layer4 = new android.widget.LinearLayout(ctx);
var ip1 = new styleInput();
var Dialog = new android.app.Dialog(ctx);
var Exit = new styleButton(ctx);

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
betterWebview('http://ip-api.com/json/' + ip);
print("Loading web page");
}
});

ipluD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
ipluD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
ipluD.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("trace dialog:"+e);
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
pipD = new android.widget.PopupWindow();
var Layer4 = new android.widget.LinearLayout(ctx);
var ddip = new styleInput();
var ddip2 = new styleInput();
var Dialog = new android.app.Dialog(ctx);
var Exit = new styleButton(ctx);

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
betterWebview('http://mcapi.ca/query/'+ply+':'+poy+'/list');
android.widget.Toast.makeText(ctx, "AlphaHack: Loading web page", 1).show();
}
});

pipD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
pipD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
pipD.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("IP Dialog:"+e);
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
var m1 = new styleInput();
var select1 = new styleButton();
var select2 = new styleButton();
var select3 = new styleInput();
select3.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var select4 = new styleButton();
var select5 = new styleButton();
var end1 = new styleButton();
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
var sec2 = new Date(sec);
seconds = sec2.getMilliseconds();
antispam = true;
Dialog.dismiss();
showMenuBtn();
                }
            }));
			
Layer.addView(doubleBtnS);
	
Layer.addView(select1);

Layer.addView(select2);

Layer.addView(select4);

Layer.addView(select5);
 
            select1.setText("LBSG (2 sec)");
            select1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
text =m1.getText();
seconds = "2000";
antispam = true;
Dialog.dismiss();
showMenuBtn();
                }
            }));
             
            select2.setText("Mineplex (3 sec)");
            select2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
text =m1.getText();
seconds = "3000";
antispam = true;
Dialog.dismiss();
showMenuBtn();
                }
            }));
            
            select4.setText("Leet.cc (2/3 sec)");
            select4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
text =m1.getText();
var seconds = "2500";
antispam = true;
Dialog.dismiss();
showMenuBtn();
                }
            }));
			
            select5.setText("Cuboss (10 sec)");
            select5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
text =m1.getText();
var seconds = "10000";
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
spaD = new android.widget.PopupWindow();
var Layer6 = new android.widget.LinearLayout(MainActivity);
var mm = new styleInput();
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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
showMenuBtn();
}
});

spaD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
spaD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
spaD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
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
var select1 = new styleButton();
var select2 = new styleButton();
var ddf = new styleInput();
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
print("destroy dialog :"+e);
}
}});
}

function new9() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
netherD = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var select1 = new styleButton();
var select2 = new styleButton();
var Dialog = new android.app.Dialog(MainActivity);
 
Dialog.setTitle("Select");
Dialog.setContentView(Layer);
 
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
 
Layer.addView(select1);

Layer.addView(select2);
	
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

netherD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
netherD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
netherD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("nether dialog: "+e);
}
}});
}

function new3() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
entD = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var select1 = new styleButton();
var select2 = new styleButton();
var select3 = new styleButton();
var select4 = new styleButton();
var Exit = new styleButton();
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
 
entD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
entD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
entD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("ent spawn dialog:"+e);
}
}});
}

function new2() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
griefD = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var select1 = new styleButton();
var select2 = new styleButton();
var select3 = new styleButton();
var ddf = new styleInput();
ddf.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();
 
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
}
});
 
griefD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
griefD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
griefD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("grief dialog :"+e);
}
}});
}

function named() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
diffD = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(MainActivity);
var ntd = new styleInput();
ntd.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

diffD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
diffD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
diffD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("difficulty dialog:"+e);
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
nameeD = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(MainActivity);
var nt = new styleInput();
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

nameeD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
nameeD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
nameeD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("name dialog:"+e);
}
}});
}

function setName(){
Entity.setNameTag(Player.getEntity(), nametgg);
}

function block1() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
lightD = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(MainActivity);
var bd = new styleInput();
bd.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var bn = new styleInput();
bn.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

lightD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
lightD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
lightD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("light lvl dialog:"+e);
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
resisD = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(MainActivity);
var bi = new styleInput();
bi.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var br = new styleInput();
br.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

resisD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
resisD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
resisD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("resistance dialog:"+e);
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
healthD = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(MainActivity);
var enh = new styleInput();
enh.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

healthD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
healthD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
healthD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("set heart dialog:"+e);
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
heartD = new android.widget.PopupWindow();
var Layer10 = new android.widget.LinearLayout(MainActivity);
var eha = new styleInput();
eha.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

heartD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
heartD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
heartD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("set health dialog:"+e);
}
}});
}

function new4() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
ageD = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var select1 = new styleButton();
var select2 = new styleButton();
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();
 
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
 
ageD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
ageD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
ageD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("age dialog:"+e);
}
}});
}

function XGive() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
expD = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var XP = new styleInput();
XP.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

expD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
expD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
expD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("xp dialog:"+e);
}
}});
}

function XG() {
Server.getPort();
Player.setLevel(Math.round(L));
}

function Give() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
giveD = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var ID = new styleInput();
ID.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Amount = new styleInput();
Amount.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Damage = new styleInput();
Damage.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

giveD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
giveD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
giveD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("give dialog:"+e);
}
}});
}

function give2() {
Player.addItemInventory(I,A,D);
}

function newn() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
nukeD = new android.widget.PopupWindow();
var Layerb5 = new android.widget.LinearLayout(MainActivity);
var nNuke = new styleInput();
nNuke.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

nukeD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
nukeD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
nukeD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("nuke dialog:"+e);
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
speedD = new android.widget.PopupWindow();
var Layer8 = new android.widget.LinearLayout(MainActivity);
var vspee = new styleInput();
vspee.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

speedD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
speedD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
speedD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("speed dialog:"+e);
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
teleportD = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var X = new styleInput();
var Y = new styleInput();
var Z = new styleInput();
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

teleportD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
teleportD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
teleportD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("teleport dialog:"+e);
}
}});
}

function setTp() {
Entity.setPosition(Player.getEntity(), px, py, pz);
}

function setDialogW() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
weatherD = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var w = new styleInput();
w.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var w2 = new styleInput();
w2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

weatherD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
weatherD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
weatherD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("weather dialog:"+e);
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
act1 = new android.widget.PopupWindow();
var Layerb4 = new android.widget.LinearLayout(MainActivity);
var editAtk = new styleInput();
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

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

act1.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
act1.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
act1.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("action 1 dialog:"+e);
}
}});
}

function atact2() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
act2 = new android.widget.PopupWindow();
var Layerz8 = new android.widget.LinearLayout(MainActivity);
var editAtk = new styleInput();
var editAtk2 = new styleInput();
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

Dialog.setTitle("When dying send...");
Dialog.setContentView(Layerz8);

Layerz8.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layerz8.addView(editAtk);
Layerz8.addView(editAtk2);
Layerz8.addView(Exit);

editAtk.setText("");
editAtk.setHint("Command or message");
editAtk2.setText("");
editAtk2.setHint("Amount of hearts");
Exit.setText("Set action");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
newAction2 =editAtk.getText();
actionHeart =editAtk2.getText();
Dialog.dismiss();
showMenuBtn();
}
});

act2.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
act2.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
act2.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("action 2 dialog:"+e);
}
}});
}

function signEditor() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
signD = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var xy = new styleInput();
xy.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var xy2 = new styleInput();
var Dialog = new android.app.Dialog(ctx);
var Exit = new styleButton(ctx);

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

signD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
signD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
signD.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("sign dialog:"+e);
}
}});
}

function newSignText(){
Level.setSignText(notex, notey, notez, text4, line4);
}

function fov() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
fovD = new android.widget.PopupWindow();
var LayerFov = new android.widget.LinearLayout(MainActivity);
var fin = new styleInput();
fin.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var reset = new styleButton();
var Exit = new styleButton();

Dialog.setTitle("Enter new fov");
Dialog.setContentView(LayerFov);

LayerFov.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
LayerFov.addView(fin);
LayerFov.addView(reset);
LayerFov.addView(Exit);

fin.setText("");
fin.setHint("Fov number");
reset.setText("reset fov");
Exit.setText("done");
	
reset.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ModPE.resetFov();
Dialog.dismiss();
showMenuBtn();
}
});

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
typedFov =fin.getText();
Dialog.dismiss();
startFov();
showMenuBtn();
}
});

fovD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
fovD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
fovD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("fov dialog:"+e);
}
}});
}

function startFov(){
ModPE.setFov(typedFov);
}

function sendEtc() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
sendD = new android.widget.PopupWindow();
var Layerz89 = new android.widget.LinearLayout(MainActivity);
var datMsg = new styleInput();
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

Dialog.setTitle("Send to all");
Dialog.setContentView(Layerz89);

Layerz89.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layerz89.addView(datMsg);
Layerz89.addView(Exit);

datMsg.setText("");
datMsg.setHint("Type your message...");
Exit.setText("Send");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
urMsg =datMsg.getText();
sendToAll();
Dialog.dismiss();
showMenuBtn();
}
});

sendD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
sendD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
sendD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("send all dialog:"+e);
}
}});
}

function sendToAll(){
	/*if i use sendToAll(urMsg) instead of sendToAll(); it freezes the device then crashes launcher.. -.-*/
var albet = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9");
for(var sheep = 0; sheep < 35; sheep++){
Server.sendChat("./tell " + albet[sheep] + " " + urMsg);
}
}

function rangeset() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
rangeD = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var rang = new styleInput();
rang.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

Dialog.setTitle("Aimaura range");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(rang);
Layer.addView(Exit);

rang.setText("");
rang.setHint("Range...");
Exit.setText("Save");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
aimrange=rang.getText();
android.widget.Toast.makeText(MainActivity, "Set to: "+rang, 1).show();
Dialog.dismiss();

showMenuBtn();
}
});

rangeD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
rangeD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
rangeD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("range dialog:"+e);
}
}});
}

function heightset() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
heightD = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var height = new styleInput();
height.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

Dialog.setTitle("Jump Height");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(height);
Layer.addView(Exit);

height.setText("");
height.setHint("Height...");
Exit.setText("Save");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
if(height <= 10){
jumpheight=height.getText();
android.widget.Toast.makeText(MainActivity, "Set to: "+height, 1).show();
}
if(height >= 10){
jumpheight = 9;
android.widget.Toast.makeText(MainActivity, "Set to default: "+jumpheight, 1).show();
}
Dialog.dismiss();

showMenuBtn();
}
});

heightD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
heightD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
heightD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("height dialog:"+e);
}
}});
}

function itementer() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
rainD = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var item = new styleInput();
item.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

Dialog.setTitle("Item ID");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(item);
Layer.addView(Exit);

item.setText("");
item.setHint("Item id...");
Exit.setText("Rain");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
rainId=item.getText();
Dialog.dismiss();
rainitem = true;
showMenuBtn();
}
});

rainD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
rainD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
rainD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("item rain dialog:"+e);
}
}});
}

function shadowset() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
shadowD = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var shadowX = new styleInput();
shadowX.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var shadowY = new styleInput();
shadowY.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

Dialog.setTitle("Hitbox range & height");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(shadowX);
Layer.addView(shadowY);
Layer.addView(Exit);

shadowX.setText("");
shadowX.setHint("Width/X/range");
shadowY.setText("");
shadowY.setHint("Height/Y/up-down");
Exit.setText("Save");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
shadow1X=shadowX.getText();
shadow1Y=shadowY.getText();
Dialog.dismiss();

showMenuBtn();
}
});

shadowD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
shadowD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
shadowD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("shadow dialog:"+e);
}
}});
}

function custime() {
MainActivity.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
timeD = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(MainActivity);
var time = new styleInput();
time.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Dialog = new android.app.Dialog(MainActivity);
var Exit = new styleButton();

Dialog.setTitle("Custom time");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(time);
Layer.addView(Exit);

time.setText("");
time.setHint("Time...");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
newtime=time.getText();
settime1();
Dialog.dismiss();
showMenuBtn();
}
});

timeD.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
timeD.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
timeD.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("time dialog:"+e);
}
}});
}

function settime1(){
Level.setTime(newtime);
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
var changeSpeed = false;
}

function twerking(){
TTick++
if(TTick==0)Entity.setSneaking(getPlayerEnt(), true);
if(TTick==2)Entity.setSneaking(getPlayerEnt(), false);
if(TTick==4)Entity.setSneaking(getPlayerEnt(), true);
if(TTick==6)Entity.setSneaking(getPlayerEnt(), false);

if(TTick==7)TTick = 0;
}

function getNearestEntity(maxrange) {
			var players = Server.getAllPlayers();
			var small = maxrange;
			var ent = null;
	if(players!=null){
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

function getNearestEntity2(maxrange) {
			var mobs = Entity.getAll();
			var small = maxrange;
			var ent = null;
	if(mobs!=null){
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
			return ent;
}
		}

function getNearestEntity3(maxrange) {
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
if(Entity.getHealth(getPlayerEnt())==actionHeart){
    i++
    if(i=="1"){
        Server.sendChat(newAction2);
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

function replaceAll(search, replacement, str) {
    var target = str;
    return target.replace(new RegExp(search, 'g'), replacement);
};
/*Thanks to godsoft029 !*/
function toAlphaSpeak(text){
	var end = text.toLowerCase();
	var normal = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
	var alpha = new Array("α","в","c","∂","є","ƒ","g","н","ι","נ","к","ℓ","м","η","σ","ρ","q","я","ѕ","т","υ","ν","ω","χ","у","z");
	for(i = 0; i < normal.length; i++) {
		end = replaceAll(normal[i], alpha[i], end);
	}
	return end;
}
function toBinarySpeak(text){
	var end = text.toLowerCase();
	var normal = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
	var binary = new Array("01100001","01100010","01100011","01100100","01100101", "01100110", "01100111", "01101000","01101001","01101010","01101011","01101100","01101101","01101110","01101111","01110000","01110001","01110010","01110011","01110100","01110101","01110110","01110111","01111000","01111001","01111010");
	for(i = 0; i < normal.length; i++) {
		end = replaceAll(normal[i], binary[i], end);
	}
	return end;
}
function toZalgoSpeak(text){
	var end = text.toLowerCase();
	var normal = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
	var zalgo = new Array("á̡̢","b́͏҉","c̷̨͘","d̨","e̢͘͡", "f̕͘", "g̶̡", "h́̏ͭ̄̚","i̹̞̱͍̪̙̠̳̰","j̧͢͞","k҉","ļ҉͜","m̸̢","n͈̯̱̝̲̯̬̘̭̫̗̭͈͍ͭ̔͐ͫ́̎̀̉̐ͫ̿̚","ó҉","p͆̌̂̿̊̌","q̢͛ͪ̆ͦ̓̏ͮ","r͝͠","s̨","t͠҉̸","u͏͝","v͏҉̨","w̶̡͜","x̟̗̘̗̅ͣ̐̅","y͔͇̠","Z̦͙̯̯͚̱͓̩̬͕̖̰̭͎̐̄̒ͤ͑̎̐̊̓ͥͬ̈́͌͂͊͟");
	for(i = 0; i < normal.length; i++) {
		end = replaceAll(normal[i], zalgo[i], end);
	}
	return end;
}
function toStrikeSpeak(text){
	var end = text.toLowerCase();
	var normal = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
	var strike = new Array("a̶","b̶","c̶","d̶","e̶","f̶","g̶","h̶","i̶","j̶","k̶","l̶","m̶","n̶","o̶","p̶","q̶","r̶","s̶","t̶","u̶","v̶","w̶","x̶","y̶","z̶");
		for(i = 0; i < normal.length; i++) {
		end = replaceAll(normal[i], strike[i], end);
	}
	return end;
}
function toSwearSpeak(text){
	var end = text.toLowerCase();
	var normal = new Array("bitch","fuck","shit","cunt","ass","dick","piss","damn","pussy","cock"); //TODO
	var swear = new Array("B¡tсћ","Fцсҝ","Sɦіt","Cцɲt","Asʂ","Dіcҝ","P¡ʂs","Damɲ","Pцsʂy","Cоҫҝ"); //TODO
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
		if(censorbypass){
			preventDefault();
			com.mojang.minecraftpe.MainActivity.currentMainActivity.get().updateTextboxText("");
			Server.sendChat(" "+toSwearSpeak(str));
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
	if(chatind)clientMessage(client+str);
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
                    	Server.sendChat("./login "+numhack);
                    	clientMessage("./login "+numhack);
                    }
                    if(hackk2){
                    	numhack2++
                    	Server.sendChat("./login "+numhack2+"' or '"+numhack2+"' = '"+numhack2);
                    	clientMessage("./login "+numhack2+"' or '"+numhack2+"' = '"+numhack2);
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
			    var ent = getNearestEntity(aimrange);
			    var name = Entity.getNameTag(ent);
			    if(!name.match(' ') && ent != null)crosshairAimAt(ent);
		    }
			if(aimbot2){
				var ent = getNearestEntity2(aimrange);
			    if(ent != null)crosshairAimAt(ent);
			}
			if(bowaura){
				if(getCarriedItem() == '261'){
				var ent = getNearestEntity3(aimrange);
			    if(ent != null)crosshairAimAt(ent);
				}
			}
			if(hitbox1){
				var ent = getNearestEntity3(aimrange + 2);
				if(ent != getPlayerEnt()){
				Entity.setCollisionSize(ent, shadow1X, shadow1Y);
				}
			}
			if(ridenear){
				var ent = getNearestEntity3(aimrange);
				if(ent != getPlayerEnt()){
				rideAnimal(getPlayerEnt(), ent);
				}
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
Utils.Render.init();
