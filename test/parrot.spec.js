
import ParrotEuropean from '../parrot_european';
import ParrotAfrican from '../parrot_african';
import ParrotNorwegianBlue from '../parrot_norwegian_blue';
import Bird from '../bird';
var expect = require('chai').expect;

describe("Parrot", function () {
    it("get speed of european parrot", function () {
        const parrot = new ParrotEuropean();
        const bird = new Bird();
        expect(bird.getSpeedBird(parrot)).equal(12);
    });

    it("get speed of african parrot with one coconut", function () {
        const parrot = new ParrotAfrican(1);
        const bird = new Bird();   
        expect(bird.getSpeedBird(parrot)).equal(3);
    });

    it("get speed of african parrot with two coconuts", function () {
        const parrot = new ParrotNorwegianBlue(0, false);
        const bird = new Bird();
        expect(bird.getSpeedBird(parrot)).equal(0);
    });

    it("get speed of african parrot with no coconuts", function () {
        const parrot = new ParrotAfrican(0);
        const bird = new Bird();
        expect(bird.getSpeedBird(parrot)).equal(12);
    });

    it("get speed norwegian blue parrot nailed", function () {
        const parrot = new ParrotNorwegianBlue(1.5, true);
        const bird = new Bird();
        expect(bird.getSpeedBird(parrot)).equal(0);
    });

    it("get speed norwegian blue parrot not nailed", function () {
        const parrot = new ParrotNorwegianBlue(1.5, false);
        const bird = new Bird();
        expect(bird.getSpeedBird(parrot)).equal(18);
    });

    it("get speed norwegian blue parrot not nailed high voltage", function () {
        const parrot = new ParrotNorwegianBlue(4, false);
        const bird = new Bird();
        expect(bird.getSpeedBird(parrot)).equal(24);
    });
});
