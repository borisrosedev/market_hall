import { render } from "@testing-library/vue";

import { expect, test } from "vitest";
import checkFormat from "../../src/utils/check-format";

test("format email", () => {
  // email valid
  expect(checkFormat.isValidEmail("markethall@mail.com")).toBe(true);
  expect(
    checkFormat.isValidEmail(
      "markethallavecunmailtreslongtrestreslong@antiquemail.com"
    )
  ).toBe(true);
  expect(checkFormat.isValidEmail("alice@example.com")).toBe(true);
  expect(checkFormat.isValidEmail("john.smith@example.co.uk")).toBe(true);
  expect(checkFormat.isValidEmail("user_name@example.com")).toBe(true);
  expect(checkFormat.isValidEmail("newsletter+promo@sub.example.com")).toBe(
    true
  );
  expect(checkFormat.isValidEmail("o'hara@irish.ie")).toBe(true);
  expect(checkFormat.isValidEmail("foo=bar@baz.com")).toBe(true);
  expect(checkFormat.isValidEmail("john%doe@example.org")).toBe(true);
  //expect(checkFormat.isValidEmail("\"much more unusual\"@example.com")).toBe(true);
  //expect(  checkFormat.isValidEmail("\"very.unusual.@.unusual.com\"@example.com")  ).toBe(true);
  //expect(checkFormat.isValidEmail("quoted\"value\"@example.com")).toBe(true);
  expect(checkFormat.isValidEmail("a.b.c.d@example.travel")).toBe(true);
  expect(checkFormat.isValidEmail("admin@example.photography")).toBe(true);
  expect(checkFormat.isValidEmail("contact@my-domain.io")).toBe(true);
  expect(checkFormat.isValidEmail("service@support.example.xyz")).toBe(true);
  expect(checkFormat.isValidEmail("no-reply@ex-ample.fr")).toBe(true);
  expect(checkFormat.isValidEmail("a@b.c.d.e.f.example")).toBe(true);
  //expect(checkFormat.isValidEmail("user@[192.168.2.1]")).toBe(true);
  //expect(checkFormat.isValidEmail("user@[IPv6:2001:db8::1]")).toBe(true);
  //expect(checkFormat.isValidEmail("élise@exemple.fr")).toBe(true);
  //expect(checkFormat.isValidEmail("utilisateur@dömäin.de")).toBe(true);
  expect(checkFormat.isValidEmail("xn--utilisateur-9gb@xn--dmin-moa.de")).toBe(
    true
  );
  expect(checkFormat.isValidEmail("compte+tag.test@sub.domain.tld")).toBe(true);
  expect(checkFormat.isValidEmail("first_last@dept.company.org")).toBe(true);
  expect(checkFormat.isValidEmail("123456@numbers-only.local")).toBe(true);

  // Bad mail
  expect(checkFormat.isValidEmail("markethallmail.com")).toBe(false);
  expect(checkFormat.isValidEmail("market hall@mail.com")).toBe(false);
  //expect(checkFormat.isValidEmail("markethall@mail")).toBe(false);
  expect(checkFormat.isValidEmail("alice.example.com")).toBe(false);
  expect(checkFormat.isValidEmail("a@@example.com")).toBe(false);
  //expect(checkFormat.isValidEmail(".john@example.com")).toBe(false);
  //expect(checkFormat.isValidEmail("john.@example.com")).toBe(false);
  //expect(checkFormat.isValidEmail("john..doe@example.com")).toBe(false);
  //expect(checkFormat.isValidEmail("john@example")).toBe(false);
  //expect(checkFormat.isValidEmail("john@example.c")).toBe(false);
  expect(checkFormat.isValidEmail("john@example..com")).toBe(false);
  //expect(checkFormat.isValidEmail("john@-example.com")).toBe(false);
  //expect(checkFormat.isValidEmail("john@example-.com")).toBe(false);
  expect(checkFormat.isValidEmail("john@exa_mple.com")).toBe(false);
  expect(checkFormat.isValidEmail("much more@example.com")).toBe(false);
  //expect(checkFormat.isValidEmail("\"unclosed@example.com")).toBe(false);
  expect(checkFormat.isValidEmail("john,doe@example.com")).toBe(false);
  expect(checkFormat.isValidEmail("john;doe@example.com")).toBe(false);
  expect(checkFormat.isValidEmail("<john@example.com>")).toBe(false);
  expect(checkFormat.isValidEmail("@example.com")).toBe(false);
  expect(checkFormat.isValidEmail("john@")).toBe(false);
  expect(checkFormat.isValidEmail("user@[300.168.0.1]")).toBe(false);
  expect(checkFormat.isValidEmail("user@[IPv6:12345::]")).toBe(false);
  expect(checkFormat.isValidEmail("john@.example.com")).toBe(false);
  expect(checkFormat.isValidEmail("john@example.com.")).toBe(false);
  expect(checkFormat.isValidEmail("john@sub..example.com")).toBe(false);
  expect(checkFormat.isValidEmail("user@exam_ple.tld")).toBe(false);
});

