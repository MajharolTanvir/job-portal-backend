import { SocialPlatform } from '@prisma/client';
import { prisma } from '../../../shared/prisma';

const insertIntoDB = async (data: SocialPlatform): Promise<SocialPlatform> => {
  return await prisma.socialPlatform.create({
    data,
  });
};

const getAllFromDB = async (): Promise<SocialPlatform[]> => {
  return await prisma.socialPlatform.findMany({});
};

const getByIdFromDB = async (id: string): Promise<SocialPlatform | null> => {
  return await prisma.socialPlatform.findFirst({
    where: { id: id },
  });
};
const updateByIdIntoDB = async (
  id: string,
  payload: Partial<SocialPlatform>
): Promise<SocialPlatform> => {
  return await prisma.socialPlatform.update({
    where: { id },
    data: payload,
  });
};

const deleteByIdFromDB = async (id: string) => {
  await prisma.socialPlatform.delete({
    where: { id },
  });
};

export const SocialPlatformService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateByIdIntoDB,
  deleteByIdFromDB,
};
