import { TestBed } from '@angular/core/testing';
import { OverlayOpacityComponent } from './overlay-opacity.component';
describe('OverlayOpacityComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OverlayOpacityComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OverlayOpacityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=overlay-opacity.component.spec.js.map