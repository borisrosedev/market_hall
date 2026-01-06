import { describe, it, beforeEach } from "vitest";
import { ref, reactive } from "vue";

// Les fonctions à tester
let fieldsVlues = reactive<{ email: string; password: string }>({
  email: "",
  password: "",
});

let messages = ref<Array<{ content: string; className: string }>>([]);

// les focntions à tester
function onReset(): void {
  (fieldsVlues.email = ""), (fieldsVlues.password = ""), (messages.value = []);
}

function onNoPassword(): void {
  const mess = messages.value.find(
    (mess) => mess.content == "You forgot your password"
  );
  if (!mess) {
    messages.value.push({
      className: "text-danger login__message",
      content: "You forgot the password",
    });
  }
}

// email
function onNoEmail(): void {
  const mess = messages.value.find(
    (mess) => mess.content == "Your forgot the email"
  );
  if (!mess) {
    messages.value.push({
      className: "text-danger login__message",
      content: "You forgot the email",
    });
  }
}

// les tests
describe("Faire les 3 tests simples de LoginPage ", () => {
  // avant de chaque test, il faut faire reset les champs
  beforeEach(() => {
    (fieldsVlues.email = ""), (fieldsVlues.password = "");
    messages.value = [];
  });

  // TEST 1
  it("Le function onReset dois vider les champs", () => {
    fieldsVlues.email = "user@test.com";
    fieldsVlues.password = "pass123";

    // act
    onReset();

    // assert
    expect(fieldsVlues.email).toBe("");
    expect(fieldsVlues.password).toBe("");
  });

  // test 2 on password
  it("onNoPassword doit ajouter un message derreur", () => {
    // ARRANGE férivier que il n y a pas des messages
    expect(messages.value.length).toBe(0);

    // Act
    onNoPassword();

    //assert, vérifie que un message à été ajouter
    expect(messages.value.length).toBe(1);
    expect(messages.value[0].content).toBe("You forgot the password");
  });

  // test 3
  it("onNoEmail qui ajouter un message derreur", () => {
    expect(messages.value.length).toBe(0);

    onNoEmail();

    expect(messages.value.length).toBe(1);
    expect(messages.value[0].content).toBe("You forgot the email");
  });
});
