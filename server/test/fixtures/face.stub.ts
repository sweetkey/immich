import { AssetFaceEntity } from 'src/entities/asset-face.entity';
import { SourceType } from 'src/enum';
import { assetStub } from 'test/fixtures/asset.stub';
import { personStub } from 'test/fixtures/person.stub';

type NonNullableProperty<T> = { [P in keyof T]: NonNullable<T[P]> };

export const faceStub = {
  face1: Object.freeze<NonNullableProperty<AssetFaceEntity>>({
    id: 'assetFaceId1',
    assetId: assetStub.image.id,
    asset: assetStub.image,
    personId: personStub.withName.id,
    person: personStub.withName,
    boundingBoxX1: 0,
    boundingBoxY1: 0,
    boundingBoxX2: 1,
    boundingBoxY2: 1,
    imageHeight: 1024,
    imageWidth: 1024,
    sourceType: SourceType.MACHINE_LEARNING,
    faceSearch: { faceId: 'assetFaceId1', embedding: '[1, 2, 3, 4]' },
    deletedAt: new Date(),
  }),
  primaryFace1: Object.freeze<AssetFaceEntity>({
    id: 'assetFaceId2',
    assetId: assetStub.image.id,
    asset: assetStub.image,
    personId: personStub.primaryPerson.id,
    person: personStub.primaryPerson,
    boundingBoxX1: 0,
    boundingBoxY1: 0,
    boundingBoxX2: 1,
    boundingBoxY2: 1,
    imageHeight: 1024,
    imageWidth: 1024,
    sourceType: SourceType.MACHINE_LEARNING,
    faceSearch: { faceId: 'assetFaceId2', embedding: '[1, 2, 3, 4]' },
    deletedAt: null,
  }),
  mergeFace1: Object.freeze<AssetFaceEntity>({
    id: 'assetFaceId3',
    assetId: assetStub.image.id,
    asset: assetStub.image,
    personId: personStub.mergePerson.id,
    person: personStub.mergePerson,
    boundingBoxX1: 0,
    boundingBoxY1: 0,
    boundingBoxX2: 1,
    boundingBoxY2: 1,
    imageHeight: 1024,
    imageWidth: 1024,
    sourceType: SourceType.MACHINE_LEARNING,
    faceSearch: { faceId: 'assetFaceId3', embedding: '[1, 2, 3, 4]' },
    deletedAt: null,
  }),
  start: Object.freeze<AssetFaceEntity>({
    id: 'assetFaceId5',
    assetId: assetStub.image.id,
    asset: assetStub.image,
    personId: personStub.newThumbnail.id,
    person: personStub.newThumbnail,
    boundingBoxX1: 5,
    boundingBoxY1: 5,
    boundingBoxX2: 505,
    boundingBoxY2: 505,
    imageHeight: 2880,
    imageWidth: 2160,
    sourceType: SourceType.MACHINE_LEARNING,
    faceSearch: { faceId: 'assetFaceId5', embedding: '[1, 2, 3, 4]' },
    deletedAt: null,
  }),
  middle: Object.freeze<AssetFaceEntity>({
    id: 'assetFaceId6',
    assetId: assetStub.image.id,
    asset: assetStub.image,
    personId: personStub.newThumbnail.id,
    person: personStub.newThumbnail,
    boundingBoxX1: 100,
    boundingBoxY1: 100,
    boundingBoxX2: 200,
    boundingBoxY2: 200,
    imageHeight: 500,
    imageWidth: 400,
    sourceType: SourceType.MACHINE_LEARNING,
    faceSearch: { faceId: 'assetFaceId6', embedding: '[1, 2, 3, 4]' },
    deletedAt: null,
  }),
  end: Object.freeze<AssetFaceEntity>({
    id: 'assetFaceId7',
    assetId: assetStub.image.id,
    asset: assetStub.image,
    personId: personStub.newThumbnail.id,
    person: personStub.newThumbnail,
    boundingBoxX1: 300,
    boundingBoxY1: 300,
    boundingBoxX2: 495,
    boundingBoxY2: 495,
    imageHeight: 500,
    imageWidth: 500,
    sourceType: SourceType.MACHINE_LEARNING,
    faceSearch: { faceId: 'assetFaceId7', embedding: '[1, 2, 3, 4]' },
    deletedAt: null,
  }),
  noPerson1: Object.freeze<AssetFaceEntity>({
    id: 'assetFaceId8',
    assetId: assetStub.image.id,
    asset: assetStub.image,
    personId: null,
    person: null,
    boundingBoxX1: 0,
    boundingBoxY1: 0,
    boundingBoxX2: 1,
    boundingBoxY2: 1,
    imageHeight: 1024,
    imageWidth: 1024,
    sourceType: SourceType.MACHINE_LEARNING,
    faceSearch: { faceId: 'assetFaceId8', embedding: '[1, 2, 3, 4]' },
    deletedAt: null,
  }),
  noPerson2: Object.freeze<AssetFaceEntity>({
    id: 'assetFaceId9',
    assetId: assetStub.image.id,
    asset: assetStub.image,
    personId: null,
    person: null,
    boundingBoxX1: 0,
    boundingBoxY1: 0,
    boundingBoxX2: 1,
    boundingBoxY2: 1,
    imageHeight: 1024,
    imageWidth: 1024,
    sourceType: SourceType.MACHINE_LEARNING,
    faceSearch: { faceId: 'assetFaceId9', embedding: '[1, 2, 3, 4]' },
    deletedAt: null,
  }),
  fromExif1: Object.freeze<AssetFaceEntity>({
    id: 'assetFaceId9',
    assetId: assetStub.image.id,
    asset: assetStub.image,
    personId: personStub.randomPerson.id,
    person: personStub.randomPerson,
    boundingBoxX1: 100,
    boundingBoxY1: 100,
    boundingBoxX2: 200,
    boundingBoxY2: 200,
    imageHeight: 500,
    imageWidth: 400,
    sourceType: SourceType.EXIF,
    deletedAt: null,
  }),
  fromExif2: Object.freeze<AssetFaceEntity>({
    id: 'assetFaceId9',
    assetId: assetStub.image.id,
    asset: assetStub.image,
    personId: personStub.randomPerson.id,
    person: personStub.randomPerson,
    boundingBoxX1: 0,
    boundingBoxY1: 0,
    boundingBoxX2: 1,
    boundingBoxY2: 1,
    imageHeight: 1024,
    imageWidth: 1024,
    sourceType: SourceType.EXIF,
    deletedAt: null,
  }),
  withBirthDate: Object.freeze<AssetFaceEntity>({
    id: 'assetFaceId10',
    assetId: assetStub.image.id,
    asset: assetStub.image,
    personId: personStub.withBirthDate.id,
    person: personStub.withBirthDate,
    boundingBoxX1: 0,
    boundingBoxY1: 0,
    boundingBoxX2: 1,
    boundingBoxY2: 1,
    imageHeight: 1024,
    imageWidth: 1024,
    sourceType: SourceType.MACHINE_LEARNING,
    deletedAt: null,
  }),
};