test("format password", () => {
  // good password
  expect(checkFormat.isValidPassword("Password1!")).toBe(true);
  expect(checkFormat.isValidPassword("Abcdef1$")).toBe(true);
  expect(checkFormat.isValidPassword("M0tDeP@ss")).toBe(true);
  expect(checkFormat.isValidPassword("Test123&")).toBe(true);
  expect(checkFormat.isValidPassword("Secur3Key!")).toBe(true);

  // bad password
  expect(checkFormat.isValidPassword("user@exam_ple.tld")).toBe(false);

  expect(checkFormat.isValidPassword("password")).toBe(false); //(pas de majuscule, pas de chiffre, pas de spécial)
  expect(checkFormat.isValidPassword("PASSWORD1")).toBe(false); //(pas de minuscule, pas de spécial)
  expect(checkFormat.isValidPassword("Pass!")).toBe(false); //(trop court, pas de chiffre)
  expect(checkFormat.isValidPassword("Passw0rd")).toBe(false); //(pas de caractère spécial)
  expect(checkFormat.isValidPassword("Abcdefgh!")).toBe(false); //(pas de chiffre, pas de majuscule)
});
test("format adresses", () => {
  //Good adresses
  expect(checkFormat.isValidAdresses("10 rue de la Paix")).toBe(true);
  expect(checkFormat.isValidAdresses("25 avenue des Champs-Élysées")).toBe(
    true
  );
  expect(checkFormat.isValidAdresses("3 bis boulevard Saint-Germain")).toBe(
    true
  );
  expect(checkFormat.isValidAdresses("42B rue Victor Hugo")).toBe(true);
  expect(checkFormat.isValidAdresses("8 ter place Bellecour")).toBe(true);
  expect(checkFormat.isValidAdresses("120 allée des Acacias")).toBe(true);
  expect(checkFormat.isValidAdresses("15 chemin du Moulin")).toBe(true);
  expect(checkFormat.isValidAdresses("7 impasse des Lilas")).toBe(true);
  expect(checkFormat.isValidAdresses("5 résidence du Parc")).toBe(true);
  expect(checkFormat.isValidAdresses("99 rue Nationale")).toBe(true);
  expect(checkFormat.isValidAdresses("2 rue de l'Église")).toBe(true);
  expect(checkFormat.isValidAdresses("14 rue Jean Jaurès")).toBe(true);
  expect(checkFormat.isValidAdresses("18 lotissement Les Vignes")).toBe(true);
  expect(checkFormat.isValidAdresses("3 place de la République")).toBe(true);
  expect(checkFormat.isValidAdresses("56 route de Bordeaux")).toBe(true);
  expect(checkFormat.isValidAdresses("1 avenue Charles de Gaulle")).toBe(true);
  expect(checkFormat.isValidAdresses("4 rue du Général Leclerc")).toBe(true);
  expect(checkFormat.isValidAdresses("21 rue Pasteur")).toBe(true);
  expect(checkFormat.isValidAdresses("15 rue de la Gare")).toBe(true);
  expect(checkFormat.isValidAdresses("27 rue des Écoles")).toBe(true);

  //Bad adresses
  expect(checkFormat.isValidAdresses("rue de la Paix")).toBe(false); //   (numéro de voie manquant)
  expect(checkFormat.isValidAdresses("10, , 75002 Paris")).toBe(false); //                 (voie vide)
  //expect(checkFormat.isValidAdresses("10 rue de la Paix Paris")).toBe(false); //           (code postal manquant)
  expect(checkFormat.isValidAdresses("10 rue de la Paix, Paris 75002")).toBe(
    false
  ); //     (ordre incorrect)
  expect(checkFormat.isValidAdresses("75002 Paris, 10 rue de la Paix")).toBe(
    false
  ); //     (ordre inversé, pas classique FR)
  expect(checkFormat.isValidAdresses("10 rue, 7502 Paris")).toBe(false); //                 (code postal trop court)
  expect(checkFormat.isValidAdresses("10 rue de la Paix, 750023 Paris")).toBe(
    false
  ); //    (code postal trop long)
  expect(checkFormat.isValidAdresses("10 rue de la Paix, 7500A Paris")).toBe(
    false
  ); //     (lettre dans le code postal)
  expect(checkFormat.isValidAdresses("10 rue de la Paix,")).toBe(false); //                 (ville manquante)
  expect(checkFormat.isValidAdresses(", 75002 Paris")).toBe(false); //                      (voie manquante)
  expect(checkFormat.isValidAdresses("10 rue de la Paix, Marseille")).toBe(
    false
  ); //       (code postal manquant)
  expect(checkFormat.isValidAdresses("00000 Paris")).toBe(false); //                        (code postal invalide)
  expect(checkFormat.isValidAdresses("99 rue Nationale, 99999 Lille")).toBe(
    false
  ); //      (code postal inexistant en France)
  //expect(checkFormat.isValidAdresses("12 avenue des Champs Elysees")).toBe(false); //       (code postal + ville manquants)
  expect(checkFormat.isValidAdresses("12# rue de la Paix, 75002 Paris ")).toBe(
    false
  ); //   (caractère spécial interdit)
});

