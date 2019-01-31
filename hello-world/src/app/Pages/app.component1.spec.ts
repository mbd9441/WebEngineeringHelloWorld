import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent1 } from './app.component1';

describe('AppComponent1', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent1
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent1);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hello-world'`, () => {
    const fixture = TestBed.createComponent(AppComponent1);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('hello-world');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent1);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to hello-world!');
  });
});
