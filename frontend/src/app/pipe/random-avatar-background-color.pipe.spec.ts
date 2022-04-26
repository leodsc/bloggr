import { RandomAvatarBackgroundColorPipe } from './random-avatar-background-color.pipe';

describe('RandomAvatarBackgroundColorPipe', () => {
  it('create an instance', () => {
    const pipe = new RandomAvatarBackgroundColorPipe();
    expect(pipe).toBeTruthy();
  });
});
