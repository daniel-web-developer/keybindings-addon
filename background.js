browser.commands.onCommand.addListener((command) => {
    if (command == "j" || command == "k"){

    } else {
        changeTabs(Number.parseInt(command, 10));
    }
});

function changeTabs(index) {
    browser.tabs.query({currentWindow: true}, (tabs) => {
        if (index == 9) {
            browser.tabs.update(tabs[tabs.length - 1].id, {active: true});
        } else if (tabs[index - 1]) {
            browser.tabs.update(tabs[index - 1].id, {active: true});
        }
    })
}

