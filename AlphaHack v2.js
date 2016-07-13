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

var liquidwalk = false;
var xray = false;
var ttot = false;
var antivoid = false;

var getVer = ModPE.getMinecraftVersion();

ModPE.langEdit("menu.copyright", "AlphαHαck v2 @ArceusMatt");

function dip2px(dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

var bg64 = "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";

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
 
        Debug = new PopupWindow(layout, dip2px(1), dip2px(1)); 

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

            var title = new TextView(MainActivity);
            title.setTextSize(20);
            title.setText("AlphαHαck v2");
            title.setGravity(Gravity.CENTER);
            title.setTextColor(Color.WHITE);
            menuLayout.addView(title);
            
            var exit = new Button(MainActivity);
            exit.setText("Exit AlphαHαck");
            exit.setTextColor(Color.RED);
            exit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
menu.dismiss(); 
showMenuBtn(); 
Toast.makeText(MainActivity, "Closed successfully", 1).show();
                }
            }));
            menuLayout.addView(exit);
            
            var line2 = new android.widget.LinearLayout(ctx);
	    line2.setOrientation(0);
	    
	    var worldInfo = new Button(MainActivity);
            worldInfo.setText("World info");
            worldInfo.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
            worldInfo.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
                Level.getRainLevel();	
clientMessage("World name: "+Level.getWorldName()+" World: "+Player.getDimension()+" Biome: "+Level.getBiomeName());
if(Level.getRainLevel()=="0")clientMessage("Weather: clear"+" Time: "+Level.getTime());
if(Level.getRainLevel()=="1")clientMessage("Weather: rain/snow "+" Time: "+Level.getTime());
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
button2.setText("Ore ESP(xray)");
button2.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0) , 0, android.util.Base64.decode(buttonBg, 0).length)));
button2.setTextColor(Color.RED);
if(xray==true)button2.setTextColor(Color.GREEN);
            button2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             xray?xray=false:xray=true;
button2.setText("Ore ESP(xray)");
if(xray == true){
button2.setTextColor(Color.GREEN);
clientMessage("You may crash!\nchange on/off fancy graphics for better view.");
Block.setRenderLayer(1,1);
Block.setRenderLayer(2,1);
Block.setRenderLayer(3,1);
Block.setRenderLayer(12,1);
Block.setRenderLayer(24,1);
Block.setRenderLayer(78,1);
Block.setShape(1, 0, 0, 0, 0, 0.6, 0);
Block.setShape(2, 0, 0, 0, 0, 0.6, 0);
Block.setShape(3, 0, 0, 0, 0, 0.6, 0);
Block.setShape(12, 0, 0, 0, 0, 0.6, 0);
Block.setShape(24, 0, 0, 0, 0, 0.6, 0);
Block.setShape(78, 0, 0, 0, 0, 0.6, 0);
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
if(Server.getAddress()=="null")clientMessage("You are not on a server!");
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
            
            menu = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
           menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#93000000")));
		   var bg = new android.graphics.drawable.GradientDrawable();
      bg.setColor(Color.TRANSPARENT);
      bg.setStroke(10,Color.BLACK);
menuLayout1.setBackgroundDrawable(bg);
menuLayout1.setPadding(20,0,20,0);
            menu.showAtLocation(MainActivity.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0);
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

function modTick(){
	if(antivoid){
		if(getPlayerY()=="0"){
			clientMessage("You were at void!");
			Server.sendChat("/spawn");
			setPosition(Player.getEntity(), getPlayerX()+2, 60, getPlayerZ());
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
