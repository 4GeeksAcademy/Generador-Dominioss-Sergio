const pronouns = ['the', 'our'];
const adjectives = ['great', 'big'];
const nouns = ['jogger', 'racoon'];

const tldSelectEl = document.getElementById('tldSelect');
const generateButtonEl = document.getElementById('generateButton');
const domainListEl = document.getElementById('domainList');

const generateDomainNames = (tld) => {
  const domains = [];
  for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
      for (const noun of nouns) {
        domains.push(`${pronoun}${adjective}${noun}${tld}`);
      }
    }
  }
  return domains;
};

const renderDomainList = (domains) => {
  domainListEl.innerHTML = ''; 
  domains.forEach(domain => {
    const listItem = document.createElement('li');
    listItem.textContent = domain;
    domainListEl.appendChild(listItem);
  });
};

const onGenerateButtonClick = () => {
  const selectedTld = tldSelectEl.value;
  const generatedDomains = generateDomainNames(selectedTld);
  renderDomainList(generatedDomains);
};

generateButtonEl.addEventListener('click', onGenerateButtonClick);