"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformMasterDataHelper = {
    generateMasterData(dbMasterData) {
        try {
            return dbMasterData.map((dbData) => {
                return { name: dbData.dataValues.name, id: dbData.dataValues.id };
            });
        }
        catch (error) {
            throw new Error("Error i db data json parsing");
        }
    }
};
//# sourceMappingURL=transform-master-data-helper.js.map