import { toFile } from "@imagekit/nodejs";
import imageKitClient from "../../config/cloudStorage.js";

const uploadBuffer = async ({ buffer, fileName, folder = "/" }) => {
  return await imageKitClient.files.upload({
    file: await toFile(Buffer.from(buffer), "file"),
    fileName,
    folder: "/virtual_mitra" + folder,
  });
};

export default uploadBuffer;
