const accuracyEntry = new AccuracyTracker();
accuracyEntry.load();
accuracyEntry.render();


const inputFieldData = (data) => {
    data.preventDefault();
    const newWeaponSystem = document.querySelector('#formWeaponSystem');
    const weaponSystem = newWeaponSystem.value;
    const newCaliber = document.querySelector('#formCaliber');
    const caliber = newCaliber.value;
    const newAmmoType = document.querySelector('#formAmmoType');
    const ammoType = newAmmoType.value;
    const newMOAdata = document.querySelector('#formMOAdata');
    const moa = newMOAdata.value;
    accuracyEntry.addEntry(weaponSystem, caliber, ammoType, moa);
    accuracyEntry.checkForTopShot(weaponSystem, caliber, ammoType, moa);
    accuracyEntry.render();
    accuracyEntry.save();
    document.querySelector('#taskFormEntry').reset();

}

const averageFieldData = (data) => {

}

const runButton = document.querySelector('#taskFormEntry');
runButton.addEventListener('submit', inputFieldData);
runButton.addEventListener('submit', averageFieldData);
