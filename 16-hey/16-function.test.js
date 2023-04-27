const hey = require("./16-function")

describe("hey", () => {
  it("responds with 'Sure.' to a normal question", () => {
    expect(hey("How are you?")).toEqual("Sure.")
  })

  it("responds with 'Whoa, chill out!' to yelling", () => {
    expect(hey("STOP YELLING!")).toEqual("Whoa, chill out!")
  })

  it("responds with 'Calm down, I know what I'm doing!' to yelling a question", () => {
    expect(hey("WHAT'S GOING ON?")).toEqual("Calm down, I know what I'm doing!")
  })

  it("responds with 'Fine. Be that way!' to being addressed without saying anything", () => {
    expect(hey("   ")).toEqual("Fine. Be that way!")
  })

  it("responds with 'Whatever.' to anything else", () => {
    expect(hey("This is a statement.")).toEqual("Whatever.")
  })
})
