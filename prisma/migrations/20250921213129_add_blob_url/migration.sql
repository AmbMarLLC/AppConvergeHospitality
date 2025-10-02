/*
  Warnings:

  - Added the required column `active` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `phone` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `propertyAddress` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `propertyCode` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `position` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "active" BOOLEAN NOT NULL,
ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "propertyAddress" SET NOT NULL,
ALTER COLUMN "propertyCode" SET NOT NULL,
ALTER COLUMN "position" SET NOT NULL;

-- CreateTable
CREATE TABLE "public"."fileData" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fileName" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "incidentReportId" TEXT NOT NULL,
    "blobUrl" TEXT NOT NULL,

    CONSTRAINT "fileData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."incidentReport" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" TEXT,
    "authorEmail" TEXT,
    "authorPhone" TEXT,
    "authorPosition" TEXT,
    "authorProperty" TEXT,
    "theft" BOOLEAN NOT NULL,
    "propertyDamage" BOOLEAN,
    "injury" BOOLEAN NOT NULL,
    "declined" BOOLEAN NOT NULL,
    "firstaid" BOOLEAN NOT NULL,
    "medicalTreatment" BOOLEAN NOT NULL,
    "emergencyTreatment" BOOLEAN NOT NULL,
    "affectedName" TEXT NOT NULL,
    "affectedAddress" TEXT NOT NULL,
    "affectedPhone" TEXT NOT NULL,
    "affectedEmail" TEXT NOT NULL,
    "affiliation" TEXT NOT NULL,
    "guest" BOOLEAN NOT NULL,
    "employee" BOOLEAN NOT NULL,
    "vendor" BOOLEAN NOT NULL,
    "incidentTime" TEXT,
    "incidentDate" TEXT,
    "emergencyServices" TEXT NOT NULL,
    "emergencyServicesCYes" BOOLEAN NOT NULL,
    "emergencyServicesCNo" BOOLEAN NOT NULL,
    "incidentDescription" TEXT NOT NULL,
    "otherName1" TEXT NOT NULL,
    "otherPhone1" TEXT NOT NULL,
    "otherName2" TEXT NOT NULL,
    "otherPhone2" TEXT NOT NULL,
    "otherName3" TEXT NOT NULL,
    "otherPhone3" TEXT NOT NULL,
    "witnessName1" TEXT NOT NULL,
    "witnessPhone1" TEXT NOT NULL,
    "witnessName2" TEXT NOT NULL,
    "witnessPhone2" TEXT NOT NULL,
    "witnessName3" TEXT NOT NULL,
    "witnessPhone3" TEXT NOT NULL,
    "stolenItem" TEXT NOT NULL,
    "stolenItemValue" TEXT NOT NULL,
    "compensation" TEXT NOT NULL,
    "compensationYes" BOOLEAN NOT NULL,
    "compensationNo" BOOLEAN NOT NULL,
    "weather" TEXT NOT NULL,
    "guestImpact" TEXT NOT NULL,
    "restorationCompany" TEXT NOT NULL,
    "photosYes" BOOLEAN NOT NULL,
    "photosNo" BOOLEAN NOT NULL,
    "physicianName" TEXT NOT NULL,
    "physicianAddress" TEXT NOT NULL,
    "DOB" TEXT NOT NULL,
    "shoes" TEXT NOT NULL,
    "training" TEXT NOT NULL,
    "daysOff" TEXT NOT NULL,
    "returnDate" TEXT NOT NULL,

    CONSTRAINT "incidentReport_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."fileData" ADD CONSTRAINT "fileData_incidentReportId_fkey" FOREIGN KEY ("incidentReportId") REFERENCES "public"."incidentReport"("id") ON DELETE CASCADE ON UPDATE CASCADE;
