/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Mission` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Mission_title_key" ON "Mission"("title");
