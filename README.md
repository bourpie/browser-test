# Tester votre site web sur tous les navigateurs avec Playwright

Utiliser Playwright pour tester l'apparence de votre site web sur les principaux navigateurs (Chrome, Firefox et Safari) sous Linux, macOS et Windows.


# Installation

#### Importer le projet

```bash
git clone https://github.com/bourpie/browser-test.git
```

#### Installer les dépendances

```bash
npm install
```

#### Pointer le projet sur le serveur web à tester

Dans le fichier <code>browser.test.ts</code>, remplacez l'URL par celle du site à tester:

```javascript
import { test } from '@playwright/test'

test('test browser', async ({ page }) => {
  
  // Remplacez l'URL par celle du site à tester
  await page.goto('http://localhost:3000/')

  // Garde le navigateur ouvert pour inspection
  await page.pause()
})

```

# Exécuter les tests

Pour lancer les tests sur un navigateur spécifique, utilisez l'une des commandes suivantes :

```bash
npm run test:chrome
npm run test:firefox
npm run test:safari
```

# Références

- [Playwright](https://playwright.dev/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Test Your Site In Every Browser](https://joyofcode.xyz/test-your-site-in-every-browser)