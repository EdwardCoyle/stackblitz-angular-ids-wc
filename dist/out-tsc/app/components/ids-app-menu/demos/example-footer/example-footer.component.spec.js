import { TestBed } from '@angular/core/testing';
import { ExampleFooterComponent } from './example-footer.component';
describe('ExampleFooterComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExampleFooterComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ExampleFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=example-footer.component.spec.js.map