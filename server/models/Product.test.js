const Product = require("./Product")
// @ponicode
describe("save", () => {
    let inst

    beforeEach(() => {
        inst = new Product.ProductsRepo()
    })

    test("0", async () => {
        await inst.save("Organize files in your directory instantly, ", 392.00)
    })

    test("1", async () => {
        await inst.save("No description.", 12345)
    })

    test("2", async () => {
        await inst.save("(no description available)", 571.00)
    })

    test("3", async () => {
        await inst.save("policy_abc", "a1969970175")
    })

    test("4", async () => {
        await inst.save("description", 258.00)
    })

    test("5", async () => {
        await inst.save("", NaN)
    })
})

// @ponicode
describe("delete", () => {
    let inst

    beforeEach(() => {
        inst = new Product.ProductsRepo()
    })

    test("0", async () => {
        await inst.delete(12345)
    })

    test("1", async () => {
        await inst.delete("a1969970175")
    })

    test("2", async () => {
        await inst.delete(56784)
    })

    test("3", async () => {
        await inst.delete(12)
    })

    test("4", async () => {
        await inst.delete("bc23a9d531064583ace8f67dad60f6bb")
    })

    test("5", async () => {
        await inst.delete(-Infinity)
    })
})

// @ponicode
describe("list", () => {
    let inst

    beforeEach(() => {
        inst = new Product.ProductsRepo()
    })

    test("0", async () => {
        await inst.list()
    })
})

// @ponicode
describe("getById", () => {
    let inst

    beforeEach(() => {
        inst = new Product.ProductsRepo()
    })

    test("0", async () => {
        await inst.getById(987650)
    })

    test("1", async () => {
        await inst.getById("a1969970175")
    })

    test("2", async () => {
        await inst.getById(56784)
    })

    test("3", async () => {
        await inst.getById(12)
    })

    test("4", async () => {
        await inst.getById(12345)
    })

    test("5", async () => {
        await inst.getById(NaN)
    })
})
