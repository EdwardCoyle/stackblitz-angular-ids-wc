import { TestBed } from '@angular/core/testing';
import { AutoFitComponent } from './auto-fit.component';
describe('AutoFitComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AutoFitComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(AutoFitComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=auto-fit.component.spec.js.map