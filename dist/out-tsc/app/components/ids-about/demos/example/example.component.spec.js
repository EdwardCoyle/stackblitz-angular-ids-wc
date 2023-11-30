import { TestBed } from '@angular/core/testing';
import { ExampleComponent } from './example.component';
describe('ExampleComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExampleComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=example.component.spec.js.map