import { TestBed } from '@angular/core/testing';
import { ResponsiveComponent } from './responsive.component';
describe('ResponsiveComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ResponsiveComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ResponsiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=responsive.component.spec.js.map