test("format zip code", () => {
  //Good zip code
  expect(checkFormat.isValidZipCode("01000")).toBe(true);
  expect(checkFormat.isValidZipCode("13008")).toBe(true);
  expect(checkFormat.isValidZipCode("29200")).toBe(true);
  expect(checkFormat.isValidZipCode("44000")).toBe(true);
  expect(checkFormat.isValidZipCode("59000")).toBe(true);
  expect(checkFormat.isValidZipCode("75001")).toBe(true);
  expect(checkFormat.isValidZipCode("75018")).toBe(true);
  expect(checkFormat.isValidZipCode("75116")).toBe(true);
  expect(checkFormat.isValidZipCode("77600")).toBe(true);
  expect(checkFormat.isValidZipCode("84000")).toBe(true);
  expect(checkFormat.isValidZipCode("97400")).toBe(true);
  expect(checkFormat.isValidZipCode("97110")).toBe(true);
  expect(checkFormat.isValidZipCode("98800")).toBe(true);
  expect(checkFormat.isValidZipCode("20200")).toBe(true);
  expect(checkFormat.isValidZipCode("20137")).toBe(true);

  //Bad zip code

  expect(checkFormat.isValidZipCode("1000")).toBe(false); //    (4 chiffres)
  expect(checkFormat.isValidZipCode("750001")).toBe(false); //     (6 chiffres)
  expect(checkFormat.isValidZipCode("75A01")).toBe(false); //      (lettre interdite)
  expect(checkFormat.isValidZipCode("7500")).toBe(false); //       (trop court)
  expect(checkFormat.isValidZipCode("00000")).toBe(false); //      (00 n’existe pas)
  expect(checkFormat.isValidZipCode("99999")).toBe(false); //      (hors plage existante)
  expect(checkFormat.isValidZipCode("750-01")).toBe(false); //     (caractère interdit)
  expect(checkFormat.isValidZipCode("75 001")).toBe(false); //     (espace interdit)
  expect(checkFormat.isValidZipCode("ABCDE")).toBe(false); //      (que des lettres)
  expect(checkFormat.isValidZipCode("20A00")).toBe(false); //      (code corse mal formé)
});
