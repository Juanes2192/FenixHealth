import bcrypt from "bcryptjs";

const password = "Admin123*"; // la contraseña que quieras usar

const generate = async () => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  console.log("HASH:", hash);
};

generate();