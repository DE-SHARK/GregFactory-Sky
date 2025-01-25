/*
* machines.js - Register new recipe types and machines.
*/
const WorkableSteamHullRenderer = Java.loadClass("com.gregtechceu.gtceu.client.renderer.machine.WorkableSteamMachineRenderer");

GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    // sieve in exnihilo
    event.create("steam_sieve")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(2, 9, 0, 0) // ItemI, ItemO, FluidI, FluidO
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.UP_TO_DOWN)
        .setSound(GTSoundEntries.ELECTROLYZER);

    event.create("sieve")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(2, 30, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.UP_TO_DOWN)
        .setSound(GTSoundEntries.ELECTROLYZER);

    // inscriber in ae
    event.create("inscriber")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(3, 1, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("steam_sieve", "steam")
        .definition((tier,builder) =>{
            builder.recipeType("steam_sieve")
            .workableTieredHullRenderer(GTCEu.id("block/machines/sieve"))
        });

    event.create("sieve", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier,builder) =>{
            builder.recipeType("sieve")
            .workableTieredHullRenderer("gtceu:block/machines/sieve")
        });

    event.create("inscriber", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier,builder) =>{
            builder.recipeType("inscriber")
            .workableTieredHullRenderer("gtceu:block/machines/inscriber")
        })
        .tankScalingFunction(tier => tier * 4800);
});
