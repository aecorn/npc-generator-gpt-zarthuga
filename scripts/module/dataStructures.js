export class npcGenGPTDataStructure {
    static categoryList = ['type', 'gender', 'race', 'subtype', 'alignment', 'cr'];
    static typeList = ['commoner', 'npc'];
    static genderList = ['male', 'female'];
    static raceList = [
        'dinoborn-attacker', 'dinoborn-flyer', 'dinoborn-scout', 'dinoborn-defender',
        'dwarf-common', 'dwarf-hill', 'dwarf-mountain', 'dwarf-glacier', 'dwarf-magma',
        'elf-common', 'elf-city', 'elf-wood', 'drow', 'elf-arch',
        'gnome-common', 'gnome-forest', 'gnome-rock', 'gnome-sky',
        'halfelf',
        'halfling-common', 'halfling-lightfoot', 'halfling-stout', 'halfling-leafwalker',
        'trollkin',
        'human',
        'tiefling',
        'auromedusae',
        'entkin',
        'gargil',
        'librarian',
        'limagi',
        'nokkans',
        'platynix',
    ];
    static commonerList = [
        'alchemist', 'baker', 'barkeep', 'blacksmith', 'butcher', 'carpenter',
        'cobbler', 'farmer', 'fisherman', 'guard', 'healer', 'hermit', 'hunter',
        'innkeeper', 'merchant', 'messenger', 'miner', 'scribe', 'tailor'
    ];
    static npcList = [
        'barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk',
        'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard'
    ];
    static alignmentList = ['lg', 'ng', 'cg', 'ln', 'n', 'cn', 'le', 'ne', 'ce'];

    static crList(complete) {
        if (!complete) return [0];
        const cr = [0, 0.125, 0.25, 0.5];
        for (let i = 1; i <= 30; i++) cr.push(i);
        return cr
    }

    static languagesList = [
        "abyssal", "aquan", "auran", "celestial", "common", 
        "druidic", "elvish", "deep", "cant", "giant", "gith",
        "gnoll", "gnomish", "goblin", "halfling", "ignan", "infernal",
        "dwarvish", "primordial", "sylvan", "undercommon", "terran", 
        "trollish", "dinospeech", "platynixian",
    ];

    static raceData = {
        dinoborn: { movement: { walk: 30 }, size: "med", senses: { darkvision: 0 }, lang: ["common", "dinospeech"] },
        dwarf: { movement: { walk: 25 }, size: "med", senses: { darkvision: 60 }, lang: ["common", "dwarvish"] },
        elf: { movement: { walk: 30 }, size: "med", senses: { darkvision: 60 }, lang: ["common", "elvish"] },
        drow: { movement: { walk: 30 }, size: "med", senses: { darkvision: 120 }, lang: ["common", "elvish"] },
        gnome: { movement: { walk: 25 }, size: "sm", senses: { darkvision: 60 }, lang: ["common", "gnomish"] },
        halfelf: { movement: { walk: 30 }, size: "med", senses: { darkvision: 60 }, lang: ["common", "elvish"] },
        halfling: { movement: { walk: 25 }, size: "sm", senses: { darkvision: 0 }, lang: ["common", "halfling"] },
        trollkin: { movement: { walk: 30 }, size: "med", senses: { darkvision: 60 }, lang: ["common", "trollish"] },
        human: { movement: { walk: 30 }, size: "med", senses: { darkvision: 0 }, lang: ["common"] },
        tiefling: { movement: { walk: 30 }, size: "med", senses: { darkvision: 60 }, lang: ["common", "infernal"] },
        auromedusae: { movement: { walk: 30, fly: 10, swim: 20 }, size: "med", senses: { truesight: 60 }, lang: ["common", "aquan"] },
        entkin: { movement: { walk: 30 }, size: "med", senses: { tremorsense: 15 }, lang: ["common", "sylvan", "druidic"] },
        gargil: { movement: { walk: 30, fly: 30}, size: "med", senses: { darkvision: 60 }, lang: ["common", "terran"] },
        librarian: { movement: { walk: 30 }, size: "med", senses: { darkvision: 0 }, lang: ["common"] },
        limagi: { movement: { walk: 30 }, size: "med", senses: { darkvision: 0 }, lang: ["common", "halfling"] },
        nokkans: { movement: { walk: 30, swim: 20 }, size: "med", senses: { darkvision: 60 }, lang: ["common", "aquan"] },
        platynix: { movement: { walk: 25, swim: 25 }, size: "sm", senses: { darkvision: 60 }, lang: ["common", "platynixian", "aquan"] },
    };

    static subtypeData = {
        commoner: { save: { max: 2, pool: ['str', 'dex', 'int', 'wis', 'con', 'cha'] }, skills: { max: 2, pool: ['acr', 'ani', 'arc', 'ath', 'dec', 'his', 'ins', 'inv', 'itm', 'med', 'nat', 'per', 'prc', 'prf', 'rel', 'slt', 'ste', 'sur'] } },
        barbarian: { save: ['str', 'con'], skills: { max: 2, pool: ['ani', 'ath', 'itm', 'nat', 'prc', 'sur'] } },
        bard: { save: ['dex', 'cha'], spellcasting: 'cha', skills: { max: 3, pool: ['acr', 'ani', 'arc', 'ath', 'dec', 'his', 'ins', 'inv', 'itm', 'med', 'nat', 'per', 'prc', 'prf', 'rel', 'slt', 'ste', 'sur'] } },
        cleric: { save: ['wis', 'cha'], spellcasting: 'wis', skills: { max: 2, pool: ['his', 'ins', 'med', 'per', 'rel'] } },
        druid: { save: ['int', 'wis'], spellcasting: 'wis', skills: { max: 2, pool: ['ani', 'arc', 'ins', 'med', 'nat', 'prc', 'rel', 'sur'] } },
        fighter: { save: ['str', 'con'], skills: { max: 2, pool: ['acr', 'ani', 'ath', 'itm', 'ins', 'prc', 'sur', 'his'] } },
        monk: { save: ['str', 'dex'], spellcasting: 'wis', skills: { max: 2, pool: ['acr', 'ath', 'ste', 'ins', 'rel', 'his'] } },
        paladin: { save: ['wis', 'cha'], spellcasting: 'cha', skills: { max: 2, pool: ['ath', 'itm', 'ins', 'med', 'per', 'rel'] } },
        ranger: { save: ['str', 'dex'], spellcasting: 'wis', skills: { max: 3, pool: ['ani', 'ath', 'ste', 'inv', 'ins', 'nat', 'prc', 'sur'] } },
        rogue: { save: ['dex', 'int'], lang: ["cant"], skills: { max: 4, pool: ['acr', 'ath', 'ste', 'inv', 'dec', 'itm', 'prf', 'ins', 'prc', 'per', 'slt'] } },
        sorcerer: { save: ['con', 'cha'], spellcasting: 'cha', skills: { max: 2, pool: ['arc', 'dec', 'itm', 'ins', 'per', 'rel'] } },
        warlock: { save: ['wis', 'cha'], spellcasting: 'cha', skills: { max: 2, pool: ['arc', 'inv', 'dec', 'itm', 'nat', 'rel', 'his'] } },
        wizard: { save: ['int', 'wis'], spellcasting: 'int', skills: { max: 2, pool: ['arc', 'inv', 'ins', 'med', 'rel', 'his'] } }
    };

    static skillAbilities = {
        dex: ['acr', 'slt', 'ste'],
        int: ['arc', 'his', 'inv', 'nat', 'rel'],
        wis: ['ani', 'ins', 'med', 'prc', 'sur'],
        cha: ['dec', 'itm', 'per', 'prf']
    };

    static hpDice = { tiny: 4, sm: 6, med: 8, lg: 10, huge: 12, grg: 20 };

    static getGenerateQueryTemplate(options) { 
        return `${game.i18n.format("npc-generator-gpt.query.generate", { userQuery: options })}\n{
            "name": "${game.i18n.localize("npc-generator-gpt.query.name")}",
            "background": "${game.i18n.localize("npc-generator-gpt.query.background")}",
            "appearance": "${game.i18n.localize("npc-generator-gpt.query.appearance")}",
            "roleplaying": "${game.i18n.localize("npc-generator-gpt.query.roleplaying")}",
            "readaloud": "${game.i18n.localize("npc-generator-gpt.query.readaloud")}",
            "items": "${game.i18n.localize("npc-generator-gpt.query.equip")} (array)",
            "spells": "${game.i18n.localize("npc-generator-gpt.query.spells")} (array)",
        }`
    }

    static getEnhanceQueryTemplate(options) { 
        return `${game.i18n.format("npc-generator-gpt.query.enhance", { userQuery: options })}\n{
            "background": "${game.i18n.localize("npc-generator-gpt.query.background")}",
            "appearance": "${game.i18n.localize("npc-generator-gpt.query.appearance")}",
            "roleplaying": "${game.i18n.localize("npc-generator-gpt.query.roleplaying")}",
            "readaloud": "${game.i18n.localize("npc-generator-gpt.query.readaloud")}"
        }`
    }
}
