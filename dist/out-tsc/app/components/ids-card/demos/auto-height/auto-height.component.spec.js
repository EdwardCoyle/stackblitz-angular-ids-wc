import { TestBed } from '@angular/core/testing';
import { AutoHeightComponent } from './auto-height.component';
describe('AutoHeightComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AutoHeightComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(AutoHeightComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=auto-height.component.spec.js.map