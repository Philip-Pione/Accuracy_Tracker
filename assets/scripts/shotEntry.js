const createEntry = (id, weaponSystem, caliber, ammoType, moa) => {
  const html = `
  <tr>
  <th scope="row">${id}</th>
  <td>${weaponSystem}</td>
  <td>${caliber}</td>
  <td>${ammoType}</td>
  <td>${moa}</td>
  </tr>`
  return html;
}

const createTopShooter = (id, weaponSystem, caliber, ammoType, moa) => {
  const html =
    `
  <tr>
  <th scope="row">${id}</th>
  <td>${weaponSystem}</td>
  <td>${caliber}</td>
  <td>${ammoType}</td>
  <td>${moa}</td>
  </tr>`
  return html;
}



class AccuracyTracker {
  constructor(entry, currentId = 0) {
    this.entry = [];
    this.currentId = currentId;
    this.topMOA = 100;
  }

  addEntry(weaponSystem, caliber, ammoType, moa) {
    const entry = {
      id: ++this.currentId,
      name: weaponSystem,
      caliber: caliber,
      ammunition: ammoType,
      MOA: moa,
    }

    this.entry.push(entry);
  }

  render() {
    const entryHtmlList = [];

    for (let i = 0; i < accuracyEntry.entry.length; i++) {
      const workingEntry = accuracyEntry.entry[i];
      console.log(workingEntry);
      const entryHtml = createEntry(workingEntry.id, workingEntry.name, workingEntry.caliber, workingEntry.ammunition, workingEntry.MOA);
      entryHtmlList.push(entryHtml);
    }
    const htmlEntryList = entryHtmlList.join('\n');
    document.querySelector('#results').innerHTML = htmlEntryList;
  }

  

  checkForTopShot(weaponSystem, caliber, ammoType, moa) {
    const testMOA = moa;
    if (testMOA < this.topMOA) {
      const html =
      `
      <tr>
      <th scope="row">${weaponSystem}</td>
      <td>${caliber}</td>
      <td>${ammoType}</td>
      <td>${moa}</td>
      </tr>`
      document.querySelector('#topMOA').innerHTML = html;
      this.topMOA = testMOA;
    } 
  }


  getEntryById(entryId) {
    let foundTopShot;
    for (let i = 0; i < accuracyEntry.entry.length; i++) {
      const entry = accuracyEntry.entry[i];
      if (entry.id === entryId) {
        foundTopShot = entry;
      }
    }
    return foundTopShot;
  }

  save() {
    const entryJson = JSON.stringify(this.entry);
    localStorage.setItem('entry', entryJson);
    const currentId = JSON.stringify(this.currentId);
    localStorage.setItem('currentId', currentId);
  }

  load() {
    if (localStorage.getItem('entry')) {
      const entryJson = JSON.parse(localStorage.getItem('entry'));
      this.entry = entryJson;
      const currentId = JSON.parse(localStorage.getItem('currentId'));
      this.currentId = parseInt(currentId);
    }
  }

}