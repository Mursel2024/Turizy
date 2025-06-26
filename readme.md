əsas səhifə,login-register və istifadəçi paneli işlənib. Css Login(Auth) və User hissesi hazır css lədir. Main page scss ilə işlənib. onun işə salmaq üçün scss extensionu yükləyəcəksiz watch sass basdıqdan sonraa avtomatik assets içərisində css qovluğu onun içərisində də style.css faylı yaranması üçün settingse daxil olub  edit settings.json faylına 


{
    "workbench.iconTheme": "material-icon-theme",
    "files.autoSave": "afterDelay",
    "workbench.colorTheme": "Ayu Dark",
    "liveServer.settings.donotShowInfoMsg": true,
    "explorer.confirmDragAndDrop": false,
    "workbench.settings.applyToAllProfiles": [],
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/assets/css"
        }
    ],
    "liveSassCompile.settings.generateMap": true,
    "liveSassCompile.settings.autoprefix": [

    ],
    "git.autofetch": true,
    "liveServer.settings.donotVerifyTags": true,
    "workbench.editorAssociations": {
        "*.docx": "default"
    },
    "editor.dropIntoEditor.preferences": [
        "css.link.url"
    ]
}
  yazmaq lazımdır
  